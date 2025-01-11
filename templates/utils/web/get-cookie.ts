/**
 * Gets the value of a cookie by name
 * @param {string} name - Cookie name
 * @returns {string | null} Cookie value or null if not found
 * @example
 * const theme = getCookie("theme") // returns "dark" or null
 */
export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
