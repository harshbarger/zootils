/**
 * Inserts the `content` element into the `data` array, or the `content` substring into the `data` string
 * at the `index` position. If `index` is equal to the length of `data`, then `content` will be
 * appended to the end. Returns a shallow copy of `data` if the index is invalid.
 *
 * @param data
 * @param index negative counts backward from end, must be integer, must be in bounds
 * or equal to the length of `data`.
 * @param content
 *
 * @example
 * ```
 * insert([2, 3, 4], 1, 10);        // [2, 10, 3, 4]
 * insert([2, 3, 4], -1, 10);       // [2, 3, 10, 4]
 * insert("ostrich", 1, "aa");      // "oaastrich"
 * insert("ostrich", 7, "aa");      // "ostrichaa"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function insert<I extends any[] | string>(data: I, index: number, content: I extends any[] ? ElementType<I> : string): I;
/**
 * @param index
 * @param content
 *
 * @example
 * ```
 *  * insert(1, 10)(2, 3, 4]);       // [2, 10, 3, 4]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function insert<I extends any[] | string>(index: number, content: I extends any[] ? ElementType<I> : string): (data: I) => I;
