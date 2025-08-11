/**
 * Breaks `data` into an array of subarrays or substrings, each of length `size`.
 * If `size` does not divide evenly into the length of `data`, the last subarray
 * will contain fewer than `size` elements. Returns an empty array if `size` is invalid.
 *
 * @param data
 * @param size must be a postive integer
 *
 * @example
 * ```
 * chunk([2, 3, 4, 5, 6, 7], 2);     // [[2, 3], [4, 5], [6, 7]]
 * chunk([2, 3, 4, 5, 6], 3);        // [[2, 3, 4], [5, 6]]
 * chunk("ostrich", 3);              // ["ost", "ric", "h"]
 * ```
 *
 * @category Array
 */
export declare function chunk<I extends any[] | string>(data: I, size: number): I[];
/**
 * @param size
 *
 * @example
 * ```
 * chunk(2)([2, 3, 4, 5, 6, 7]);     // [[2, 3], [4, 5], [6, 7]]
 * ```
 *
 * @category Array
 */
export declare function chunk<I extends any[] | string>(size: number): (data: I) => I[];
