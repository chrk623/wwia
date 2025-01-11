/**
 * Returns a relative time string (e.g., "2 hours ago" or "in 3 days")
 * @param {Date | number} date - Date object or timestamp to compare
 * @returns {string} Relative time string
 * @example
 * getRelativeTimeString(new Date(Date.now() - 7200000)) // returns "2 hours ago"
 */
export const getRelativeTimeString = (date: Date | number): string => {
  const timeMs = typeof date === "number" ? date : date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

  const cutoffs = [
    { max: 60, value: 1, text: "second" },
    { max: 3600, value: 60, text: "minute" },
    { max: 86400, value: 3600, text: "hour" },
    { max: 2592000, value: 86400, text: "day" },
    { max: 31536000, value: 2592000, text: "month" },
    { max: Infinity, value: 31536000, text: "year" },
  ];

  const cutoff = cutoffs.find((cutoff) => Math.abs(deltaSeconds) < cutoff.max);
  if (!cutoff) return "just now";

  const value = Math.round(Math.abs(deltaSeconds) / cutoff.value);
  const text = `${value} ${cutoff.text}${value !== 1 ? "s" : ""}`;

  return deltaSeconds > 0 ? `in ${text}` : `${text} ago`;
};
