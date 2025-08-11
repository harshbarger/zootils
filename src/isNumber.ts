/**
 * Returns `true` if `data` is a number `false` otherwise.
 *
 * @param data
 * @returns
 *
 * @example
 * ```ts
 * isNumber(42;            // true
 * isNumber("42");         // false
 * ```
 *
 * @category Logic
 */
export function isNumber(data: any): data is number {
  return typeof data === "number";
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies numbers and non-numbers", () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber("42")).toBe(false);
  });
}
