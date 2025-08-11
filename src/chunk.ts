import { purry } from "./internals";

function _chunk<I extends any[] | string>(
  data: I,
  size: number
): I[] {
  if (!Number.isInteger(size) || size < 1) {
    return [];
  }

  const len = Math.ceil(data.length / size);

  return [...new Array(len)].map((_, i) =>
    data.slice(i * size, (i + 1) * size)
  ) as I[];
}

/**
 * Breaks `data` into an array of subarrays or substrings, each of length `size`.
 * If `size` does not divide evenly into the length of `data`, the last subarray
 * will contain fewer than `size` elements. Returns an empty array if `size` is invalid.
 *
 * @param data
 * @param size must be a postive integer
 *
 * @example
 * ```
 * chunk([2, 3, 4, 5, 6, 7], 2);     // [[2, 3], [4, 5], [6, 7]]
 * chunk([2, 3, 4, 5, 6], 3);        // [[2, 3, 4], [5, 6]]
 * chunk("ostrich", 3);              // ["ost", "ric", "h"]
 * ```
 *
 * @category Array
 */
export function chunk<I extends any[] | string>(
  data: I,
  size: number
): I[];

/**
 * @param size
 *
 * @example
 * ```
 * chunk(2)([2, 3, 4, 5, 6, 7]);     // [[2, 3], [4, 5], [6, 7]]
 * ```
 *
 * @category Array
 */
export function chunk<I extends any[] | string>(
  size: number
): (data: I) => I[];

export function chunk(...args: any[]) {
  return purry(_chunk, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("creates chunks for valid sizes of arrays", () => {
    expect(chunk([2, 3, 4, 5, 6, 7], 2)).toEqual([
      [2, 3],
      [4, 5],
      [6, 7],
    ]);
    expect(chunk([2, 3, 4, 5, 6], 3)).toEqual([
      [2, 3, 4],
      [5, 6],
    ]);
    expect(chunk([2, 3, 4, 5, 6, 7], 10)).toEqual([
      [2, 3, 4, 5, 6, 7],
    ]);
    expect(chunk(2)([2, 3, 4, 5, 6, 7])).toEqual([
      [2, 3],
      [4, 5],
      [6, 7],
    ]);
  });

  it("creates chunks for valid sizes of strings", () => {
    expect(chunk("ostrich", 3)).toEqual(["ost", "ric", "h"]);
    expect(chunk("ostrich", 10)).toEqual(["ostrich"]);
    expect(chunk(3)("ostrich")).toEqual(["ost", "ric", "h"]);
  });

  it("returns an empty array for invalid size", () => {
    expect(chunk([2, 3, 4, 5, 6, 7], 2.5)).toEqual([]);
    expect(chunk([2, 3, 4, 5, 6, 7], 0)).toEqual([]);
    expect(chunk("ostrich", -1)).toEqual([]);
  });
}
