import { purry } from "./internals";

function _nullTo<T>(data: T | null, value: T): T {
  return data === null ? value : data;
}

/**
 * Returns `value` if `data` is `null`, otherwise returns `data` unchanged.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * nullTo(null, 5);     // 5
 * nullTo(10, 5);       // 10
 * ```
 *
 * @category Logic
 */
export function nullTo<T>(data: T | null, value: T): T;

/**
 * @param value
 *
 * @example
 * ```
 * nullTo(5)(null);      // 5
 * nullTo(5)(10);        // 10
 * ```
 * @category Logic
 */
export function nullTo<T>(value: T): (data: T | null) => T;

export function nullTo(...args: any[]) {
  return purry(_nullTo, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("replaces null with value", () => {
    expect(nullTo(null, 5)).toBe(5);
    expect(nullTo(5)(null)).toBe(5);
  });

  it("leaves non-null values alone", () => {
    expect(nullTo(10, 5)).toBe(10);
    expect(nullTo(5)(10)).toBe(10);
  });
}
