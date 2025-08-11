import { getAdjustedIndex, purry } from "./internals";

function _setElement<I extends any[]>(
  data: I,
  index: number,
  value: ElementType<I>
) {
  const adjIndex = getAdjustedIndex(data, index, "onlyInBounds");
  const copy = structuredClone(data);
  if (!Number.isNaN(adjIndex)) {
    copy[adjIndex] = value;
  }
  return copy;
}

/**
 * Returns a copy of the array `data` with the element at `index` set to `value`.
 * A negative `index` will count backward from the end of the array.
 * If `index` is out of bounds or not an integer, returns an unaltered copy of `data`.
 *
 * @param data
 * @param index
 * @param value
 *
 * @example
 * ```
 * setElement([2, 3, 4], 0, 10);        // [10, 3, 4]
 * setElement([2, 3, 4], -1, 10);       // [2, 3, 10]
 * ```
 *
 * @category Array
 */
export function setElement<I extends any[]>(
  data: I,
  index: number,
  value: ElementType<I>
): I;

/**
 * @param index
 * @param value
 *
 * @example
 * ```
 * setElement(0, 10)([2, 3, 4]);        // [10, 3, 4]
 * ```
 *
 * @category Array
 */
export function setElement<I extends any[]>(
  index: number,
  value: ElementType<I>
): (data: I) => I;
export function setElement(...args: any[]) {
  return purry(_setElement, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const arr = [2, 3, 4, 5];

  it("sets element if index exists", () => {
    expect(setElement(arr, 0, 6)).toEqual([6, 3, 4, 5]);
    expect(setElement(-1, 6)(arr)).toEqual([2, 3, 4, 6]);
  });

  it("returns array unchanged if index does not exist", () => {
    expect(setElement(arr, 1.5, 6)).toEqual(arr);
    expect(setElement(arr, 5, 6)).toEqual(arr);
    expect(setElement(arr, -5, 6)).toEqual(arr);
    expect(setElement(arr, -5, 4)).toEqual(arr);
  });
}
