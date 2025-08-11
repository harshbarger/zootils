/**
 * Returns `min` if `data` is less than `min`, `max` if `data` is greater than `max`.
 * If `data` is already between `min` and `max`, then the value of `data` is returned unchanged.
 *
 * @param data
 * @param min
 * @param max
 *
 * @example
 * ```
 * clamp(15, 0, 100);        // 15
 * clamp(-5, 0, 100);        // 0
 * clamp(140, 0, 100);       // 100
 * ```
 *
 * @category Math
 */
export declare function clamp(data: number, min: number, max: number): number;
/**
 * @param min
 * @param max
 *
 * @example
 * ```
 * clamp(0, 100)(-5);        // 0
 * ```
 *
 * @category Math
 */
export declare function clamp(min: number, max: number): (data: number) => number;
