import { purry } from "./internals";
import { ElementType, Predicate } from "./types";

function _countWith<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): number {
  return data.reduce(
    (acc, next) => (condition(next) ? acc + 1 : acc),
    0
  );
}

/**
 * Counts the number of elements in the `data` array that
 * pass the `condition` predicate.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * countWith([2, 10, -2, -6], isNegative);      // 2
 * ```
 *
 * @category Array
 */
export function countWith<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): number;

/**
 *
 * @param condition
 *
 * @example
 * ```
 * countWith(isNegative)([2, 10, -2, -6]);      // 2
 * ```
 *
 * @category Array
 */
export function countWith<I extends any[]>(
  condition: Predicate<ElementType<I>>
): (data: I) => number;
export function countWith(...args: any[]) {
  return purry(_countWith, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("counts passing elements", () => {
    expect(countWith([2, 10, -2, -6], (x) => x < 0)).toBe(2);
    expect(countWith((x) => x < 0)([2, 10, -2, -6])).toBe(2);
  });
}
