import { TNullable } from './nullable.type';


/**
 * @description
 * Unsafe type
 */
export type TUnsafe<T> = TNullable<T> | undefined;