/**
 * Calculates `data` mod `modulus`. `modulo` is implemented with the `%` operator,
 * so it follows the JavaScript specification that the sign of `a % b` is the sign of `a`,
 * and values are not required to be integers. See {@link mathModulo} for a function that
 * follows Knuth's definition, which better reflects the use of mod in mathematics.
 *
 * @param data
 * @param modulus
 *
 * @example
 * ```
 * modulo(12, 10);         // 2
 * modulo(-12, 10);        // -2
 * ```
 *
 * @category Math
 */
export declare function modulo(data: number, modulus: number): number;
/**
 * @param modulus
 *
 * @example
 * ```
 * modulo(10)(12);         // 2
 * ```
 */
export declare function modulo(modulus: number): (data: number) => number;
