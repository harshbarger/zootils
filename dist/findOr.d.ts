/**
 * Returns the first element in the `data` array that passes the `condition`, or returns
 * the `fallback` value if no element meets the `condition`.
 *
 * @param data
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findOr([2, 10, -2, -6], isNegative, NaN);      // -2
 * findOr([2, 10, 4, 6], isNegative, NaN);        // NaN
 * ```
 *
 * @category Array
 */
export declare function findOr<I extends any[]>(data: I, condition: Predicate<ElementType<I>>, fallback: unknown): ElementType<I> | typeof fallback;
/**
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findOr(isNegative, NaN)([2, 10, -2, -6]);      // -2
 * ```
 *
 * @category Array
 */
export declare function findOr<I extends any[]>(condition: Predicate<ElementType<I>>, fallback: unknown): (data: I) => ElementType<I> | typeof fallback;
