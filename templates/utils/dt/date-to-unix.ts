/**
 * Converts a Date object to Unix timestamp
 * @param {Date} date - JavaScript Date object
 * @returns {number} Unix timestamp in seconds
 * @example
 * dateToUnix(new Date('2021-07-01')) // returns 1625097600
 */
export const dateToUnix = (date: Date) => Math.floor(date.getTime() / 1000);
