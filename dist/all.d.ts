/**
 * Returns `true` if and only if all `conditions` are true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * all(2, [isGt(0), isLt(4), Number.isInteger]);      // true
 * all(2.5, [isGt(0), isLt(4), Number.isInteger]);    // false
 * ```
 *
 * @category Logic
 */
export declare function all<T>(data: T, conditions: Predicate<T>[]): boolean;
/**
 * @param conditions
 *
 * @example
 * ```
 * all([isGt(0), isLt(4), Number.isInteger])(2);      // true
 * ```
 *
 * @category Logic
 */
export declare function all<T>(conditions: Predicate<T>[]): (data: T) => boolean;
