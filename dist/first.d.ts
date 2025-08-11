/**
 * Returns the first element of an array, or `undefined` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * first([3, 4, 6]);    // 3
 * ```
 *
 * @category Array
 */
export declare function first<I extends any[]>(data: I): ElementType<I> | undefined;
