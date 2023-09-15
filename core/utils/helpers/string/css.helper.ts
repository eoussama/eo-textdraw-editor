/**
 * @description
 * Format class string
 *
 * @param classes The classes to join
 */
export function formatClasses(...classes: Array<string>) {
  return classes.join(' ').trim();
}