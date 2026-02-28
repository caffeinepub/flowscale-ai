import List "mo:core/List";
import Time "mo:core/Time";

module {
  type OldActor = {};
  type ContactFormEntry = {
    name : Text;
    email : Text;
    businessName : Text;
    message : Text;
    timestamp : Time.Time;
  };
  type NewActor = {
    contactEntries : List.List<ContactFormEntry>;
  };

  public func run(_ : OldActor) : NewActor {
    { contactEntries = List.empty<ContactFormEntry>() };
  };
};
