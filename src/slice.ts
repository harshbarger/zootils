import { empty, getAdjustedIndex, purry } from "./internals";

function _slice<I extends any[] | string>(
  data: I,
  from: number,
  to: number
) {
  const start = getAdjustedIndex(data, from);
  const end = getAdjustedIndex(data, to, "inBoundsOrLarger");

  return isNaN(start) || isNaN(end)
    ? empty(data)
    : data.slice(start, end);
}

/**
 * Returns a shallow copy of the portion of the `data` array or string beginning at index
 * `from` and ending with, but not including, the index `to`. Negative index values count
 * backward from the end of the arrry. Returns an empty array if `from` or `to` is not an
 * integer, or if `from` is out of the array bounds.
 *
 * @param data
 * @param from
 * @param to
 *
 * @example
 * ```
 * slice([2, 3, 4, 5, 6], 2, 4);            // [4, 5]
 * slice([2, 3, 4, 5, 6], 2, -1);           // [4, 5]
 * slice("ostrich", 2, 4);                  // "tr"
 * slice("ostrich", 2, -1);                 // "tr"
 * slice([2, 3, 4, 5, 6], -4, 10);          // [3, 4, 5, 6], going past end of array is OK)
 * slice([2, 3, 4, 5, 6], -10, 4);          // [], starting at -10 is non-sensical
 * ```
 *
 * @category Array
 * @category String
 */
export function slice<I extends any[] | string>(
  data: I,
  from: number,
  to: number
): I;

/**
 * @param from
 * @param to
 *
 * @example
 * ```
 * slice(2, 4)([2, 3, 4, 5, 6]);            // [4, 5]
 * ```
 *
 * @category Array
 * @category String
 */
export function slice<I extends any[] | string>(
  from: number,
  to: number
): (data: I) => I;

export function slice(...args: any[]) {
  return purry(_slice, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const arr = [3, 4, 5, 6, 7];
  const str = "ostrich";

  it("slices arrays for valid indices", () => {
    expect(slice(arr, 2, 10)).toEqual([5, 6, 7]);
    expect(slice(arr, -2, 10)).toEqual([6, 7]);
    expect(slice(arr, 1, 3)).toEqual([4, 5]);
    expect(slice(arr, -5, -3)).toEqual([3, 4]);
    expect(slice(arr, 0, 4)).toEqual([3, 4, 5, 6]);
    expect(slice(arr, -5, 10)).toEqual([3, 4, 5, 6, 7]);
    expect(slice(2, 10)(arr)).toEqual([5, 6, 7]);
  });

  it("slices strings for valid indices", () => {
    expect(slice(str, 2, 10)).toBe("trich");
    expect(slice(str, -5, -3)).toBe("tr");
  });

  it("returns empty arrays for invalid indices", () => {
    expect(slice(arr, -7, 10)).toEqual([]);
    expect(slice(arr, 7, 12)).toEqual([]);
    expect(slice(arr, 7, 2)).toEqual([]);
    expect(slice(arr, 0, 0)).toEqual([]);
    expect(slice(arr, 2, 2.5)).toEqual([]);
    expect(slice(arr, 1.5, 2)).toEqual([]);
  });

  it("returns empty strings for invalid indices", () => {
    expect(slice(str, -10, 2)).toBe("");
  });
}
