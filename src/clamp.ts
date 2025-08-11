import { purry } from "./internals";

function _clamp(data: number, min: number, max: number): number {
  return Math.max(min, Math.min(data, max));
}

/**
 * Returns `min` if `data` is less than `min`, `max` if `data` is greater than `max`.
 * If `data` is already between `min` and `max`, then the value of `data` is returned unchanged.
 *
 * @param data
 * @param min
 * @param max
 *
 * @example
 * ```
 * clamp(15, 0, 100);        // 15
 * clamp(-5, 0, 100);        // 0
 * clamp(140, 0, 100);       // 100
 * ```
 *
 * @category Math
 */
export function clamp(data: number, min: number, max: number): number;

/**
 * @param min
 * @param max
 *
 * @example
 * ```
 * clamp(0, 100)(-5);        // 0
 * ```
 *
 * @category Math
 */
export function clamp(
  min: number,
  max: number
): (data: number) => number;

export function clamp(...args: any[]) {
  return purry(_clamp, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("clamps values to low or high bounds", () => {
    expect(clamp(50, 0, 100)).toBe(50);
    expect(clamp(150, 0, 100)).toBe(100);
    expect(clamp(0, 100)(-50)).toBe(0);
  });
}
