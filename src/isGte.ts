import { purry } from "./internals";

function _isGte(data: number, value: number): boolean {
  return data >= value;
}

/**
 * Indicates whether `data` is greater than or equal to `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isGte(5, 4);       // true
 * isGte(5, 5);       // true
 * isGte(3, 5);       // false
 * ```
 *
 * @category Math
 */
export function isGte(data: number, value: number): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * isGte(5)(4);       // true
 * ```
 *
 * @category Math
 */
export function isGte(value: number): (data: number) => boolean;
export function isGte(...args: any[]) {
  return purry(_isGte, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("correctly tests the inequality", () => {
    expect(isGte(5, 4)).toBe(true);
    expect(isGte(5, 5)).toBe(true);
    expect(isGte(5)(3)).toBe(false);
  });
}
