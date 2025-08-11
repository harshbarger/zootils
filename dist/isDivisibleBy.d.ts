/**
 * Indicates whether `data` is divislbe by `divisor`. If either `data` or `divisor`
 * is not an integer, then a tolerance of 1e-15 will be allowed to allow for floating
 * point errors.
 *
 * @param data
 * @param divisor
 *
 * @example
 * ```
 * isDivisibleBy(12, 3);             // true
 * isDivisibleBy(14, 3);             // false
 * isDivisibleBy(12 + 1e-17, 3);     // true (due to allowed tolerance of 1e-15)
 * ```
 *
 * @category Math
 */
export declare function isDivisibleBy(data: number, divisor: number): boolean;
/**
 * @param divisor
 *
 * @example
 * ```
 * isDivisibleBy(12)(3);             // true
 * ```
 *
 * @category Math
 */
export declare function isDivisibleBy(divisor: number): (data: number) => boolean;
