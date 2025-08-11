/**
 * Returns a copy of a string with all upper case letters
 * changed to lower case.
 * @param data
 * @returns
 *
 * @example
 * ```
 * lowerCase('SCUBA Diver');     // 'scuba diver'
 * ```
 *
 * @category String
 */
export function lowerCase(data: string) {
  return data.toLowerCase();
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("converts strings to lower case", () => {
    expect(lowerCase("SCUBA Diver")).toBe("scuba diver");
  });
}
