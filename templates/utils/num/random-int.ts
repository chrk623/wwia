/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} A random integer between min and max
 * @example
 * randomInt(1, 10) // returns a number between 1 and 10
 * randomInt(-5, 5) // returns a number between -5 and 5
 */
export const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
