/**
 * Creates a new array with `length` elements, each filled with `value`.
 *
 * Creates an empty array for invalid `length` (non-integer or negative).
 *
 * @param length
 * @param value
 *
 * @example
 * ```
 * createArrayOf(5, 4);         // [4, 4, 4, 4, 4]
 * ```
 *
 * @category Array
 */
export declare function createArrayOf<E>(length: number, value: E): E[];
