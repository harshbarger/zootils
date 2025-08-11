/**
 * Converts a number to a string in hexadecimal form, or returns an empty string if
 * the number is not an non-negative integer.
 *
 * @param data
 *
 * @example
 * ```
 * toHex(24);     // "18"
 * toHex(2.4);    // ""
 * ```
 *
 * @category Math
 * @category String
 */
export function toHex(data: number) {
  return Number.isInteger(data) && data >= 0 ? data.toString(16) : "";
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("converts non-negative integers to hex", () => {
    expect(toHex(24)).toBe("18");
    expect(toHex(0)).toBe("0");
  });

  it("returns an empty string for non-negative integers", () => {
    expect(toHex(-24)).toBe("");
    expect(toHex(2.4)).toBe("");
    expect(toHex(NaN)).toBe("");
    expect(toHex(Infinity)).toBe("");
  });
}
