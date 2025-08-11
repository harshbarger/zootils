import { purry } from "./internals";

function _findOr<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>,
  fallback: unknown
): ElementType<I> | typeof fallback {
  const foundIndex = data.findIndex(condition);
  return foundIndex >= 0 ? data[foundIndex] : fallback;
}

/**
 * Returns the first element in the `data` array that passes the `condition`, or returns
 * the `fallback` value if no element meets the `condition`.
 *
 * @param data
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findOr([2, 10, -2, -6], isNegative, NaN);      // -2
 * findOr([2, 10, 4, 6], isNegative, NaN);        // NaN
 * ```
 *
 * @category Array
 */
export function findOr<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>,
  fallback: unknown
): ElementType<I> | typeof fallback;

/**
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findOr(isNegative, NaN)([2, 10, -2, -6]);      // -2
 * ```
 *
 * @category Array
 */
export function findOr<I extends any[]>(
  condition: Predicate<ElementType<I>>,
  fallback: unknown
): (data: I) => ElementType<I> | typeof fallback;

export function findOr(...args: any[]) {
  return purry(_findOr, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns element when found", () => {
    expect(findOr([2, -10, -2, 6], (x) => x < 0, "nope")).toBe(-10);
    expect(findOr((x) => x < 0, "nope")([2, -10, -2, 6])).toBe(-10);
  });

  it("returns fallback when not found", () => {
    expect(findOr([2, 10, 4, 6], (x) => x < 0, "nope")).toBe("nope");
  });
}
