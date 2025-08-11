/**
 * Indicates whether a number is an odd integer.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isEven(3);        // true
 * isEven(3.1);      // false
 * ```
 *
 * @category Math
 */
export function isOdd(data: number): boolean {
  return Math.abs(data % 2) === 1;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies odd and non-odd numbers", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-3)).toBe(true);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(3.01)).toBe(false);
  });
}
