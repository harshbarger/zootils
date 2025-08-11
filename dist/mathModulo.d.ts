/**
 * Calculates `data` mod `modulus` using KKnuth's definition of modulus,
 * which reflects the definition of mod used in mathematics. For a function
 * that follows JavaScript's `%` operator instead, see {@link modulo}.
 * @param data
 * @param modulus
 *
 * @example
 * ```
 * mathModulo(7, 6);         // 1
 * mathModulo(6)(-7);        // 5
 * mathModulo(7, -6);        // -5
 * mathModulo(-6, -7);       // -1
 * ```
 *
 * @category Math
 */
export declare function mathModulo(data: number, modulus: number): number;
/**
 * @param modulus
 *
 * @example
 * ```
 * mathModulo(7)(-6);       // -5
 * ```
 *
 * @category Math
 */
export declare function mathModulo(modulus: number): (data: number) => number;
