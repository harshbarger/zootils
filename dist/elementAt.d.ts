/**
 * Returns the element of `data` at `index`, or `undefined` if `index` is out of bounds
 * or otherwise invalid.
 *
 * @param data
 * @param index counts backward from end of array if negative, must be integer
 *
 * @example
 * ```
 * elementAt([2, 4, 6], 2);      // 6
 * elementAt([2, 4, 6], -2);     // 4
 * elementAt([2, 4, 6], 5);      // undefined
 * ```
 *
 * @category Array
 */
export declare function elementAt<I extends any[]>(data: I, index: number): ElementType<I> | undefined;
/**
 * @param index
 *
 * @example
 * ```
 * elementAt(2)([2, 4, 6]);      // 6
 * ```
 *
 * @category Array
 */
export declare function elementAt<I extends any[]>(index: number): (data: I) => ElementType<I> | undefined;
