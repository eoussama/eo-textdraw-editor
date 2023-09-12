import { generateNumber } from '../math/random';


/**
 * @description
 * Generates a ranodm name
 *
 * @param baseName The base name
 */
export function generateName(baseName: string) {
  return `${baseName}_${generateNumber(0, 10000)}`;
}