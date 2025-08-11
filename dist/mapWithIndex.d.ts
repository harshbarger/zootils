/**
 * Similar to {@link map} (which is in turn similar to `Array.prototype.map`),
 * but the `transform` function requires an index as the second parameter.
 * Use {@link map} instead if you do not need the index.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * mapWithIndex([2, 3, 4], (x, i) => x + i);        [2, 4, 6];
 * ```
 *
 * @category Array
 */
export declare function mapWithIndex<I extends any[], O extends any[] = I>(data: I, transform: (x: ElementType<I>, i: number) => O[number]): O;
/**
 * @param transform
 *
 * @example
 * ```
 * mapWithIndex((x, i) => x + i)([2, 3, 4]);        [2, 4, 6];
 * ```
 *
 * @category Array
 */
export declare function mapWithIndex<I extends any[], O extends any[] = I>(transform: (x: ElementType<I>, i: number) => O[number]): (data: I) => O;
