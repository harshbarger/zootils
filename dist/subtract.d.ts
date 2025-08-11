/**
 * Subtract `x` from `data`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * subtract(5, 3);     // 2
 * ```
 *
 * @category Math
 */
export declare function subtract(data: number, x: number): number;
/**
 * @param x
 *
 * @example
 * ```
 * subtract(3)(5);     // 2
 * ```
 *
 * @category Math
 */
export declare function subtract(x: number): (data: number) => number;
