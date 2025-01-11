/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @template T - The type of array elements
 * @param {T[]} array - The array to shuffle
 * @returns {T[]} A new shuffled array
 * @example
 * shuffle([1, 2, 3, 4, 5]) // returns array in random order
 */
export const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
