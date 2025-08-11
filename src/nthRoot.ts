import { purry } from "./internals";

function _nthRoot(data: number, n: number): number {
  if (!Number.isInteger(n) || n < 2) {
    return NaN;
  }

  if (n % 2 === 0 && data < 0) {
    return NaN;
  }

  return Math.pow(Math.abs(data), 1 / n) * Math.sign(data);
}

/**
 * Calculates the `n`th root of `data`. `n` must be an integer and at least 2,
 * or `NaN` will result.
 *
 * @param data
 * @param n
 *
 * @example
 * ```
 * nthRoot(8, 3);      // 2
 * nthRoot(-8, 3);     // -2
 * nthRoot(-8, 4):     // NaN
 * ```
 *
 * @category Math
 */
export function nthRoot(data: number, n: number): number;

/**
 * @param n
 *
 * @example
 * ```
 * nthRoot(3)(8);      // 2
 * ```
 *
 *
 */
export function nthRoot(n: number): (data: number) => number;

export function nthRoot(...args: any[]) {
  return purry(_nthRoot, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("handles real roots", () => {
    expect(nthRoot(8, 3)).toBe(2);
    expect(nthRoot(3)(-8)).toBe(-2);
  });

  it("returns NaN for complex roots or invalid n", () => {
    expect(nthRoot(-8, 4)).toBeNaN();
    expect(nthRoot(8, 2.5)).toBeNaN();
    expect(nthRoot(8, 1)).toBeNaN();
  });
}
