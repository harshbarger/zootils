/**
 * A thin wrapper around the built-in `String.prototype.trim` to facilitate
 * use in functional pipelines.
 *
 * @param data
 *
 * @example
 * ```
 * trim(" ostrich  ");             // "ostrich"
 * ```
 *
 * @category String
 */
export function trim(data: string): string {
  return data.trim();
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("remove the white space before and after", () => {
    expect(trim(" ostrich  ")).toBe("ostrich");
  });
}
