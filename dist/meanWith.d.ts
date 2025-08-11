/**
 * Applies the `transform` function to each element of an array, then returns
 * the mean of the result. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * meanWith([1, 3, -8], Math.abs);       // 4
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function meanWith<I extends any[]>(data: I, transform: Fn<ElementType<I>, number>): number;
/**
 * @param transform
 *
 * @example
 * ```
 * meanWith(Math.abs)([1, 3, -8]);       // 4
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function meanWith<I extends any[]>(transform: Fn<ElementType<I>, number>): (data: I) => number;
