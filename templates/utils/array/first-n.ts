/**
 * Returns the first n elements from an array
 * @template T - The type of array elements
 * @param {T[]} array - The input array
 * @param {number} [n=1] - Number of elements to take from the start
 * @returns {T | T[]} Single element if n=1, array of elements otherwise
 * @example
 * take([1, 2, 3]) // returns 1
 * take([1, 2, 3], 2) // returns [1, 2]
 */
export const firstN = <T>(array: T[], n: number = 1): T | T[] => {
  if (n === 1) return array[0];
  return array.filter((_, index) => index < n);
};
