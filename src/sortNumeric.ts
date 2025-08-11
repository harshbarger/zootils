function comparator(x: number, y: number): 0 | -1 | 1 {
  if (x < y) {
    return -1;
  }

  if (x > y) {
    return 1;
  }

  if (isNaN(x)) {
    return isNaN(y) ? 0 : 1;
  }

  if (isNaN(y)) {
    return -1;
  }

  return 0;
}

/**
 * Sorts an array of numbers in ascending order, wiith `NaN`s at the end.
 *
 * @param data
 *
 * @example
 * ```
 * sortNumeric([30, 6, 1, NaN, 200, 5]);      // [1, 5, 6, 30, 200, NaN]
 * ```
 *
 * @category Array
 */
export function sortNumeric(data: number[]): number[] {
  return [...data].sort(comparator);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("sorts ascending with NaN at the end", () => {
    expect(sortNumeric([30, 6, 1, NaN, 200, 5])).toEqual([
      1,
      5,
      6,
      30,
      200,
      NaN,
    ]);
  });
}
