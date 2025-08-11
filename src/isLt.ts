import { purry } from "./internals";

function _isLt(data: number, value: number): boolean {
  return data < value;
}

/**
 * Indicates whether `data` is less than `value`
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isLt(4, 5);       // true
 * isLt(5, 5);       // false
 * ```
 *
 * @category Math
 */
export function isLt(data: number, value: number): boolean;

/**
 * Indicates whether `data` is less than `value`
 *
 * @param value
 *
 * @example
 * ```
 * isLt(5)(4);       // true
 * ```
 *
 * @category Math
 */
export function isLt(value: number): (data: number) => boolean;
export function isLt(...args: any[]) {
  return purry(_isLt, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("correctly tests the inequality", () => {
    expect(isLt(4, 5)).toBe(true);
    expect(isLt(5, 5)).toBe(false);
    expect(isLt(3)(2)).toBe(true);
  });
}
