import { purry } from "./internals";

function _pow(data: number, exponent: number): number {
  return Math.pow(data, exponent);
}

/**
 * Raises `data` to the power of `exponent`. This is a thin wrapper around
 * the built-in `Math.pow`, so it has the same limitations, such as being unable
 * to calculate non-integrer powers of negative bases. See {@link nthRoot} for
 * a function that addresses part of these limitations.
 *
 * @param data
 * @param exponent
 *
 * @example
 * ```
 * pow(4, 3);    // 64
 * ```
 *
 * @category Math
 */
export function pow(data: number, exponent: number): number;

/**
 * @param exponent
 *
 * @example
 * ```
 * pow(3)(4);    // 64
 * ```
 *
 * @category Math
 */
export function pow(exponent: number): (data: number) => number;

export function pow(...args: any[]) {
  return purry(_pow, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("performs exponentiation", () => {
    expect(pow(4, 3)).toBe(64);
    expect(pow(3)(4)).toBe(64);
  });
}
