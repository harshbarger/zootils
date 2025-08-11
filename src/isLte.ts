import { purry } from "./internals";

function _isLte(data: number, value: number): boolean {
  return data <= value;
}

/**
 * Indicates whether `data` is less than or equal to `value`
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isLte(4, 5);       // true
 * isLte(5, 5);       // true
 * isLte(3, 2);       // false
 * ```
 *
 * @category Math
 */
export function isLte(data: number, value: number): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * isLte(6)(5);       // true
 * ```
 *
 * @category Math
 */
export function isLte(value: number): (data: number) => boolean;
export function isLte(...args: any[]) {
  return purry(_isLte, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("correctly tests the inequality", () => {
    expect(isLte(4, 5)).toBe(true);
    expect(isLte(5, 5)).toBe(true);
    expect(isLte(2)(3)).toBe(false);
  });
}
