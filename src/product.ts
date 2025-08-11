/**
 * Returns the product of an array of numbers, or if the array is empty, 1.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * product([3, 5, 7]);          // 105
 * ```
 *
 * @category Array
 * @category Math
 */
export function product(data: number[]): number {
  return data.reduce((acc, next) => next * acc, 1);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("calculates the product", () => {
    expect(product([3, 5, 7])).toBe(105);
    expect(product([])).toEqual(1);
  });
}
