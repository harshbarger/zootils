/**
 * Flatten an array one level.
 *
 * @param data
 *
 * @example
 * ```
 * flatten([[3, 4], [5]]);      // [3, 4, 5]
 * flatten([[[1, 2, 3]], [[4, 5], 6], [7, 8, [9]]]);
 *                         // [[1, 2, 3], [4, 5], 6, 7, 8, [9]]
 * ```
 *
 * @category Array
 */
export declare function flatten<I extends (any | any[])[]>(data: I): ElementType<I>;
