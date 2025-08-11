/**
 * A thin wrapper around the built-in `String.prototype.trimStart` to facilitate
 * use in functional pipelines.
 *
 * @param data
 *
 * @example
 * ```
 * trimLeft(" ostrich  ");             // "ostrich  "
 * ```
 *
 * @category String
 */
export function trimLeft(data: string): string {
  return data.trimStart();
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("remove the white space before", () => {
    expect(trimLeft(" ostrich  ")).toBe("ostrich  ");
  });
}
