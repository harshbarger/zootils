/**
 * Indicates whether `data` is less than `value`
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isLt(4, 5);       // true
 * isLt(5, 5);       // false
 * ```
 *
 * @category Math
 */
export declare function isLt(data: number, value: number): boolean;
/**
 * Indicates whether `data` is less than `value`
 *
 * @param value
 *
 * @example
 * ```
 * isLt(5)(4);       // true
 * ```
 *
 * @category Math
 */
export declare function isLt(value: number): (data: number) => boolean;
