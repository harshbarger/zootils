/**
 * Indicates whether `data` is less than or equal to `value`
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isLte(4, 5);       // true
 * isLte(5, 5);       // true
 * isLte(3, 2);       // false
 * ```
 *
 * @category Math
 */
export declare function isLte(data: number, value: number): boolean;
/**
 * @param value
 *
 * @example
 * ```
 * isLte(6)(5);       // true
 * ```
 *
 * @category Math
 */
export declare function isLte(value: number): (data: number) => boolean;
