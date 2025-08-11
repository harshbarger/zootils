import { purry } from "./internals";

function _notEqual<T>(data: T, value: T): boolean {
  return data !== value;
}

/**
 * Indicates if the `data` is not strictly equal to `value`.
 *
 * You will likely need to use a type annotation if the types of the `data`
 * and `value` are different.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * notEqual(5, 7);                // true
 * notEqual("a", "b");            // false
 * notEqual<unknown>(5, "5")      // true
 * ```
 *
 * @category Logic
 */
export function notEqual<T>(data: T, value: T): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * notEqual(7)(5);         true
 * ```
 *
 * @category Logic
 */
export function notEqual<T>(value: T): (data: T) => boolean;

export function notEqual<T>(...args: any[]) {
  return purry(_notEqual, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("detects inequality or lack thereof", () => {
    expect(notEqual(5, 5)).toBe(false);
    expect(notEqual<unknown>(5, "5")).toBe(true);
    expect(notEqual(3)(5)).toBe(true);
  });
}
