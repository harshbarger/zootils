/**
 * Indicates whether `data` is greater than or equal to `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isGte(5, 4);       // true
 * isGte(5, 5);       // true
 * isGte(3, 5);       // false
 * ```
 *
 * @category Math
 */
export declare function isGte(data: number, value: number): boolean;
/**
 * @param value
 *
 * @example
 * ```
 * isGte(5)(4);       // true
 * ```
 *
 * @category Math
 */
export declare function isGte(value: number): (data: number) => boolean;
