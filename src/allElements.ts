import { purry } from "./internals";
import { ElementType, Predicate } from "./types";

function _allElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean {
  return data.every(condition);
}

/**
 * Returns true if all elements of the `data` array pass the condition.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * allElements([2, 3, 4], isGt(1));    // true
 * allElements([2, 3, 4], isGt(3));    // false
 * ```
 *
 * @category Array
 */
export function allElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * allElements(isGt(1))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export function allElements<I extends any[]>(
  condition: Predicate<ElementType<I>>
): (data: I) => boolean;

export function allElements(...args: any[]) {
  return purry(_allElements, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("returns true when all elements pass the condition", () => {
    expect(allElements([2, 3, 4], (x) => x > 1)).toBe(true);
  });

  it("returns false when any element fails the condition", () => {
    expect(allElements([2, 3, 4], (x) => x > 3)).toBe(false);
  });
}
