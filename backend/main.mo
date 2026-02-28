import Time "mo:core/Time";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Migration "migration";

(with migration = Migration.run)
actor {
  type ContactFormEntry = {
    name : Text;
    email : Text;
    businessName : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactEntries = List.empty<ContactFormEntry>();

  type ContactFormError = {
    #emptyEmail;
    #emptyMessage;
    #submissionFailed : Text;
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, businessName : Text, message : Text) : async () {
    if (email.isEmpty()) {
      Runtime.trap("emptyEmail");
    };
    if (message.isEmpty()) {
      Runtime.trap("emptyMessage");
    };

    let entry : ContactFormEntry = {
      name;
      email;
      businessName;
      message;
      timestamp = Time.now();
    };

    contactEntries.add(entry);
  };

  public query ({ caller }) func getAllContactEntries() : async [ContactFormEntry] {
    contactEntries.toArray();
  };
};
