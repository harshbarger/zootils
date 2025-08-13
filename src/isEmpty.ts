/**
 * Indicates whether a string or array has length zero.
 *
 * @param data
 *
 * @example
 * ```
 * isEmpty([]);             // true
 * isEmpty("ostrich");      // false
 * ```
 * @category Array
 * @category String
 */
export function isEmpty(data: string | any[]): boolean {
  return data.length === 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("determines if data is empty", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("ostrich")).toBe(false);
  });
}
