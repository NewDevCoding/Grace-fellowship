export const allowedEmails: string[] = [
  // Add new email addresses here to allow users to sign in
  // Example: "user@example.com"
  "isaac@thesheridans.email",
   
];

export const isEmailAllowed = (email: string): boolean => {
  return allowedEmails.includes(email.toLowerCase());
}; 