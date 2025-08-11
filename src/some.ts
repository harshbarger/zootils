import { purry } from "./internals";

function _some<T>(data: T, conditions: Predicate<T>[]): boolean {
  return conditions.some((c) => c(data));
}

/**
 * Returns `true` if at least one of the `conditions` is true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * some(2, [isLt(0), isGt(4), Number.isInteger]);      // true
 * some(2.5, [isLt(0), isGt(4), Number.isInteger]);    // false
 * ```
 *
 * @category Logic
 */
export function some<T>(data: T, conditions: Predicate<T>[]): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * some([isLt(0), isGt(4), Number.isInteger])(2);      // true
 * ```
 *
 * @category Logic
 */
export function some<T>(
  conditions: Predicate<T>[]
): (data: T) => boolean;

export function some(...args: any[]) {
  return purry(_some, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if at least one condition is true", () => {
    expect(
      some(10.5, [(x) => x > 0, (x) => x < 10, Number.isInteger])
    ).toBe(true);
  });

  it("returns false if all conditions are false", () => {
    expect(some(15.5, [(x) => x < 10, Number.isInteger])).toBe(false);
  });
}
