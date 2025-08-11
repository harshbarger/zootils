/**
 * Indicates whether the element of array `data` at `index` passes the `condition`.
 * If `index` is invalid or out of bounds, returns false.
 *
 * @param data
 * @param index
 * @param condition
 *
 * @example
 * ```
 * elementPasses([-1, 0, 1], 2, x => x > 0);     // true
 * elementPasses([-1, 0, 1], 0, x => x > 0);     // false
 * elementPasses([-1, 0, 1], 5, x => x > 0);     // false (since index is out of bounds)
 * ```
 *
 * @category Array
 */
export declare function elementPasses<I extends any[]>(data: I, index: number, condition: Predicate<ElementType<I>>): boolean;
/**
 * @param index
 * @param condition
 *
 * @example
 * ```
 * elementPasses(2, x => x > 0)([-1, 0, 1]);      // true
 * ```
 *
 * @category Array
 */
export declare function elementPasses<I extends any[]>(index: number, condition: Predicate<ElementType<I>>): (data: I) => boolean;
