/**
 * Returns the length of a string or array
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * length([2, 3, 4]);      // 3
 * length("ostrich");      // 7
 * ```
 *
 * @category Array
 * @category String
 */
export function length(data: any[] | string): number {
  return data.length;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the length of a string or array", () => {
    expect(length("ostrich")).toBe(7);
    expect(length([2, 3, 4, 5])).toBe(4);
  });
}
