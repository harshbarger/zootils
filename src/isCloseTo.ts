import { purry } from "./internals";

function _isCloseTo(
  data: number,
  x: number,
  tolerance: number
): boolean {
  return Math.abs(data - x) <= tolerance;
}

/**
 * Indicates whether `data` is within `tolerance` of `x` (in either direction)
 *
 * @param data
 * @param x
 * @param tolerance
 *
 * @example
 * ```
 * isCloseTo(5.01, 5, 0.01);     // true
 * isCloseTo(4.99, 5, 0.1);      // true
 * isCloseTo(5.01, 5, 0.001);    // false
 * ```
 *
 * @category Math
 */
export function isCloseTo(
  data: number,
  x: number,
  tolerance: number
): boolean;

/**
 * @param x
 * @param tolerance
 *
 * @example
 * ```
 * isCloseTo(5, 0.1)(5.01);      // true
 * ```
 *
 * @category Math
 */
export function isCloseTo(
  x: number,
  tolerance: number
): (data: number) => boolean;

export function isCloseTo(...args: any[]) {
  return purry(_isCloseTo, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies equality to within specified tolerance", () => {
    expect(isCloseTo(5.01, 5, 0.01)).toBe(true);
    expect(isCloseTo(4.99, 5, 0.1)).toBe(true);
    expect(isCloseTo(5.01, 5, 0.001)).toBe(false);
    expect(isCloseTo(5, 0.001)(5.01)).toBe(false);
  });
}
