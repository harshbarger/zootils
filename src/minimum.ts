/**
 * Returns the minimum value of the array, or `NaN` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * minimum([3, -1, -7, 2]);       // -7
 * ```
 *
 * @category Array
 * @category Math
 */
export function minimum(data: number[]): number {
  return data.length >= 1 ? Math.min(...data) : NaN;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the minimum of a non-empty array", () => {
    expect(minimum([2, -5, 10, 3])).toBe(-5);
    expect(minimum([2])).toBe(2);
  });

  it("returns NaN for an empty array", () => {
    expect(minimum([])).toBeNaN();
  });
}
