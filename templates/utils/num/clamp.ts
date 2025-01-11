/**
 * Clamps a number between minimum and maximum values
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 * @example
 * clamp(5, 0, 10) // returns 5
 * clamp(15, 0, 10) // returns 10
 */
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
