/**
 * Rounds a number to `places` digits after the decimal. If `places` is negative,
 * rounding will be to `-places` digits before the decimal point, e.g., `places` of -2
 * will round to the nearest hundred. `places` must be an integer.
 *
 * @param data
 * @param places
 *
 * @example
 * ```
 * round(1469.278, 2);     // 1469.28
 * round(1469.278, 0);     // 1469
 * round(1469.278, -2);    // 1500
 * ```
 *
 * @category Math
 */
export declare function round(data: number, places: number): number;
/**
 * @param places
 *
 * @example
 * ```
 * round(2)(1469.278);     // 1469.28
 * ```
 *
 * @category Math
 */
export declare function round(places: number): (data: number) => number;
