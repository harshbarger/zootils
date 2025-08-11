/**
 * Returns `true` if `data` is a string, `false` otherwise.
 *
 * @param data
 * @returns
 *
 * @example
 * ```ts
 * isString("ostrich");     // true
 * isString(3);             // false
 * ```
 *
 * @category Logic
 */
export function isString(data: any): data is string {
  return typeof data === "string";
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies strings and non-strings", () => {
    expect(isString("ostrich")).toBe(true);
    expect(isString(3)).toBe(false);
  });
}
