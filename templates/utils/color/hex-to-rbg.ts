/**
 * Converts a hexadecimal color code to RGB values
 * @param {string} hex - Hexadecimal color code (e.g., "#ff0000")
 * @returns {{ r: number; g: number; b: number } | null} RGB color object or null if invalid
 * @example
 * hexToRGB("#ff0000") // returns { r: 255, g: 0, b: 0 }
 */
export const hexToRGB = (
  hex: string,
): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
