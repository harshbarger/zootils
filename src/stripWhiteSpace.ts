/**
 * Removes all white space characters (as identified by
 * the regular expression `\s`) from the string and
 * returns the result.
 *
 * @param data
 *
 * @example
 * ```
 * stripWhiteSpace(" os trich  ");        // "ostrich"
 * stripWhiteSpace(`ostr
 *    ich`);                              // "ostrich"
 * ```
 *
 * @category String
 */
export function stripWhiteSpace(data: string): string {
  return data.replace(/\s/g, "");
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("removes the white space before and after", () => {
    expect(stripWhiteSpace(" ostr  ich  ")).toBe("ostrich");
    expect(
      stripWhiteSpace(`ostr  
      ich`)
    ).toBe("ostrich");
  });
}
