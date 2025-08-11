/**
 * Divide `data` by `x`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * divideBy(6, 3);     // 2
 * ```
 *
 * @category Math
 */
export declare function divideBy(data: number, x: number): number;
/**
 * @param x
 *
 * @example
 * ```
 * divideBy(3)(6);     // 2
 * ```
 *
 * @category Math
 */
export declare function divideBy(x: number): (data: number) => number;
