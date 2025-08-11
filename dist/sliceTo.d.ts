/**
 * Return a shallow copy of the `data` array or string up to, but not including,
 * the index 'to`. Returns an empty array if `to` is not an integer.
 *
 * @param data
 * @param to
 *
 * @example
 * ```
 * sliceTo([2, 3, 4, 5], 2);     // [2, 3]
 * sliceTo([2, 3, 4, 5], -1);    // [2, 3, 4]
 * sliceTo([2, 3, 4, 5], 6);     // [2, 3, 4, 5]
 * sliceTo("ostrich", 2);        // "os"
 * sliceTo("ostrich", -2);       // "ostri"
 * sliceTo("ostrich", 10);       // "ostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceTo<I extends any[] | string>(data: I, to: number): I;
/**
 * @param to
 *
 * @example
 * ```
 * sliceTo(2)([2, 3, 4, 5]);     // [2, 3]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceTo<I extends any[] | string>(to: number): (data: I) => I;
