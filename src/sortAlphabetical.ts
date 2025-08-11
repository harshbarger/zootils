function comparator(a: string, b: string) {
  return a.localeCompare(b, "en-US", {
    ignorePunctuation: true,
    caseFirst: "upper",
  });
}

/**
 * Sorts an array of strings alphabetically, ignoring punctuation.
 * and placing uppercase letters first.
 *
 * @param data
 *
 * @example
 * ```
 * sortAplhabetical(["a", "a c", "ab", "Ab"]);      // ["a", "Ab", "ab", "a c"]
 * ```
 * 
 * @category Array
 */
export function sortAlphabetical(data: string[]): string[] {
  return [...data].sort(comparator);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("sorts, ignoring punctuation, and capitals first", () => {
    expect(sortAlphabetical(["a", "a c", "ab", "Ab"])).toEqual([
      "a",
      "Ab",
      "ab",
      "a c",
    ]);
  });
}
