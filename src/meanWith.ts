import { purry } from "./internals";

function _meanWith<I extends any[]>(
  data: I,
  transform: Fn<ElementType<I>, number>
): number {
  const transformed = data.map(transform);
  return transformed.length > 0
    ? transformed.reduce((acc, next) => next + acc, 0) /
        transformed.length
    : NaN;
}

/**
 * Applies the `transform` function to each element of an array, then returns
 * the mean of the result. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * meanWith([1, 3, -8], Math.abs);       // 4
 * ```
 *
 * @category Array
 * @category Math
 */
export function meanWith<I extends any[]>(
  data: I,
  transform: Fn<ElementType<I>, number>
): number;

/**
 * @param transform
 *
 * @example
 * ```
 * meanWith(Math.abs)([1, 3, -8]);       // 4
 * ```
 * 
 * @category Array
 * @category Math
 */
export function meanWith<I extends any[]>(
  transform: Fn<ElementType<I>, number>
): (data: I) => number;

export function meanWith(...args: any[]) {
  return purry(_meanWith, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the mean of a transformed non-empty array", () => {
    expect(meanWith([1, 3, -8], Math.abs)).toBe(4);
    expect(meanWith(Math.abs)([1, 3, -8])).toBe(4);
  });

  it("returns NaN for an empty array", () => {
    expect(meanWith([], Math.abs)).toBeNaN();
  });
}
