/**
 * Calculates the `n`th root of `data`. `n` must be an integer and at least 2,
 * or `NaN` will result.
 *
 * @param data
 * @param n
 *
 * @example
 * ```
 * nthRoot(8, 3);      // 2
 * nthRoot(-8, 3);     // -2
 * nthRoot(-8, 4):     // NaN
 * ```
 *
 * @category Math
 */
export declare function nthRoot(data: number, n: number): number;
/**
 * @param n
 *
 * @example
 * ```
 * nthRoot(3)(8);      // 2
 * ```
 *
 *
 */
export declare function nthRoot(n: number): (data: number) => number;
