import { purry } from "./internals";

function _multiply(data: number, x: number): number {
  return data * x;
}

/**
 * Multiplies two numbers
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * multiply(3, 5);     // 15
 * ```
 *
 * @category Math
 */
export function multiply(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * multiply(3)(5);     // 15
 * ```
 *
 * @category Math
 */
export function multiply(x: number): (data: number) => number;

export function multiply(...args: any[]) {
  return purry(_multiply, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("multiplies numbers", () => {
    expect(multiply(3, 5)).toBe(15);
    expect(multiply(3)(5)).toBe(15);
  });
}
