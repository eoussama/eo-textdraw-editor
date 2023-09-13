import { generateNumber } from '../math/random.helper';


/**
 * @description
 * Generates a ranodm name
 *
 * @param baseName The base name
 */
export function generateName(baseName: string) {
  return `${baseName}_${generateNumber(0, 10000)}`;
}