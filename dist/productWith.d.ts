/**
 * Applies the `transform` function to each element in `data`,
 * then returns the product of the transformed array.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * productWith([2, 3], pow(2));     // 36 , i.e., 4 * 9
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function productWith<I extends any[]>(data: I, transform: Fn<ElementType<I>, number>): number;
/**
 * @param transform
 *
 * @example
 * ```
 * productWith(pow(2))([2, 3]);     // 36
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function productWith<I extends any[]>(transform: Fn<ElementType<I>, number>): (data: I) => number;
