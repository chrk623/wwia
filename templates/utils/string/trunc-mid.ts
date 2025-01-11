/**
 * Truncates a string in the middle, preserving start and end parts
 * @param {string} str - The string to truncate
 * @param {number} startLength - Number of characters to keep from start
 * @param {number} endLength - Number of characters to keep from end
 * @returns {string} String truncated in the middle with ellipsis
 * @example
 * truncateMiddle("hello world my friends", 5, 6) // returns "hello...iends"
 */
export const truncateMiddle = (
  str: string,
  startLength: number,
  endLength: number,
) => {
  if (str.length <= startLength + endLength) return str;
  return str.slice(0, startLength) + "..." + str.slice(-endLength);
};
