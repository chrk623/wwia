/**
 * Deletes a cookie by name
 * @param {string} name - Cookie name to delete
 * @example
 * deleteCookie("theme")
 */
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
};
