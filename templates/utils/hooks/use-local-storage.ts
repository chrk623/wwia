/**
 * A hook that manages state in localStorage
 * @template T - Value type
 * @param {string} key - localStorage key
 * @param {T} initialValue - Initial value
 * @returns {[T, (value: T | ((val: T) => T)) => void]} Stored value and setter
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light')
 */
import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
