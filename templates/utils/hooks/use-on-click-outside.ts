/**
 * useOnClickOutside
 *
 * A React hook that detects and handles clicks outside of a specified element.
 *
 * @template T - The type of the element the ref points to, defaulting to `HTMLElement`.
 * @param {RefObject<T>} ref - A React ref object pointing to the target element.
 * @param {(event: Event) => void} handler - A function to handle click or touch events outside the referenced element.
 *
 * The hook listens for `mousedown` and `touchstart` events and calls the provided handler
 * when a click or touch event occurs outside the referenced element.
 *
 * @example
 * import { useRef } from "react";
 * import { useOnClickOutside } from "./useOnClickOutside";
 *
 * function Dropdown({ isOpen, onClose }) {
 *   const ref = useRef(null);
 *
 *   useOnClickOutside(ref, () => {
 *     if (isOpen) {
 *       onClose();
 *     }
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       {isOpen && <div>Dropdown content</div>}
 *     </div>
 *   );
 * }
 *
 * @returns void
 */
import { useEffect } from "react";
import type { RefObject } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
