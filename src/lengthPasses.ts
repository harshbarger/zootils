import { purry } from "./internals";

function _lengthPasses(
  data: any[] | string,
  condition: Predicate<number>
): boolean {
  return condition(data.length);
}

/**
 * Indicates whether the length of the `data` string or array passes the `condition`.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * lengthPasses([2, 3, 4], isLt(5));     // true
 * lengthPasses("ostrich", isLt(5));     // false
 * ```
 *
 * @category Array
 * @category String
 */
export function lengthPasses(
  data: any[] | string,
  condition: Predicate<number>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * lengthPasses(isLt(5))([2, 3, 4]);     // true
 * ```
 *
 * @category Array
 * @category String
 */
export function lengthPasses<I extends any[] | string>(
  condition: Predicate<number>
): (data: any[] | string) => boolean;

export function lengthPasses(...args: any[]) {
  return purry(_lengthPasses, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if the length of the data passes the condition", () => {
    expect(lengthPasses([2, 3, 4], (x) => x > 2)).toBe(true);
    expect(lengthPasses([2, 3, 4], (x) => x > 5)).toBe(false);
    expect(lengthPasses("ostrich", (x) => x > 5)).toBe(true);
    expect(lengthPasses("cat", (x) => x > 5)).toBe(false);
  });
}
