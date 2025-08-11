/**
 * Indicates whether `data` is within `tolerance` of `x` (in either direction)
 *
 * @param data
 * @param x
 * @param tolerance
 *
 * @example
 * ```
 * isCloseTo(5.01, 5, 0.01);     // true
 * isCloseTo(4.99, 5, 0.1);      // true
 * isCloseTo(5.01, 5, 0.001);    // false
 * ```
 *
 * @category Math
 */
export declare function isCloseTo(data: number, x: number, tolerance: number): boolean;
/**
 * @param x
 * @param tolerance
 *
 * @example
 * ```
 * isCloseTo(5, 0.1)(5.01);      // true
 * ```
 *
 * @category Math
 */
export declare function isCloseTo(x: number, tolerance: number): (data: number) => boolean;
