import { purry } from "./internals";

function _isGt(data: number, value: number): boolean {
  return data > value;
}

/**
 * Indicates whether `data` is greater than `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isGt(5, 4);       // true
 * isGt(5, 5);       // false
 * ```
 *
 * @category Math
 */
export function isGt(data: number, value: number): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * isGt(5)(4);       // true
 * ```
 *
 * @category Math
 */
export function isGt(value: number): (data: number) => boolean;
export function isGt(...args: any[]) {
  return purry(_isGt, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("correctly tests the inequality", () => {
    expect(isGt(5, 4)).toBe(true);
    expect(isGt(5, 5)).toBe(false);
    expect(isGt(3)(5)).toBe(true);
  });
}
