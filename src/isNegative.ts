/**
 * Indicates whether a number is negative.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isNegative(-2);    // true
 * isNegative(0);     // false
 * ```
 *
 * @category Math
 */
export function isNegative(data: number): boolean {
  return data < 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies negative numbers", () => {
    expect(isNegative(-4)).toBe(true);
    expect(isNegative(0)).toBe(false);
    expect(isNegative(4)).toBe(false);
  });
}
