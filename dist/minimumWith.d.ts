/**
 * Applies a `transform` to each element of the array, then returns the minimum
 * of the transformed array. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * minimumWith([1, 4, -6, -2], Math.abs);        // 1
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function minimumWith<I extends any[]>(data: I, transform: (x: ElementType<I>) => number): number;
/**
 * @param transform
 *
 * @example
 * ```
 * minimumWith(Math.abs, [1, 4, -6, -2]);        // 1
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function minimumWith<I extends any[]>(transform: (x: ElementType<I>) => number): (data: I) => number;
