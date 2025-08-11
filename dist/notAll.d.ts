/**
 * Returns `true` if at least one of the `conditions` is not true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * notAll(2.5, [isGt(0), isLt(4), Number.isInteger]);      // true
 * notAll(2, [isGt(0), isLt(4), Number.isInteger]);        // false
 * ```
 *
 * @category Logic
 */
export declare function notAll<T>(data: T, conditions: Predicate<T>[]): boolean;
/**
 * @param conditions
 *
 * @example
 * ```
 * notAll([isGt(0), isLt(4), Number.isInteger])(2.5);      // true
 * ```
 *
 * @category Logic
 */
export declare function notAll<T>(conditions: Predicate<T>[]): (data: T) => boolean;
