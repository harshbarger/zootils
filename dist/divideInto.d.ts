/**
 * Divide `data` into `x`, i.e., divide `x` by `data`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * divideInto(6, 3);     // 0.5
 * ```
 *
 * @category Math
 */
export declare function divideInto(data: number, x: number): number;
/**
 * @param x
 *
 * @example
 * ```
 * divideInto(3)(6);     // 0.5
 * ```
 *
 * @category Math
 */
export declare function divideInto(x: number): (data: number) => number;
