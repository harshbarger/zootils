import { purry } from "./internals";

function _subtract(data: number, x: number): number {
  return data - x;
}

/**
 * Subtract `x` from `data`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * subtract(5, 3);     // 2
 * ```
 *
 * @category Math
 */
export function subtract(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * subtract(3)(5);     // 2
 * ```
 *
 * @category Math
 */
export function subtract(x: number): (data: number) => number;

export function subtract(...args: any[]) {
  return purry(_subtract, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("subtracts numbers", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3)(5)).toBe(2);
  });
}
