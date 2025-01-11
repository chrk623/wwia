/**
 * Truncates a string to a specified length and adds ellipsis
 * @param {string} str - The string to truncate
 * @param {number} length - Maximum length of the resulting string
 * @returns {string} Truncated string with ellipsis if needed
 * @example
 * truncate("Hello World", 5) // returns "Hello..."
 */
export const truncate = (str: string, length: number) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};
