import { purry } from "./internals";

function _equals<T>(data: T, value: T): boolean {
  return data === value;
}

/**
 * Indicates whether the `data` is strictly equal to (`===`) `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * equals(5, 5);       // true
 * equals(5, "5");     // false
 * ```
 *
 * @category Logic
 */
export function equals<T>(data: T, value: T): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * equals(5)(5);       // true
 * ```
 *
 * @category Logic
 */
export function equals<T>(value: T): (data: T) => boolean;
export function equals<T>(...args: any[]) {
  return purry(_equals, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("detects equality and inequality", () => {
    expect(equals(5, 5)).toBe(true);
    expect(equals<unknown>(5, "5")).toBe(false);
    expect(equals(3)(3)).toBe(true);
  });
}
