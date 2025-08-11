/**
 * Returns a shallow copy of the `data` array or string starting from index `from`.
 * A negative index counts backwards from the end of the array.
 * Returns an empty array if `from` is not an integer or is out of bounds.
 *
 * @param data
 * @param from
 *
 * @example
 * ```
 * sliceFrom([2, 3, 4], 2);        // [4]
 * sliceFrom([2, 3, 4], -2);       // [3, 4]
 * sliceFrom("ostrich", 2);        // "trich"
 * sliceFrom("ostrich", -2);       // "ch"
 * sliceFrom([2, 3, 4], 6);        // []
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceFrom<I extends any[] | string>(data: I, from: number): I;
/**
 * @param from
 *
 * @example
 * ```
 * sliceFrom(2)([2, 3, 4]);        // [4]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceFrom<I extends any[] | string>(from: number): (data: I) => I;
