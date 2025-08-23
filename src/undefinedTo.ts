import { purry } from "./internals";

function _undefinedTo<T>(data: T | undefined, value: T): T {
  return typeof data === "undefined" ? value : data;
}

/**
 * Returns `value` if `data` is `undefined`, otherwise returns `data` unchanged.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * undefinedTo(undefined, 5);   // 5
 * undefinedTo(10, 5);          // 10
 * ```
 *
 * @category Logic
 */
export function undefinedTo<T>(data: T | undefined, value: T): T;

/**
 * @param value
 *
 * @example
 * ```
 * undefinedTo(5)(undefined);    // 5
 * undefinedTo(5)(10);           // 10
 * ```
 *
 * @category Logic
 */
export function undefinedTo<T>(value: T): (data: T | undefined) => T;

export function undefinedTo(...args: any[]) {
  return purry(_undefinedTo, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("replaces undefined with value", () => {
    expect(undefinedTo(undefined, 5)).toBe(5);
    expect(undefinedTo(5)(undefined)).toBe(5);
  });

  it("leaves non-undefined values alone", () => {
    expect(undefinedTo(10, 5)).toBe(10);
    expect(undefinedTo(5)(10)).toBe(10);
    expect(undefinedTo<number | null>(5)(null)).toBeNull();
  });
}
