/**
 * Returns the sum of an array of numbers, or sero if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * sum([3, 5, 7]);          // 15
 * ```
 *
 * @category Array
 * @category Math
 */
export function sum(data: number[]): number {
  return data.reduce((acc, next) => next + acc, 0);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("sums numbers", () => {
    expect(sum([3, 5, 7])).toBe(15);
    expect(sum([])).toBe(0);
  });
}
