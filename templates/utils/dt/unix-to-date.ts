/**
 * Converts a Unix timestamp to Date object
 * @param {number} unix - Unix timestamp in seconds
 * @returns {Date} JavaScript Date object
 * @example
 * unixToDate(1625097600) // returns Date object for 2021-07-01
 */
export const unixToDate = (unix: number) => new Date(unix * 1000);
