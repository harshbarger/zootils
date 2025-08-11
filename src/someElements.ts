import { purry } from "./internals";

function _someElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean {
  return data.some(condition);
}

/**
 * Returns true if one or more elements of the `data` array pass the condition. Returns false for an empty array.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * someElements([2, 3, 4], isGt(3));    // true
 * someElements([2, 3, 4], isGt(5));    // false
 * ```
 * 
 * @category Array
 */
export function someElements<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * someElements(isGt(3))([2, 3, 4]);    // true
 * ```
 * 
 * @category Array
 */
export function someElements<I extends any[]>(
  condition: Predicate<ElementType<I>>
): (data: I) => boolean;

export function someElements(...args: any[]) {
  return purry(_someElements, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if at least one element passes the condition", () => {
    expect(someElements([2, 3, 4], (x) => x > 3)).toBe(true);
  });

  it("returns false if no element passes the condition", () => {
    expect(someElements([2, 3, 4], (x) => x > 5)).toBe(false);
  });

  it("returns false for an empty array", () => {
    expect(someElements([], (x) => x > 0)).toBe(false);
  });
}
