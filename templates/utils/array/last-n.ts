/**
 * Returns the last n elements from an array
 * @template T - The type of array elements
 * @param {T[]} array - The input array
 * @param {number} [n=1] - Number of elements to take from the end
 * @returns {T | T[]} Single element if n=1, array of elements otherwise
 * @example
 * takeLast([1, 2, 3]) // returns 3
 * takeLast([1, 2, 3], 2) // returns [2, 3]
 */
export const lastN = <T>(array: T[], n: number = 1): T | T[] => {
  if (n === 1) return array[array.length - 1];
  return array.filter((_, index) => array.length - index <= n);
};
