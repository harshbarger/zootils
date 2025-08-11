/**
 * Returns the last element of an array, or `undefined` if the array is empty.
 *
 * @param data
 *
 * @example
 * ```
 * last([3, 4, 6]);    // 6
 * last([]);           // undefined
 * ```
 *
 * @category Array
 */
export declare function last<I extends any[]>(data: I): ElementType<I> | undefined;
