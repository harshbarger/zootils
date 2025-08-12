import { purry } from "./internals";
import { ElementType, IndexedPredicate } from "./types";

function _filterWithIndex<I extends any[]>(
  data: I,
  condition: IndexedPredicate<ElementType<I>>
): I {
  return data.filter((x, i) => condition(x, i)) as I;
}

/**
 * Similar to {@link filter} (which is in turn similar to
 * `Array.prototype.map`), but the `condition` function requires
 * an index as the second parameter. Use {@link filter} instead
 * if you do not need the index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * filterWithIndex([4, -2, 0, 2, -4], (_, i) => isEven(i));      // [4, 0, -4]
 * ```
 *
 * @category Array
 */
export function filterWithIndex<I extends any[]>(
  data: I,
  condition: IndexedPredicate<ElementType<I>>
): I;

/**
 * @param condition
 *
 * @example
 * ```
 * filterWithIndex((_, i) => isEven(i))([4, -2, 0, 2, -4]);      // [4, 0, -4]
 * ```
 *
 * @category Array
 */
export function filterWithIndex<I extends any[]>(
  condition: IndexedPredicate<ElementType<I>>
): (data: I) => I;

export function filterWithIndex(...args: any[]) {
  return purry(_filterWithIndex, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("filters by condition with index", () => {
    expect(
      filterWithIndex([4, -2, 0, 2, -4], (_, i) => i % 2 === 0)
    ).toEqual([4, 0, -4]);
    expect(
      filterWithIndex((_, i) => i % 2 === 0)([4, -2, 0, 2, -4])
    ).toEqual([4, 0, -4]);
  });
}
