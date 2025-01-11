/**
 * Checks if a string is a valid URL
 * @param {string} url - URL to validate
 * @returns {boolean} Whether the URL is valid
 * @example
 * isValidURL("https://example.com") // returns true
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
