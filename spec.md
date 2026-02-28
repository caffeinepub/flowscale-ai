# Specification

## Summary
**Goal:** Replace the "Book a Free 15-Min Strategy Call" button in the BottomCTA section with an inline contact/booking form that stores submissions in the backend.

**Planned changes:**
- Replace the CTA button in the BottomCTA section with an inline form collecting Full Name, Email Address, Business Name, and a "What do you want to automate?" textarea
- Add a submit button labeled "Book My Free Strategy Call" styled with the teal accent
- Show a success confirmation message after submission and an inline error message on failure
- Add a loading/spinner state on the submit button while the canister call is in-flight
- Add form validation requiring Name and Email to be non-empty before submission
- Add a Motoko data type and stable storage for contact form entries (name, email, businessName, message, createdAt timestamp)
- Add a `submitContactForm` update function and a `getContactSubmissions` query function to the backend actor
- Wire the frontend form to call `submitContactForm` via the existing `useActor` hook
- Make the "Book a Call" navigation button smooth-scroll to the BottomCTA form section

**User-visible outcome:** Visitors can fill out and submit a booking/contact form directly on the page, see a confirmation message upon success, and their submissions are stored in the backend canister.
