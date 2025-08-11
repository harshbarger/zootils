/**
 * Tells whether `data` is `null` or `undefined`.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isNullish(null);      // true
 * isNullish(undefined); // true
 * isNullish(0);         // false
 * ```
 *
 * @category Logic
 */
export function isNullish(data: any): boolean {
  return data === null || data === undefined;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies null or undefined", () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
    expect(isNullish(0)).toBe(false);
  });
}
