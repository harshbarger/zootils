/**
 * A thin wrapper around the built-in `String.prototype.trimEnd` to facilitate
 * use in functional pipelines.
 *
 * @param data
 *
 * @example
 * ```
 * trimRight(" ostrich  ");             // " ostrich"
 * ```
 *
 * @category String
 */
export function trimRight(data: string): string {
  return data.trimEnd();
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("remove the white space after", () => {
    expect(trimRight(" ostrich  ")).toBe(" ostrich");
  });
}
