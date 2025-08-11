import { purry } from "./internals";

function _subtractFrom(data: number, x: number): number {
  return x - data;
}

/**
 * Subtract `data` from `x`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * subtract(5, 3);     // -2
 * ```
 *
 * @category Math
 */
export function subtractFrom(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * subtract(3)(5);     // -2
 * ```
 *
 * @category Math
 */
export function subtractFrom(x: number): (data: number) => number;

export function subtractFrom(...args: any[]) {
  return purry(_subtractFrom, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("subtracts data from a number", () => {
    expect(subtractFrom(5, 3)).toBe(-2);
    expect(subtractFrom(3)(5)).toBe(-2);
  });
}
