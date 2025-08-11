import { purry } from "../src/internals";

function _isBetween(data: number, min: number, max: number): boolean {
  return data >= min && data <= max;
}

/**
 * Indicates whether `data` is between the values of `min` and `max`
 * (including the endpoints).
 *
 * @param data
 * @param min
 * @param max
 *
 * @example
 * ```
 * isBetween(10, 5, 20);      // true
 * isBetween(30, 5, 20);      // false
 * ```
 *
 * @category Math
 */
export function isBetween(
  data: number,
  min: number,
  max: number
): boolean;

/**
 * @param min
 * @param max
 *
 * @example
 * ```
 * isBetween(5, 20)(10);      // true
 * ```
 *
 * @category Math
 */
export function isBetween(
  min: number,
  max: number
): (data: number) => boolean;
export function isBetween(...args: any[]) {
  return purry(_isBetween, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("determines if data is between min and max", () => {
    expect(isBetween(10, 5, 20)).toBe(true);
    expect(isBetween(30, 5, 20)).toBe(false);
    expect(isBetween(5, 20)(10)).toBe(true);
  });
}
