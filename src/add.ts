import { purry } from "./internals";

function _add(data: number, x: number): number {
  return data + x;
}

/**
 * Adds two numbers
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * add(3, 5);     // 8
 * ```
 *
 * @category Math
 */
export function add(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * add(3)(5);     // 8
 * ```
 *
 * @category Math
 */
export function add(x: number): (data: number) => number;

export function add(...args: any[]) {
  return purry(_add, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("adds numbers", () => {
    expect(add(3, 5)).toBe(8);
    expect(add(3)(5)).toBe(8);
  });
}
