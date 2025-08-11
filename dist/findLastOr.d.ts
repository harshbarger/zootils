/**
 * Returns the last element in the `data` array that passes the `condition`, or returns
 * the `fallback` value if no element meets the `condition`.
 *
 * @param data
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findLastOr([2, -10, -2, 6], isNegative, NaN)).toBe(-2);
 * findLastOr([2, 10, 4, 6], isNegative, NaN)).toBe(NaN);
 * ```
 *
 * @category Array
 */
export declare function findLastOr<I extends any[]>(data: I, condition: Predicate<ElementType<I>>, fallback: unknown): ElementType<I> | typeof fallback;
/**
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findLastOr(x => x < 0, NaN)([2, -10, -2, 6]).toBe(-2);
 * ```
 *
 * @category Array
 */
export declare function findLastOr<I extends any[]>(condition: Predicate<ElementType<I>>, fallback: unknown): (data: I) => ElementType<I> | typeof fallback;
