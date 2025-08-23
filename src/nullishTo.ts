import { purry } from "./internals";

function _nullishTo<T>(data: T | null | undefined, value: T): T {
  return data ?? value;
}

/**
 * Returns `value` if `data` is `null` or `undefined`, otherwise returns `data` unchanged.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * nullishTo(null, 5);        // 5
 * nullishTo(undefined, 5);   // 5
 * nullishTo(10, 5);          // 10
 * ```
 *
 * @category Logic
 */
export function nullishTo<T>(data: T | null | undefined, value: T): T;

/**
 * Returns `value` if `data` is `null` or `undefined`, otherwise returns `data` unchanged.
 *
 * @param value
 *
 * @example
 * ```
 * nullishTo(5)(null);        // 5
 * nullishTo(5)(undefined);   // 5
 * nullishTo(5)(10);          // 10
 * ```
 *
 * @category Logic
 */
export function nullishTo<T>(
  value: T
): (data: T | null | undefined) => T;

export function nullishTo(...args: any[]) {
  return purry(_nullishTo, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("replaces null and undefined with value", () => {
    expect(nullishTo(undefined, 5)).toBe(5);
    expect(nullishTo(5)(undefined)).toBe(5);
    expect(nullishTo(null, 5)).toBe(5);
    expect(nullishTo(5)(null)).toBe(5);
  });

  it("leaves non-nullish values alone", () => {
    expect(nullishTo(10, 5)).toBe(10);
    expect(nullishTo(5)(10)).toBe(10);
  });
}
