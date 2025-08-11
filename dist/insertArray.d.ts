/**
 * Inserts the `content` array into the `data` array at the `index` position. If `index` is equal to
 * the length of `data`, then `content` will be appended to the end. Returns a shallow copy
 * of `data` if the index is invalid.
 *
 * @param data
 * @param index negative counts backward from end, must be integer, must be in array bounds
 * or equal to the length of the array.
 * @param content
 *
 * @example
 * ```
 * insertArray([2, 3, 4], 1, [10, 11]);       // [2, 10, 11, 3, 4];
 * insertArray([2, 3, 4], -1, [10, 11]);       // [2, 3, 10, 11, 4];
 * insertArray([2, 3, 4], 3, [10, 11]);       // [2, 3, 4, 10, 11];
 * ```
 *
 * @category Array
 */
export declare function insertArray<I extends any[]>(data: I, index: number, content: I): I;
/**
 * @param index
 * @param content
 *
 * @example
 * ```
 * insertArray(1, [10, 11])([2, 3, 4]);       // [2, 10, 11, 3, 4];
 * ```
 *
 * @category Array
 */
export declare function insertArray<I extends any[]>(index: number, content: I): (data: I) => I;
