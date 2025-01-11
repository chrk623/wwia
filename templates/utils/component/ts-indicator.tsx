import React from "react";

/**
 * TailwindIndicator
 *
 * A React component that visually displays the current Tailwind CSS breakpoint
 * for debugging purposes. It renders a small fixed indicator in the bottom-left
 * corner of the screen with the active breakpoint label.
 *
 * The component only works in non-production environments (i.e., when `process.env.NODE_ENV !== "production"`).
 *
 * @returns {JSX.Element | null} A visual indicator for the Tailwind CSS breakpoint or `null` in production.
 *
 * @example
 * // Usage:
 * import { TailwindIndicator } from './TailwindIndicator';
 *
 * function App() {
 *   return (
 *     <div>
 *       <TailwindIndicator />
 *       <MainAppContent />
 *     </div>
 *   );
 * }
 *
 * // In development mode, you'll see a small indicator showing the active breakpoint.
 * // In production, the component returns `null` and renders nothing.
 */
export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
