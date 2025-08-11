import { purry } from "./internals";

function _sumWith<I extends any[]>(
  data: I,
  transform: Fn<ElementType<I>, number>
): number {
  const transformed = data.map(transform);
  return transformed.reduce((acc, next) => next + acc, 0);
}

/**
 * Applies the `transform` function to each element in `data`,
 * then returns the sum of the transformed array.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * sumWith([1, 2, 3], pow(2));     // 14
 * ```
 *
 * @category Array
 * @category Math
 */
export function sumWith<I extends any[]>(
  data: I,
  transform: Fn<ElementType<I>, number>
): number;

/**
 * @param transform
 *
 * @example
 * ```
 * sumWith(pow(2))([1, 2, 3]);     // 14
 * ```
 *
 * @category Array
 * @category Math
 */
export function sumWith<I extends any[]>(
  transform: Fn<ElementType<I>, number>
): (data: I) => number;

export function sumWith(...args: any[]) {
  return purry(_sumWith, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns sum of the transformed array", () => {
    expect(sumWith([1, 2, 3], (x) => x ** 2)).toBe(14);
    expect(sumWith((x) => x ** 2)([1, 2, 3])).toBe(14);
  });
}
