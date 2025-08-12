import { purry } from "./internals";
import { ElementType, Predicate } from "./types";

function _findLastOr<I extends any[]>(
  data: I,
  condition: Predicate<ElementType<I>>,
  fallback: unknown
): ElementType<I> | typeof fallback {
  const foundIndex = data.findLastIndex(condition);
  return foundIndex >= 0 ? data[foundIndex] : fallback;
}

/**
 * Returns the last element in the `data` array that passes the `condition`, or returns
 * the `fallback` value if no element meets the `condition`.
 *
 * @param data
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findLastOr([2, -10, -2, 6], isNegative, NaN)).toBe(-2);
 * findLastOr([2, 10, 4, 6], isNegative, NaN)).toBe(NaN);
 * ```
 *
 * @category Array
 */
export function findLastOr<I extends any[]>(
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
 * findLastOr(x => x < 0, NaN)([2, -10, -2, 6]).toBe(-2);
 * ```
 *
 * @category Array
 */
export function findLastOr<I extends any[]>(
  condition: Predicate<ElementType<I>>,
  fallback: unknown
): (data: I) => ElementType<I> | typeof fallback;

export function findLastOr(...args: any[]) {
  return purry(_findLastOr, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns element when found", () => {
    expect(findLastOr([2, -10, -2, 6], (x) => x < 0, "nope")).toBe(
      -2
    );
    expect(findLastOr((x) => x < 0, "nope")([2, -10, -2, 6])).toBe(
      -2
    );
  });

  it("returns fallback when not found", () => {
    expect(findLastOr([2, 10, 4, 6], (x) => x < 0, "nope")).toBe(
      "nope"
    );
  });
}
