/**
 * Returns `true` if and only if none of the `conditions` are true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * none(2.5, [isLt(0), isGt(4), Number.isInteger]);      // true
 * none(2, [isGt(0), isLt(4), Number.isInteger]);        // false
 * ```
 *
 * @category Logic
 */
export declare function none<T>(data: T, conditions: Predicate<T>[]): boolean;
/**
 * @param conditions
 *
 * @example
 * ```
 * none([isLt(0), isGt(4), Number.isInteger])(2.5);      // true
 * ```
 *
 * @category Logic
 */
export declare function none<T>(conditions: Predicate<T>[]): (data: T) => boolean;
