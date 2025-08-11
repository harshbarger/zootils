/**
 * Similar to {@link filter} (which is in turn similar to
 * `Array.prototype.map`), but the `condition` function requires
 * an index as the second parameter. Use {@link filter} instead
 * if you do not need the index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * filterWithIndex([4, -2, 0, 2, -4], (_, i) => isEven(i));      // [4, 0, -4]
 * ```
 *
 * @category Array
 */
export declare function filterWithIndex<I extends any[]>(data: I, condition: IndexedPredicate<ElementType<I>>): I;
/**
 * @param condition
 *
 * @example
 * ```
 * filterWithIndex((_, i) => isEven(i))([4, -2, 0, 2, -4]);      // [4, 0, -4]
 * ```
 *
 * @category Array
 */
export declare function filterWithIndex<I extends any[]>(condition: IndexedPredicate<ElementType<I>>): (data: I) => I;
