import { purry } from "./internals";

function _round(data: number, places: number): number {
  if (!Number.isInteger(places)) {
    return NaN;
  }

  const powerOfTen = 10 ** -places;
  return Math.round(data / powerOfTen) * powerOfTen;
}

/**
 * Rounds a number to `places` digits after the decimal. If `places` is negative,
 * rounding will be to `-places` digits before the decimal point, e.g., `places` of -2
 * will round to the nearest hundred. `places` must be an integer.
 *
 * @param data
 * @param places
 *
 * @example
 * ```
 * round(1469.278, 2);     // 1469.28
 * round(1469.278, 0);     // 1469
 * round(1469.278, -2);    // 1500
 * ```
 *
 * @category Math
 */
export function round(data: number, places: number): number;

/**
 * @param places
 *
 * @example
 * ```
 * round(2)(1469.278);     // 1469.28
 * ```
 *
 * @category Math
 */
export function round(places: number): (data: number) => number;

export function round(...args: any[]) {
  return purry(_round, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("rounds to the specified number of decimal places", () => {
    expect(round(1469.278, 2)).toBe(1469.28);
    expect(round(1469.278, 0)).toBe(1469);
    expect(round(1469.278, -2)).toBe(1500);
    expect(round(2)(1469.278)).toBe(1469.28);
  });
}
