/**
 * Indicates whether a number is positive.
 *
 * @param data
 *
 * @example
 * ```
 * isPositive(2);     // true
 * isPositive(0);     // false
 * ```
 *
 * @category Math
 */
export function isPositive(data: number): boolean {
  return data > 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies positive and non-positive numbers", () => {
    expect(isPositive(4)).toBe(true);
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-4)).toBe(false);
  });
}
