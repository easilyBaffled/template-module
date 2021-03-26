/**
 *
 * @param {string} red
 * @param {string} green
 * @param {string} blue
 *
 * @returns {string}
 */
export const rgbToHex = (red, green, blue) => {
  const redHex = red.toString(16);
  const greenHex = green.toString(16);
  const blueHex = blue.toString(16);

  return pad(redHex) + pad(greenHex) + pad(blueHex);
};

/**
 *
 * @param {string} hex
 * @returns {string}
 */
export const hexToRgb = (hex) => {
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];
};

/**
 *
 * @param {string} hex
 * @returns {string}
 */
const pad = (hex) => (hex.length === 1 ? "0" + hex : hex);
