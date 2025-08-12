import { purry } from "./internals";
import { Accumulator, ElementType } from "./types";

function _reduce<I extends any[], O = ElementType<I>>(
  data: I,
  accumulator: Accumulator<I, O>,
  initial: O
): O {
  let result = initial;
  data.forEach((el) => {
    result = accumulator(result, el);
  });
  return result;
}

/**
 * A data-first counterpart to `Array.prototype.reduce`, but with more permissive typing than
 * the TS library uses out of the box, allowing the result to have a different type from
 * the `data` elements themselves.
 *
 * @remarks
 * The generic type implementation may be needed if `accumulator` has overloads.
 *
 * @param data
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduce<number>([3, 5, 6], add, 0);                 // 14
 * reduce(
 *  ["cat", "ferret", "ostrich"],
 *  (acc: number, el: string) => el.length + acc,
 *  0
 * );                                                 // 16
 * ```
 *
 * @category Array
 */
export function reduce<I extends any[], O = ElementType<I>>(
  data: I,
  accumulator: Accumulator<I, O>,
  initial: O
): O;

/**
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduce(add, 0)([3, 5, 6]);                         // 14
 * ```
 *
 * @category Array
 */
export function reduce<I extends any[], O = ElementType<I>>(
  accumulator: Accumulator<I, O>,
  initial: O
): (data: I) => O;

export function reduce(...args: any[]) {
  return purry(_reduce, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("reduces arrays", () => {
    expect(reduce<number[]>([3, 5, 6], (x, y) => x + y, 0)).toBe(14);
    expect(reduce<number[]>([], (x, y) => x + y, 0)).toBe(0);
    expect(reduce<number[]>((x, y) => x + y, 0)([3, 5, 6])).toBe(14);
    expect(
      reduce(
        ["cat", "ferret", "ostrich"],
        (acc: number, el: string) => el.length + acc,
        0
      )
    ).toBe(16);
  });
}
