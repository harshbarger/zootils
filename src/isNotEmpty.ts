/**
 * Indicates whether a string or array has length of at least one.
 *
 * @param data
 *
 * @example
 * ```
 * isNotEmpty("ostrich");      // true
 * isNotEmpty([]);             // false
 * ```
 * @category Array
 * @category String
 */
export function isNotEmpty(data: string | any[]): boolean {
  return data.length > 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("determines if data is not empty", () => {
    expect(isNotEmpty([1, 2, 3])).toBe(true);
    expect(isNotEmpty([])).toBe(false);
    expect(isNotEmpty("ostrich")).toBe(true);
    expect(isNotEmpty("")).toBe(false);
  });
}
