/**
 * Returns the first element of an array, or `undefined` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * first([3, 4, 6]);    // 3
 * ```
 *
 * @category Array
 */
export function first<I extends any[]>(
  data: I
): ElementType<I> | undefined {
  return data.at(0);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the first element when there is one", () => {
    expect(first([3, 4, 6])).toBe(3);
  });

  it("returns undefined if the array is empty", () => {
    expect(first([])).toBeUndefined();
  });
}
