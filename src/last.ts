/**
 * Returns the last element of an array, or `undefined` if the array is empty.
 *
 * @param data
 *
 * @example
 * ```
 * last([3, 4, 6]);    // 6
 * last([]);           // undefined
 * ```
 *
 * @category Array
 */
export function last<I extends any[]>(
  data: I
): ElementType<I> | undefined {
  return data.at(-1);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the last element when there is one", () => {
    expect(last([3, 4, 6])).toBe(6);
  });

  it("returns undefined if the array is empty", () => {
    expect(last([])).toBeUndefined();
  });
}
