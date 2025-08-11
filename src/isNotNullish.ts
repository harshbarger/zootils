/**
 * Returns false if `data` is `null` or `undefined`, otherwise true.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isNotNullish(null);      // true
 * isNotNullish(undefined); // true
 * isNotNullish(0);         // false
 * ```
 *
 * @category Logic
 */
export function isNotNullish(data: any): boolean {
  return !(data === null || data === undefined);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies null or undefined", () => {
    expect(isNotNullish(0)).toBe(true);
    expect(isNotNullish(null)).toBe(false);
    expect(isNotNullish(undefined)).toBe(false);
  });
}
