import { purry } from "./internals";

function _divideInto(data: number, x: number): number {
  return x / data;
}

/**
 * Divide `data` into `x`, i.e., divide `x` by `data`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * divideInto(6, 3);     // 0.5
 * ```
 *
 * @category Math
 */
export function divideInto(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * divideInto(3)(6);     // 0.5
 * ```
 *
 * @category Math
 */
export function divideInto(x: number): (data: number) => number;

export function divideInto(...args: any[]) {
  return purry(_divideInto, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the quotient", () => {
    expect(divideInto(6, 3)).toBe(0.5);
    expect(divideInto(3)(6)).toBe(0.5);
  });
}
