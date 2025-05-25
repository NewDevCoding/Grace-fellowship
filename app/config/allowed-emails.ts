export const allowedEmails: string[] = [
  // Add your allowed email addresses here
  // Example: "user@example.com"
  "isaac@thesheridans.email"
];

export const isEmailAllowed = (email: string): boolean => {
  return allowedEmails.includes(email.toLowerCase());
}; 