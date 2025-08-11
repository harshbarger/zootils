import { empty, getAdjustedIndex, purry } from "./internals";

function _sliceTo<I extends any[] | string>(data: I, to: number): I {
  const end = getAdjustedIndex(data, to, "inBoundsOrLarger");
  return isNaN(end) ? empty(data) : (data.slice(0, end) as I);
}

/**
 * Return a shallow copy of the `data` array or string up to, but not including,
 * the index 'to`. Returns an empty array if `to` is not an integer.
 *
 * @param data
 * @param to
 *
 * @example
 * ```
 * sliceTo([2, 3, 4, 5], 2);     // [2, 3]
 * sliceTo([2, 3, 4, 5], -1);    // [2, 3, 4]
 * sliceTo([2, 3, 4, 5], 6);     // [2, 3, 4, 5]
 * sliceTo("ostrich", 2);        // "os"
 * sliceTo("ostrich", -2);       // "ostri"
 * sliceTo("ostrich", 10);       // "ostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export function sliceTo<I extends any[] | string>(
  data: I,
  to: number
): I;

/**
 * @param to
 *
 * @example
 * ```
 * sliceTo(2)([2, 3, 4, 5]);     // [2, 3]
 * ```
 *
 * @category Array
 * @category String
 */
export function sliceTo<I extends any[] | string>(
  to: number
): (data: I) => I;

export function sliceTo(...args: any[]) {
  return purry(_sliceTo, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("slices arrays for valid indices", () => {
    expect(sliceTo([2, 3, 4, 5], 2)).toEqual([2, 3]);
    expect(sliceTo([2, 3, 4, 5], 6)).toEqual([2, 3, 4, 5]);
    expect(sliceTo([2, 3, 4, 5], -2)).toEqual([2, 3]);
    expect(sliceTo(0)([2, 3, 4, 5])).toEqual([]);
  });

  it("slices strings for valid indices", () => {
    expect(sliceTo("ostrich", 2)).toBe("os");
    expect(sliceTo("ostrich", 10)).toBe("ostrich");
    expect(sliceTo("ostrich", -2)).toEqual("ostri");
    expect(sliceTo(0)("ostrich")).toBe("");
  });

  it("returns empty array or string for invalid indices", () => {
    expect(sliceTo([2, 3, 4, 5], 2.5)).toEqual([]);
    expect(sliceTo("ostrich", 2.5)).toBe("");
  });
}
