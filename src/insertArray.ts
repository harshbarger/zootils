import { getAdjustedIndex, purry } from "./internals";

function _insertArray<I extends any[]>(
  data: I,
  index: number,
  content: I
): I {
  const adjIndex = getAdjustedIndex(data, index, "inBoundsOrOnePast");
  if (isNaN(adjIndex)) {
    return [...data] as I;
  }

  return [
    ...data.slice(0, adjIndex),
    ...content,
    ...data.slice(adjIndex, Infinity),
  ] as I;
}

/**
 * Inserts the `content` array into the `data` array at the `index` position. If `index` is equal to
 * the length of `data`, then `content` will be appended to the end. Returns a shallow copy
 * of `data` if the index is invalid.
 *
 * @param data
 * @param index negative counts backward from end, must be integer, must be in array bounds
 * or equal to the length of the array.
 * @param content
 *
 * @example
 * ```
 * insertArray([2, 3, 4], 1, [10, 11]);       // [2, 10, 11, 3, 4];
 * insertArray([2, 3, 4], -1, [10, 11]);       // [2, 3, 10, 11, 4];
 * insertArray([2, 3, 4], 3, [10, 11]);       // [2, 3, 4, 10, 11];
 * ```
 *
 * @category Array
 */
export function insertArray<I extends any[]>(
  data: I,
  index: number,
  content: I
): I;

/**
 * @param index
 * @param content
 *
 * @example
 * ```
 * insertArray(1, [10, 11])([2, 3, 4]);       // [2, 10, 11, 3, 4];
 * ```
 *
 * @category Array
 */
export function insertArray<I extends any[]>(
  index: number,
  content: I
): (data: I) => I;

export function insertArray(...args: any[]) {
  return purry(_insertArray, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("inserts array for valid index", () => {
    expect(insertArray([2, 3, 4], 1, [10, 11])).toEqual([
      2, 10, 11, 3, 4,
    ]);
    expect(insertArray([2, 3, 4], -1, [10, 11])).toEqual([
      2, 3, 10, 11, 4,
    ]);
    expect(insertArray([2, 3, 4], 3, [10, 11])).toEqual([
      2, 3, 4, 10, 11,
    ]);
    expect(insertArray([2, 3, 4], -3, [10, 11])).toEqual([
      10, 11, 2, 3, 4,
    ]);
    expect(insertArray(0, [10, 11])([2, 3, 4])).toEqual([
      10, 11, 2, 3, 4,
    ]);
  });

  it("returns copy of original for invalid index", () => {
    expect(insertArray([2, 3, 4], 4, [10, 11])).toEqual([2, 3, 4]);
    expect(insertArray([2, 3, 4], -4, [10, 11])).toEqual([2, 3, 4]);
    expect(insertArray([2, 3, 4], 1.5, [10, 11])).toEqual([2, 3, 4]);
  });
}
