/**
 * @description
 * Clamps a value
 *
 * @param value The value to clamp
 * @param min The minimum value
 * @param max The maximum value
 */
export function clamp(value: number, min: number, max?: number) {
  return Math.max(Math.min(value, max ?? value), min);
}