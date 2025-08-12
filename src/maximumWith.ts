import { purry } from "./internals";
import { ElementType } from "./types";

function _maximumWith<I extends any[]>(
  data: I,
  transform: (x: ElementType<I>) => number
): number {
  const transformed = data.map(transform);
  return transformed.length >= 1 ? Math.max(...transformed) : NaN;
}

/**
 * Applies a `transform` to each element of the array, then returns the maximum
 * of the transformed array. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * maximumWith([1, 4, -6, -2], Math.abs);        // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export function maximumWith<I extends any[]>(
  data: I,
  transform: (x: ElementType<I>) => number
): number;

/**
 * @param transform
 *
 * @example
 * ```
 * maximumWith(Math.abs, [1, 4, -6, -2]);        // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export function maximumWith<I extends any[]>(
  transform: (x: ElementType<I>) => number
): (data: I) => number;

export function maximumWith(...args: any[]) {
  return purry(_maximumWith, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the maximum of a transformed non-empty array", () => {
    expect(maximumWith([1, 4, -6, 2], Math.abs)).toBe(6);
    expect(maximumWith([-6], Math.abs)).toBe(6);
    expect(maximumWith(Math.abs)([1, 4, -6, 2])).toBe(6);
  });

  it("returns NaN for an empty array", () => {
    expect(maximumWith([], Math.abs)).toBeNaN();
  });
}
