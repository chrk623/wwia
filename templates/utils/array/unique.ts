/**
 * Returns unique elements from an array
 * @template T - The type of array elements
 * @param {T[]} array - The input array
 * @returns {T[]} Array with unique elements
 * @example
 * unique([1, 1, 2, 3, 3]) // returns [1, 2, 3]
 */
export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};
