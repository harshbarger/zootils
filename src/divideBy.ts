import { purry } from "./internals";

function _divideBy(data: number, x: number): number {
  return data / x;
}

/**
 * Divide `data` by `x`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * divideBy(6, 3);     // 2
 * ```
 *
 * @category Math
 */
export function divideBy(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * divideBy(3)(6);     // 2
 * ```
 *
 * @category Math
 */
export function divideBy(x: number): (data: number) => number;

export function divideBy(...args: any[]) {
  return purry(_divideBy, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("divides numbers", () => {
    expect(divideBy(6, 3)).toBe(2);
    expect(divideBy(3)(6)).toBe(2);
  });
}
