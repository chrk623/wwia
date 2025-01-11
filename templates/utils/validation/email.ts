/**
 * Checks if a string is a valid email address
 * @param {string} email - Email address to validate
 * @returns {boolean} Whether the email is valid
 * @example
 * isValidEmail("test@example.com") // returns true
 */
export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
