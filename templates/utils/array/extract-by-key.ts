/**
 * Extracts a list of property values from an array of objects
 * @template T - The type of objects in the array
 * @template K - The type of the key to pluck
 * @param {T[]} array - Array of objects
 * @param {K} key - Key to extract from each object
 * @returns {Array<T[K]>} Array of values for the specified key
 * @example
 * const users = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];
 * extract(users, 'name') // returns ['foo', 'bar']
 */
export const extractByKey = <T extends object, K extends keyof T>(
  array: T[],
  key: K,
): Array<T[K]> => {
  return array.map((element) => element[key]);
};
