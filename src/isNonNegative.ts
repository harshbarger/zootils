/**
 * Indicates whether a number is non-negative, i.e., positive or zero.
 *
 * @param data
 *
 * @example
 * ```
 * isNonNegative(2);      // true
 * isNonNegative(0);      // true
 * isNonNegative(-2);     // false
 * ```
 * 
 * @category Math
 */
export function isNonNegative(data: number): boolean {
  return data >= 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies non-negative numbers", () => {
    expect(isNonNegative(Infinity)).toBe(true);
    expect(isNonNegative(0)).toBe(true);
    expect(isNonNegative(-4)).toBe(false);
  });
}
