import { purry } from "../src/internals";

function _equalsOneOf(data: any, values: any[]): boolean {
  return values.includes(data);
}

/**
 * Returns true if `data` is equal to one of the `values`, false otherwise.
 *
 * @param data
 * @param values
 *
 * @example
 * ```
 * equalsOneOf(1, [1, 2, 3]);    // true
 * equalsOneOf(4, [1, 2, 3]);    // false
 * ```
 *
 * @category Logic
 */
export function equalsOneOf(data: any, values: any[]): boolean;

/**
 * @example
 * ```
 * equalsOneOf([1, 2, 3])(1);    // true
 * ```
 *
 * @category Logic
 */
export function equalsOneOf(values: any[]): (data: any) => boolean;
export function equalsOneOf(...args: any[]) {
  return purry(_equalsOneOf, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if data is equal to one of the values", () => {
    expect(equalsOneOf(1, [1, 2, 3])).toBe(true);
  });

  it("returns false if data is not equal to any of the values", () => {
    expect(equalsOneOf(4, [1, 2, 3])).toBe(false);
    expect(equalsOneOf([1, 2, 3])(4)).toBe(false);
  });
}
