/**
 * Indicates whether `data` is between the values of `min` and `max`
 * (including the endpoints).
 *
 * @param data
 * @param min
 * @param max
 *
 * @example
 * ```
 * isBetween(10, 5, 20);      // true
 * isBetween(30, 5, 20);      // false
 * ```
 *
 * @category Math
 */
export declare function isBetween(data: number, min: number, max: number): boolean;
/**
 * @param min
 * @param max
 *
 * @example
 * ```
 * isBetween(5, 20)(10);      // true
 * ```
 *
 * @category Math
 */
export declare function isBetween(min: number, max: number): (data: number) => boolean;
