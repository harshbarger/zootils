/**
 * Returns a shallow copy of the portion of the `data` array or string beginning at index
 * `from` and ending with, but not including, the index `to`. Negative index values count
 * backward from the end of the arrry. Returns an empty array if `from` or `to` is not an
 * integer, or if `from` is out of the array bounds.
 *
 * @param data
 * @param from
 * @param to
 *
 * @example
 * ```
 * slice([2, 3, 4, 5, 6], 2, 4);            // [4, 5]
 * slice([2, 3, 4, 5, 6], 2, -1);           // [4, 5]
 * slice("ostrich", 2, 4);                  // "tr"
 * slice("ostrich", 2, -1);                 // "tr"
 * slice([2, 3, 4, 5, 6], -4, 10);          // [3, 4, 5, 6], going past end of array is OK)
 * slice([2, 3, 4, 5, 6], -10, 4);          // [], starting at -10 is non-sensical
 * ```
 *
 * @category Array
 * @category String
 */
export declare function slice<I extends any[] | string>(data: I, from: number, to: number): I;
/**
 * @param from
 * @param to
 *
 * @example
 * ```
 * slice(2, 4)([2, 3, 4, 5, 6]);            // [4, 5]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function slice<I extends any[] | string>(from: number, to: number): (data: I) => I;
