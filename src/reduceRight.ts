import { purry } from "./internals";
import { Accumulator, ElementType } from "./types";

function _reduceRight<I extends any[], O = ElementType<I>>(
  data: I,
  accumulator: Accumulator<I, O>,
  initial: O
): O {
  let result = initial;
  for (let i = data.length - 1; i >= 0; i--) {
    result = accumulator(result, data[i]);
  }
  return result;
}

/**
 * A data-frst counterpart to `Array.prototype.reduceRight`, but with more permissive typing than
 * the TS library uses out of the box, allowing the result to have a different type from
 * the `data` elements themselves.
 *
 * @param data
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduceRight(
 *  [3, 5, 6],
 *  (acc: number[], el: number) => acc = [...acc, el + last(acc)],
 *  [0]
 * );                  // [0, 6, 11, 14]
 * ```
 *
 * @category Array
 */
export function reduceRight<I extends any[], O = ElementType<I>>(
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
 * reduceRight(
 *  (acc: number[], el: number) => [...acc, el + last(acc)!],
 *  [0]
 * )([3, 5, 6]);                  // [0, 6, 11, 14]
 * ```
 *
 * @category Array
 */
export function reduceRight<I extends any[], O = ElementType<I>>(
  accumulator: Accumulator<I, O>,
  initial: O
): (data: I) => O;

export function reduceRight(...args: any[]) {
  return purry(_reduceRight, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("reduces arrays from the right", () => {
    expect(
      reduceRight(
        (acc: number[], el: number) => [...acc, el + acc.at(-1)!],
        [0]
      )([3, 5, 6])
    ).toEqual([0, 6, 11, 14]);

    expect(
      reduceRight(
        [3, 5, 6],
        (acc: number[], el: number) => [...acc, el + acc.at(-1)!],
        [0]
      )
    ).toEqual([0, 6, 11, 14]);
  });
}
