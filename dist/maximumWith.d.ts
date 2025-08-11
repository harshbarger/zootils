/**
 * Applies a `transform` to each element of the array, then returns the maximum
 * of the transformed array. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * maximumWith([1, 4, -6, -2], Math.abs);        // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function maximumWith<I extends any[]>(data: I, transform: (x: ElementType<I>) => number): number;
/**
 * @param transform
 *
 * @example
 * ```
 * maximumWith(Math.abs, [1, 4, -6, -2]);        // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function maximumWith<I extends any[]>(transform: (x: ElementType<I>) => number): (data: I) => number;
