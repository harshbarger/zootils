/**
 * Returns true if the `data` is a function, false otherwise.
 *
 * This is implemented using `typeof data === "function"`.
 *
 * @param data
 * @returns
 *
 * @category Logic
 */
export function isFunction(data: any): data is Function {
  return typeof data === "function";
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies functions and non-functions", () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
    expect(isFunction(String)).toBe(true);
    expect(isFunction(3)).toBe(false);
  });
}
