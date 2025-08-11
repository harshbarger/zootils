import { purry } from "./internals";

function _isDivisibleBy(data: number, divisor: number): boolean {
  if (Number.isInteger(data) && Number.isInteger(divisor)) {
    return data % divisor === 0;
  }

  const quotient = data / divisor;
  return Math.abs(quotient - Math.round(quotient)) <= 1e-15;
}

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
export function isDivisibleBy(data: number, divisor: number): boolean;

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

export function isDivisibleBy(
  divisor: number
): (data: number) => boolean;

export function isDivisibleBy(...args: any[]) {
  return purry(_isDivisibleBy, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies divisibility with integers", () => {
    expect(isDivisibleBy(12, 3)).toBe(true);
    expect(isDivisibleBy(-12, 3)).toBe(true);
    expect(isDivisibleBy(13, 3)).toBe(false);
    expect(isDivisibleBy(13)(3)).toBe(false);
  });

  it("identifies divisibility with expected tolerance of 1e-15 for floating point", () => {
    expect(isDivisibleBy(12 + 1e-17, -3)).toBe(true);
    expect(isDivisibleBy(12 + 1e-14, -3)).toBe(false);
  });
}
