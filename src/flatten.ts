/**
 * Flatten an array one level.
 *
 * @param data
 *
 * @example
 * ```
 * flatten([[3, 4], [5]]);      // [3, 4, 5]
 * flatten([[[1, 2, 3]], [[4, 5], 6], [7, 8, [9]]]);
 *                         // [[1, 2, 3], [4, 5], 6, 7, 8, [9]]
 * ```
 *
 * @category Array
 */
export function flatten<I extends (any | any[])[]>(
  data: I
): ElementType<I> {
  return data.flat();
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("flattens 2d array", () => {
    expect(flatten([[3, 4], [5]])).toEqual([3, 4, 5]);
    expect(flatten([[3, 4], 5])).toEqual([3, 4, 5]);
  });

  it("flattens 3d array one level", () => {
    expect(flatten([[[1, 2, 3]], [[4, 5], 6], [7, 8, [9]]])).toEqual([
      [1, 2, 3],
      [4, 5],
      6,
      7,
      8,
      [9],
    ]);
  });
}
