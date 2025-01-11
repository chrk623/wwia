/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * @template T - Function type
 * @param {T} func - Function to debounce
 * @param {number} wait - Milliseconds to delay
 * @returns {Function} Debounced function
 * @example
 * const debouncedSave = debounce(save, 1000)
 */
export const debounceFn = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
