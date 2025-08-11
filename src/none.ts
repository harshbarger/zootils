import { purry } from "./internals";

function _none<T>(data: T, conditions: Predicate<T>[]): boolean {
  return !conditions.some((c) => c(data));
}

/**
 * Returns `true` if and only if none of the `conditions` are true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * none(2.5, [isLt(0), isGt(4), Number.isInteger]);      // true
 * none(2, [isGt(0), isLt(4), Number.isInteger]);        // false
 * ```
 *
 * @category Logic
 */
export function none<T>(data: T, conditions: Predicate<T>[]): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * none([isLt(0), isGt(4), Number.isInteger])(2.5);      // true
 * ```
 *
 * @category Logic
 */
export function none<T>(
  conditions: Predicate<T>[]
): (data: T) => boolean;
export function none(...args: any[]) {
  return purry(_none, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if no conditions pass", () => {
    expect(none(10.5, [(x) => x < 10, Number.isInteger])).toBe(true);
  });

  it("returns false if at least one condition passes", () => {
    expect(none(5.5, [(x) => x < 10, Number.isInteger])).toBe(false);
  });
}
