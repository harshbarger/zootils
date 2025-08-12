import { getAdjustedIndex, purry } from "./internals";
import { ElementType } from "./types";

function _elementAt<I extends any[]>(
  data: I,
  index: number
): ElementType<I> | undefined {
  const adjIndex = getAdjustedIndex(data, index, "onlyInBounds");
  return isNaN(adjIndex) ? undefined : data[adjIndex];
}

/**
 * Returns the element of `data` at `index`, or `undefined` if `index` is out of bounds
 * or otherwise invalid.
 *
 * @param data
 * @param index counts backward from end of array if negative, must be integer
 *
 * @example
 * ```
 * elementAt([2, 4, 6], 2);      // 6
 * elementAt([2, 4, 6], -2);     // 4
 * elementAt([2, 4, 6], 5);      // undefined
 * ```
 *
 * @category Array
 */
export function elementAt<I extends any[]>(
  data: I,
  index: number
): ElementType<I> | undefined;

/**
 * @param index
 *
 * @example
 * ```
 * elementAt(2)([2, 4, 6]);      // 6
 * ```
 *
 * @category Array
 */
export function elementAt<I extends any[]>(
  index: number
): (data: I) => ElementType<I> | undefined;

export function elementAt(...args: any[]) {
  return purry(_elementAt, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the element at valid indices", () => {
    expect(elementAt([2, 4, 6], 2)).toBe(6);
    expect(elementAt([2, 4, 6], -2)).toBe(4);
    expect(elementAt(-3)([2, 4, 6])).toBe(2);
  });

  it("returns undefined for invalid or out of bounds indices", () => {
    expect(elementAt([2, 4, 6], 3)).toBeUndefined();
    expect(elementAt([2, 4, 6], -4)).toBeUndefined();
    expect(elementAt([2, 4, 6], 1.5)).toBeUndefined();
    expect(elementAt([2, 4, 6], Infinity)).toBeUndefined();
  });
}
