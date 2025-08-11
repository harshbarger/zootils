/**
 * Returns `true` if at least one of the `conditions` is true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * some(2, [isLt(0), isGt(4), Number.isInteger]);      // true
 * some(2.5, [isLt(0), isGt(4), Number.isInteger]);    // false
 * ```
 *
 * @category Logic
 */
export declare function some<T>(data: T, conditions: Predicate<T>[]): boolean;
/**
 * @param conditions
 *
 * @example
 * ```
 * some([isLt(0), isGt(4), Number.isInteger])(2);      // true
 * ```
 *
 * @category Logic
 */
export declare function some<T>(conditions: Predicate<T>[]): (data: T) => boolean;
