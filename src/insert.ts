import { getAdjustedIndex, purry } from "./internals";

function _insert<I extends any[] | string>(
  data: I,
  index: number,
  content: I extends any[] ? ElementType<I> : string
): I {
  const adjIndex = getAdjustedIndex(data, index, "inBoundsOrOnePast");
  if (isNaN(adjIndex)) {
    return (Array.isArray(data) ? [...data] : data) as I;
  }

  if (Array.isArray(data)) {
    return [
      ...data.slice(0, adjIndex),
      content,
      ...data.slice(adjIndex, Infinity),
    ] as I;
  }

  return `${data.slice(0, adjIndex)}${content}${data.slice(adjIndex, Infinity)}` as I;
}

/**
 * Inserts the `content` element into the `data` array, or the `content` substring into the `data` string
 * at the `index` position. If `index` is equal to the length of `data`, then `content` will be
 * appended to the end. Returns a shallow copy of `data` if the index is invalid.
 *
 * @param data
 * @param index negative counts backward from end, must be integer, must be in bounds
 * or equal to the length of `data`.
 * @param content
 *
 * @example
 * ```
 * insert([2, 3, 4], 1, 10);        // [2, 10, 3, 4]
 * insert([2, 3, 4], -1, 10);       // [2, 3, 10, 4]
 * insert("ostrich", 1, "aa");      // "oaastrich"
 * insert("ostrich", 7, "aa");      // "ostrichaa"
 * ```
 *
 * @category Array
 * @category String
 */
export function insert<I extends any[] | string>(
  data: I,
  index: number,
  content: I extends any[] ? ElementType<I> : string
): I;

/**
 * @param index
 * @param content
 *
 * @example
 * ```
 *  * insert(1, 10)(2, 3, 4]);       // [2, 10, 3, 4]
 * ```
 *
 * @category Array
 * @category String
 */
export function insert<I extends any[] | string>(
  index: number,
  content: I extends any[] ? ElementType<I> : string
): (data: I) => I;

export function insert(...args: any[]) {
  return purry(_insert, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("inserts array element for valid index", () => {
    expect(insert([2, 3, 4], 1, 10)).toEqual([2, 10, 3, 4]);
    expect(insert([2, 3, 4], -1, 10)).toEqual([2, 3, 10, 4]);
    expect(insert([2, 3, 4], 3, 10)).toEqual([2, 3, 4, 10]);
    expect(insert([2, 3, 4], 0, 10)).toEqual([10, 2, 3, 4]);
    expect(insert(-3, 10)([2, 3, 4])).toEqual([10, 2, 3, 4]);
  });

  it("inserts usbsrting for valid index", () => {
    expect(insert("ostrich", 1, "aa")).toBe("oaastrich");
    expect(insert("ostrich", -1, "aa")).toBe("ostricaah");
    expect(insert("ostrich", 7, "aa")).toBe("ostrichaa");
    expect(insert("ostrich", 0, "aa")).toBe("aaostrich");
    expect(insert(-7, "aa")("ostrich")).toBe("aaostrich");
  });

  it("returns the original for invalid index", () => {
    expect(insert([2, 3, 4], 4, 10)).toEqual([2, 3, 4]);
    expect(insert([2, 3, 4], -4, 10)).toEqual([2, 3, 4]);
    expect(insert([2, 3, 4], 2.5, 10)).toEqual([2, 3, 4]);
    expect(insert("ostrich", 8, "aa")).toBe("ostrich");
    expect(insert("ostrich", -8, "aa")).toBe("ostrich");
    expect(insert("ostrich", NaN, "aa")).toBe("ostrich");
  });
}
