/**
 * Indicates whether a number is even. Unlike `isDivisibleBy(2)`, `isEven` doesn't
 * not allow any tolerance for rounding errors in floating point numbers.
 *
 * @param data
 *
 * @example
 * ```
 * isEven(4);        // true
 * isEven(4.1);      // false
 * ```
 *
 * @category Math
 */
export function isEven(data: number): boolean {
  return data % 2 === 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies even and non-even numbers numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(4.01)).toBe(false);
  });
}
