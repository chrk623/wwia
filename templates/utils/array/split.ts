/**
 * Chunks an array into smaller arrays of specified size
 * @template T - The type of array elements
 * @param {T[]} array - The array to chunk
 * @param {number} size - The size of each chunk
 * @returns {T[][]} An array of chunks
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // returns [[1, 2], [3, 4], [5]]
 */
export const arraySplit = <T>(array: T[], size: number): T[][] => {
  return array.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
    chunks[chunkIndex].push(item);
    return chunks;
  }, [] as T[][]);
};
