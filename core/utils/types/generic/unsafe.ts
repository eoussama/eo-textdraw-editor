import { TNullable } from './nullable';


/**
 * @description
 * Unsafe type
 */
export type TUnsafe<T> = TNullable<T> | undefined;