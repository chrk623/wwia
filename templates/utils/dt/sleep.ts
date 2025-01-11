/**
 * Creates a promise that resolves after specified milliseconds
 * @param {number} ms - Number of milliseconds to sleep
 * @returns {Promise<void>} Promise that resolves after the delay
 * @example
 * await sleep(1000) // waits for 1 second
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
