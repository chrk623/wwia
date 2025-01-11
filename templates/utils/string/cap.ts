/**
 * Capitalizes the first character of a string while keeping the rest unchanged.
 * @param {string} str - The input string
 * @returns {string} The string with the first character capitalized
 * @example
 * capitalizeFirstChar("hello") // returns "Hello"
 * capitalizeFirstChar("WORLD") // returns "WORLD"
 */
export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
