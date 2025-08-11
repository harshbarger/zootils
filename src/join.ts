import { purry } from "./internals";

function _join(data: string[], separator: string): string {
  return data.join(separator);
}

/**
 * Concatenates the strings in the `data` array, inserting the
 * `separator` string between each.
 *
 * @param data
 * @param separator
 *
 * @example
 * ```
 * join(['a', 'b', 'c'], '_');     // 'a_b_c'
 * ```
 *
 * @category Array
 */
export function join(data: string[], separator: string): string;

/**
 * @param separator
 *
 * @example
 * ```
 * join('')(['a', 'b', 'c']);     // 'abc'
 * ```
 *
 * @category Array
 */
export function join(separator: string): (data: string[]) => string;

export function join(...args: any[]) {
  return purry(_join, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("joins strings with or without a specified separator", () => {
    expect(join(["a", "b", "c"], "_")).toBe("a_b_c");
    expect(join("")(["a", "b", "c"])).toBe("abc");
  });
}
