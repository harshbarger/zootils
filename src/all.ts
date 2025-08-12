import { purry } from "./internals";
import { Predicate } from "./types";

function _all<T>(data: T, conditions: Predicate<T>[]): boolean {
  return conditions.every((c) => c(data));
}

/**
 * Returns `true` if and only if all `conditions` are true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * all(2, [isGt(0), isLt(4), Number.isInteger]);      // true
 * all(2.5, [isGt(0), isLt(4), Number.isInteger]);    // false
 * ```
 *
 * @category Logic
 */
export function all<T>(data: T, conditions: Predicate<T>[]): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * all([isGt(0), isLt(4), Number.isInteger])(2);      // true
 * ```
 *
 * @category Logic
 */
export function all<T>(
  conditions: Predicate<T>[]
): (data: T) => boolean;

export function all(...args: any[]) {
  return purry(_all, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true when all conditions are true", () => {
    expect(
      all(5, [(x) => x > 0, (x) => x < 10, Number.isInteger])
    ).toBe(true);
  });

  it("returns false when any condition is false", () => {
    expect(
      all(4.5, [(x) => x > 0, (x) => x < 10, Number.isInteger])
    ).toBe(false);
  });
}
