import { purry } from "./internals";

function _contains(data: any[] | string, value: any): boolean {
  return data.includes(value);
}

/**
 * Indicates whether or not the `data` array contains the element `value`,
 * or the `data` string contains the substring `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * contains([2, 3, 4], 4);           // true
 * contains([2, 3, 4], 10);          // false
 * contains("ostrich", "rich");      // true
 * contains("ostrich", "cat");       // false
 * ```
 *
 * @category Array
 * @category String
 */
export function contains(data: any[] | string, value: any): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * contains(4)([2, 3, 4]);           // true
 * ```
 *
 * @category Array
 * @category String
 */
export function contains(
  value: any
): (data: any[] | string) => boolean;
export function contains(...args: any[]) {
  return purry(_contains, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies contained and not-contained elements for arrays", () => {
    expect(contains([2, 3, 4], 4)).toBe(true);
    expect(contains([2, 3, 4], 10)).toBe(false);
    expect(contains(4)([2, 3, 4])).toBe(true);
  });

  it("indentifies contained and not-contained substrings for strings", () => {
    expect(contains("ostrich", "rich")).toBe(true);
    expect(contains("ostrich", "cat")).toBe(false);
    expect(contains("rich")("ostrich")).toBe(true);
  });
}
