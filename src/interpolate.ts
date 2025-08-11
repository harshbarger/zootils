import { purry } from "./internals";

function _interpolate(data: number, x1: number, x2: number): number {
  return x1 + data * (x2 - x1);
}

/**
 * Returns the value a fraction `data` between the numbers `x1` and `x2`.
 * `data` may be outside the range [0, 1], in which case the result will be
 * outside the range [`x1`, `x2`].
 *
 * @param data
 * @param x1
 * @param x2
 *
 * @example
 * ```
 * interpolate(0.1, 100, 200);    // 110
 * interpolate(-0.1, 100, 200);   // 90
 * ```
 *
 * @category Math
 */
export function interpolate(
  data: number,
  x1: number,
  x2: number
): number;

/**
 * @param x1
 * @param x2
 *
 * @example
 * ```
 * interpolate(100, 200)(0.1);    // 110
 * ```
 *
 * @category Math
 */
export function interpolate(
  x1: number,
  x2: number
): (data: number) => number;

export function interpolate(...args: any[]) {
  return purry(_interpolate, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("interpolates values correctly", () => {
    expect(interpolate(0.1, 100, 200)).toBe(110);
    expect(interpolate(100, 200)(-0.1)).toBe(90);
  });
}
