import { purry } from "./internals";

function _minimumWith<I extends any[]>(
  data: I,
  transform: (x: ElementType<I>) => number
): number {
  const transformed = data.map(transform);
  return transformed.length >= 1 ? Math.min(...transformed) : NaN;
}

/**
 * Applies a `transform` to each element of the array, then returns the minimum
 * of the transformed array. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * minimumWith([1, 4, -6, -2], Math.abs);        // 1
 * ```
 *
 * @category Array
 * @category Math
 */
export function minimumWith<I extends any[]>(
  data: I,
  transform: (x: ElementType<I>) => number
): number;

/**
 * @param transform
 *
 * @example
 * ```
 * minimumWith(Math.abs, [1, 4, -6, -2]);        // 1
 * ```
 *
 * @category Array
 * @category Math
 */
export function minimumWith<I extends any[]>(
  transform: (x: ElementType<I>) => number
): (data: I) => number;

export function minimumWith(...args: any[]) {
  return purry(_minimumWith, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the minimum of a transformed non-empty array", () => {
    expect(minimumWith([1, 4, -6, 2], Math.abs)).toBe(1);
    expect(minimumWith([-6], Math.abs)).toBe(6);
    expect(minimumWith(Math.abs)([1, 4, -6, 2])).toBe(1);
  });

  it("returns NaN for an empty array", () => {
    expect(minimumWith([], Math.abs)).toBeNaN();
  });
}
