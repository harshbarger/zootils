import { empty, getAdjustedIndex, purry } from "./internals";

function _sliceFrom<I extends any[] | string>(
  data: I,
  from: number
): I {
  const start = getAdjustedIndex(data, from);
  return (isNaN(start)
    ? empty(data)
    : data.slice(start)) as unknown as I;
}

/**
 * Returns a shallow copy of the `data` array or string starting from index `from`.
 * A negative index counts backwards from the end of the array.
 * Returns an empty array if `from` is not an integer or is out of bounds.
 *
 * @param data
 * @param from
 *
 * @example
 * ```
 * sliceFrom([2, 3, 4], 2);        // [4]
 * sliceFrom([2, 3, 4], -2);       // [3, 4]
 * sliceFrom("ostrich", 2);        // "trich"
 * sliceFrom("ostrich", -2);       // "ch"
 * sliceFrom([2, 3, 4], 6);        // []
 * ```
 *
 * @category Array
 * @category String
 */
export function sliceFrom<I extends any[] | string>(
  data: I,
  from: number
): I;

/**
 * @param from
 *
 * @example
 * ```
 * sliceFrom(2)([2, 3, 4]);        // [4]
 * ```
 *
 * @category Array
 * @category String
 */
export function sliceFrom<I extends any[] | string>(
  from: number
): (data: I) => I;

export function sliceFrom(...args: any[]) {
  return purry(_sliceFrom, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns correct array slice for valid indices", () => {
    expect(sliceFrom([2, 3, 4], 2)).toEqual([4]);
    expect(sliceFrom([2, 3, 4], -1)).toEqual([4]);
    expect(sliceFrom([2, 3, 4], 6)).toEqual([]);
    expect(sliceFrom([2, 3, 4], 0)).toEqual([2, 3, 4]);
    expect(sliceFrom(2)([2, 3, 4])).toEqual([4]);
  });

  it("returns correct substring for valid indices", () => {
    expect(sliceFrom("ostrich", 2)).toBe("trich");
    expect(sliceFrom("ostrich", -2)).toBe("ch");
  });

  it("returns an empty array or string for invalid indices", () => {
    expect(sliceFrom([2, 3, 4], 1.5)).toEqual([]);
    expect(sliceFrom("ostrich", 1.5)).toEqual("");
  });
}
