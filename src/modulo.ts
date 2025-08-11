import { purry } from "./internals";

function _modulo(data: number, modulus: number): number {
  return data % modulus;
}

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
export function modulo(data: number, modulus: number): number;

/**
 * @param modulus
 *
 * @example
 * ```
 * modulo(10)(12);         // 2
 * ```
 */
export function modulo(modulus: number): (data: number) => number;

export function modulo(...args: any[]) {
  return purry(_modulo, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("", () => {
    expect(modulo(7, 6)).toBe(1);
    expect(modulo(-7.1, 6)).toBeCloseTo(-1.1, 9);
    expect(modulo(7, -6)).toBe(1);
    expect(modulo(-7, -6)).toBe(-1);
    expect(modulo(-0)(7)).toBeNaN();
  });
}
