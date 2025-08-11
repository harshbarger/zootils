/**
 * Creates a new array with `length` elements. Element values are determined
 * by a `transform` of the element index.
 *
 * Creates an empty array for invalid `length` (non-integer or negative).
 *
 * @param length
 * @param transform
 *
 * @example
 * ```
 * createArrayWith(5, i => i ** 2);         // [0, 1, 4, 9, 16]
 * ```
 *
 * @category Array
 */
export declare function createArrayWith<E>(length: number, transform: (x: number) => E): E[];
