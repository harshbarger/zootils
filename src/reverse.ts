/**
 * Returns a copy of the array in reversed order.
 *
 * @param data
 *
 * @example
 * ```
 * reverse([1, 2, 3]);      // [3, 2, 1]
 * ```
 *
 * @category Array
 */
export function reverse(data: any[]) {
  return [...data].reverse();
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("reverses the array", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse([])).toEqual([]);
  });
}
