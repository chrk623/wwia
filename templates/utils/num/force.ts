/**
 * Forces a string to be a number by removing all non-numeric characters or throws an error for invalid input.
 * @param {string} value - The input string
 * @returns {number} The numeric value extracted from the string
 * @throws {Error} If the input contains alphabetic characters or non-numeric symbols
 * @example
 * forceNumber("123456") // returns 123456
 * forceNumber("abc") // throws Error: "Input contains invalid characters"
 */
export const forceNum = (value: string): number => {
  if (/[^0-9]/.test(value)) {
    throw new Error("Input contains invalid characters");
  }
  const numericString = value.replace(/[^0-9]/g, "");
  return numericString ? parseInt(numericString, 10) : 0;
};
