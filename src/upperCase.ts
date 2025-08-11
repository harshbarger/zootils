/**
 * A thin wrapper around the built-in `String.prototype.toUpperCase` to facilitate
 * use in functional pipelines.
 * @param data
 * @returns
 *
 * @example
 * ```
 * upperCase('SCUBA Diver');     // 'SCUBA DIVER'
 * ```
 *
 * @category String
 */
export function upperCase(data: string) {
  return data.toUpperCase();
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("converts to uppercase", () => {
    expect(upperCase("SCUBA Diver")).toBe("SCUBA DIVER");
  });
}
