/**
 * Returns the mean of an array of numbers, or `NaN` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * mean([3, 5, 10]);          // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export function mean(data: number[]): number {
  return data.length > 0
    ? data.reduce((acc, next) => next + acc, 0) / data.length
    : NaN;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the mean for a non-empty array", () => {
    expect(mean([3, 5, 10])).toBe(6);
  });

  it("returns NaN for an empty array", () => {
    expect(mean([])).toBeNaN();
  });
}
