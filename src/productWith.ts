import { purry } from "./internals";

function _productWith<I extends any[]>(
  data: I,
  transform: Fn<ElementType<I>, number>
): number {
  const transformed = data.map(transform);
  return transformed.reduce((acc, next) => next * acc, 1);
}

/**
 * Applies the `transform` function to each element in `data`,
 * then returns the product of the transformed array.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * productWith([2, 3], pow(2));     // 36 , i.e., 4 * 9
 * ```
 *
 * @category Array
 * @category Math
 */
export function productWith<I extends any[]>(
  data: I,
  transform: Fn<ElementType<I>, number>
): number;

/**
 * @param transform
 *
 * @example
 * ```
 * productWith(pow(2))([2, 3]);     // 36
 * ```
 *
 * @category Array
 * @category Math
 */
export function productWith<I extends any[]>(
  transform: Fn<ElementType<I>, number>
): (data: I) => number;

export function productWith(...args: any[]) {
  return purry(_productWith, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("calculates product following transform", () => {
    expect(productWith([2, 3], (x) => x ** 2)).toBe(36);
    expect(productWith([], (x) => x ** 2)).toBe(1);
  });
}
