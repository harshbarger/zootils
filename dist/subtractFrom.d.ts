/**
 * Subtract `data` from `x`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * subtract(5, 3);     // -2
 * ```
 *
 * @category Math
 */
export declare function subtractFrom(data: number, x: number): number;
/**
 * @param x
 *
 * @example
 * ```
 * subtract(3)(5);     // -2
 * ```
 *
 * @category Math
 */
export declare function subtractFrom(x: number): (data: number) => number;
