/**
 * @description
 * Generates a random number between two input values
 *
 * @param min The minimum valie
 * @param max The maximum value
 */
export function generateNumber(min: number, max: number) {
  return Math.floor(min + (Math.random() * max));
}