/**
 * Returns its argument unchanged
 * (similar to identity in some other libraries)
 *
 * @param value
 *
 * @example
 * asIs(42);    // 42
 *
 * @category Logic
 */
export function asIs<T>(value: T) {
  return value;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the element unchanged", () => {
    expect(asIs(42)).toBe(42);
  });
}
