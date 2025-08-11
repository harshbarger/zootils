/**
 * Indicates whether `data` is greater than `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isGt(5, 4);       // true
 * isGt(5, 5);       // false
 * ```
 *
 * @category Math
 */
export declare function isGt(data: number, value: number): boolean;
/**
 * @param value
 *
 * @example
 * ```
 * isGt(5)(4);       // true
 * ```
 *
 * @category Math
 */
export declare function isGt(value: number): (data: number) => boolean;
