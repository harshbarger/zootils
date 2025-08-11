import { purry } from "./internals";

function _mathModulo(data: number, y: number) {
  return data - y * Math.floor(data / y);
}

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
export function mathModulo(data: number, modulus: number): number;

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
export function mathModulo(modulus: number): (data: number) => number;
export function mathModulo(...args: any[]) {
  return purry(_mathModulo, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("determines remainder using mathematical rules for signs", () => {
    expect(mathModulo(7, 6)).toBe(1);
    expect(mathModulo(6)(-7)).toBe(5);
    expect(mathModulo(7, -6)).toBe(-5);
    expect(mathModulo(-6)(-7)).toBe(-1);
  });
}
