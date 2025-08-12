import { purry } from "./internals";
import { isGt } from "./isGt";
import { ElementType, Predicate } from "./types";

function _noElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean {
  return data.every((elem) => !condition(elem));
}

/**
 * Returns true if no elements of the `data` array pass the `condition`.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * noElements([2, 3, 4], isGt(5));    // true
 * noElements([2, 3, 4], isGt(3));    // false
 * ```
 *
 * @category Array
 */
export function noElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * noElements(isGt(5))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export function noElements<I extends any[]>(
  condition: Predicate<ElementType<I>>
): (data: I) => boolean;

export function noElements(...args: any[]) {
  return purry(_noElements, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if no elements pass the condition", () => {
    expect(noElements([2, 3, 4], isGt(5))).toBe(true);
  });

  it("returns false if at least one element passes the condition", () => {
    expect(noElements([4, 5, 6], (x) => x > 5)).toBe(false);
  });
}
