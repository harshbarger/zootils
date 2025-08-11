/**
 * Returns the maximum value of the array, or `NaN` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * maximum([3, -1, 7, -2]);       // 7
 * ```
 *
 * @category Array
 * @category Math
 */
export function maximum(data: number[]): number {
  return data.length >= 1 ? Math.max(...data) : NaN;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the maximum of a non-empty array", () => {
    expect(maximum([2, -5, 10, 3])).toBe(10);
    expect(maximum([2])).toBe(2);
  });

  it("returns NaN for an empty array", () => {
    expect(maximum([])).toBeNaN();
  });
}
