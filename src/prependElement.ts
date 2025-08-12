import { purry } from "./internals";
import { ElementType } from "./types";

function _prependElement<I extends any[]>(
  data: I,
  value: ElementType<I>
): I {
  return [value, ...data] as I;
}

/**
 * Prepends the element to the end of the `data` array and returns a copy.
 * For strings, or to prepend an array to another array, use {@link prepend}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * prependElement([2, 3, 4], 10);            // [10, 2, 3, 4]
 * ```
 *
 * @category Array
 */
export function prependElement<I extends any[]>(
  data: I,
  value: ElementType<I>
): I;

/**
 * @param value
 *
 * @example
 * ```
 * prependElement(10)([2, 3, 4]);            // [10, 2, 3, 4]
 * ```
 *
 * @category Array
 */
export function prependElement<I extends any[]>(
  value: ElementType<I>
): (data: I) => I;
export function prependElement(...args: any[]) {
  return purry(_prependElement, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("prepends the element to an array", () => {
    expect(prependElement([2, 3, 4], 10)).toEqual([10, 2, 3, 4]);
    expect(prependElement(10)([2, 3, 4])).toEqual([10, 2, 3, 4]);
  });
}
