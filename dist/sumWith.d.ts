/**
 * Applies the `transform` function to each element in `data`,
 * then returns the sum of the transformed array.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * sumWith([1, 2, 3], pow(2));     // 14
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function sumWith<I extends any[]>(data: I, transform: Fn<ElementType<I>, number>): number;
/**
 * @param transform
 *
 * @example
 * ```
 * sumWith(pow(2))([1, 2, 3]);     // 14
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function sumWith<I extends any[]>(transform: Fn<ElementType<I>, number>): (data: I) => number;
