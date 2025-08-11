/**
 * Returns the value a fraction `data` between the numbers `x1` and `x2`.
 * `data` may be outside the range [0, 1], in which case the result will be
 * outside the range [`x1`, `x2`].
 *
 * @param data
 * @param x1
 * @param x2
 *
 * @example
 * ```
 * interpolate(0.1, 100, 200);    // 110
 * interpolate(-0.1, 100, 200);   // 90
 * ```
 *
 * @category Math
 */
export declare function interpolate(data: number, x1: number, x2: number): number;
/**
 * @param x1
 * @param x2
 *
 * @example
 * ```
 * interpolate(100, 200)(0.1);    // 110
 * ```
 *
 * @category Math
 */
export declare function interpolate(x1: number, x2: number): (data: number) => number;
