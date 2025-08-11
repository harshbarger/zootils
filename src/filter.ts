import { purry } from "./internals";

function _filter<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): I {
  return data.filter(condition) as I;
}

/**
 * Similar to `Array.prototype.filter`, but with the difference that
 * the `condition` function is not called with an index as the second parameter.
 * This prevents unexpected behavior when the `transform`
 * function has a second optional parameter that respresents
 * something other than an index. Use {@link filterWithIndex} instead if
 * you need the index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * filter([4, -2, 0, 2, -4], isPositive);               // [4, 2]
 * ```
 *
 * @category Array
 */
export function filter<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): I;

/**
 * @param condition
 *
 * @example
 * ```
 * filter(isPositive)([4, -2, 0, 2, -4]);      // [4, 2]
 * ```
 *
 * @category Array
 */
export function filter<I extends any[]>(
  condition: Predicate<ElementType<I>>
): (data: I) => I;

export function filter(...args: any[]) {
  return purry(_filter, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("keeps only passing elements", () => {
    expect(filter([-4, 0, 2, -2, 4], (x) => x > 0)).toEqual([2, 4]);
  });
}
