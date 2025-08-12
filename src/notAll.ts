import { purry } from "./internals";
import { Predicate } from "./types";

function _notAll<T>(data: T, conditions: Predicate<T>[]): boolean {
  return !conditions.every((c) => c(data));
}

/**
 * Returns `true` if at least one of the `conditions` is not true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * notAll(2.5, [isGt(0), isLt(4), Number.isInteger]);      // true
 * notAll(2, [isGt(0), isLt(4), Number.isInteger]);        // false
 * ```
 *
 * @category Logic
 */
export function notAll<T>(
  data: T,
  conditions: Predicate<T>[]
): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * notAll([isGt(0), isLt(4), Number.isInteger])(2.5);      // true
 * ```
 *
 * @category Logic
 */
export function notAll<T>(
  conditions: Predicate<T>[]
): (data: T) => boolean;

export function notAll(...args: any[]) {
  return purry(_notAll, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if any condition fails", () => {
    expect(
      notAll(5.5, [(x) => x > 0, (x) => x < 10, Number.isInteger])
    ).toBe(true);
  });

  it("returns false if all conditions pass", () => {
    expect(
      notAll(5, [(x) => x > 0, (x) => x < 10, Number.isInteger])
    ).toBe(false);
  });
}
