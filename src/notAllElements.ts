import { purry } from "./internals";
import { ElementType, Predicate } from "./types";

function _notAllElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean {
  return data.some((elem) => !condition(elem));
}

/**
 * Returns true if one or more elements of the `data` array fails to pass the condition.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * notAllElements([2, 3, 4], isGt(3));    // true
 * notAllElements([2, 3, 4], isGt(1));    // false
 * ```
 *
 * @category Array
 */
export function notAllElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * notAllElements(isGt(1))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export function notAllElements<I extends any[]>(
  condition: Predicate<ElementType<I>>
): (data: I) => boolean;

export function notAllElements(...args: any[]) {
  return purry(_notAllElements, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if any element of the `data` array fails to pass the condition", () => {
    expect(notAllElements([2, 3, 4], (x) => x > 3)).toBe(true);
  });

  it("returns false if all elements of the `data` array pass the condition", () => {
    expect(notAllElements([2, 3, 4], (x) => x > 1)).toBe(false);
  });
}
