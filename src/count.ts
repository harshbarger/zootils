import { purry } from "./internals";
import { ElementType } from "./types";

function _count<I extends any[]>(
  data: I,
  value: ElementType<I>
): number {
  return data.reduce(
    (acc, next) => (next === value ? acc + 1 : acc),
    0
  );
}

/**
 * Count the number of elements (strictly) equal to `value` in the array `data`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * count([1, 2, 3, 1, 2], 1); // 2
 * ```
 *
 * @category Array
 */
export function count<I extends any[]>(
  data: I,
  value: ElementType<I>
): number;

/**
 * @param value
 *
 * @example
 * ```
 * count(1)([1, 2, 3, 1, 2]); // 2
 * ```
 *
 * @category Array
 */
export function count<I extends any[]>(
  value: ElementType<I>
): (data: I) => number;
export function count(...args: any[]) {
  return purry(_count, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("counts elements", () => {
    expect(count([1, 2, 3, 1, 2], 1)).toBe(2);
    expect(count(1)([1, 2, 3, 1, 2])).toBe(2);
  });
}
