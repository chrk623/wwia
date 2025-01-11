/**
 * Sets a cookie with the specified name, value, and expiration days
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} [days=7] - Number of days until the cookie expires
 * @example
 * setCookie("theme", "dark", 30)
 */
export const setCookie = (name: string, value: string, days = 7): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};
