import { getAdjustedIndex, purry } from "./internals";
import { ElementType, Predicate } from "./types";

function _elementPasses<I extends any[]>(
  data: I,
  index: number,
  condition: Predicate<ElementType<I>>
): boolean {
  const adjIndex = getAdjustedIndex(data, index, "onlyInBounds");
  return isNaN(adjIndex) ? false : condition(data[adjIndex]);
}

/**
 * Indicates whether the element of array `data` at `index` passes the `condition`.
 * If `index` is invalid or out of bounds, returns false.
 *
 * @param data
 * @param index
 * @param condition
 *
 * @example
 * ```
 * elementPasses([-1, 0, 1], 2, x => x > 0);     // true
 * elementPasses([-1, 0, 1], 0, x => x > 0);     // false
 * elementPasses([-1, 0, 1], 5, x => x > 0);     // false (since index is out of bounds)
 * ```
 *
 * @category Array
 */
export function elementPasses<I extends any[]>(
  data: I,
  index: number,
  condition: Predicate<ElementType<I>>
): boolean;

/**
 * @param index
 * @param condition
 *
 * @example
 * ```
 * elementPasses(2, x => x > 0)([-1, 0, 1]);      // true
 * ```
 *
 * @category Array
 */
export function elementPasses<I extends any[]>(
  index: number,
  condition: Predicate<ElementType<I>>
): (data: I) => boolean;

export function elementPasses(...args: any[]) {
  return purry(_elementPasses, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("applies condition correctly for valid indices", () => {
    expect(elementPasses([-1, 0, 1], 2, (x) => x > 0)).toBe(true);
    expect(elementPasses([-1, 0, 1], 0, (x) => x > 0)).toBe(false);
    expect(elementPasses(2, (x) => x > 0)([-1, 0, 1])).toBe(true);
  });

  it("returns false for invalid indices", () => {
    expect(elementPasses([-1, 0, 1], 3, (x) => x > 0)).toBe(false);
    expect(elementPasses([-1, 0, 1], 1.5, (x) => x > 0)).toBe(false);
  });
}
