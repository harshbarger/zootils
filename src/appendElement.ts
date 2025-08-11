import { purry } from "./internals";

function _appendElement<I extends any[]>(
  data: I,
  value: ElementType<I>
): I {
  return [...data, value] as I;
}

/**
 * Appends the element to the end of the `data` array and returns a copy.
 * For strings, or to append an array to another array, use {@link append}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * appendElement([2, 3, 4], 10);            // [2, 3, 4, 10]
 * ```
 *
 * @category Array
 */
export function appendElement<I extends any[]>(
  data: I,
  value: ElementType<I>
): I;

/**
 * @param value
 *
 * @example
 * ```
 * appendElement(10)([2, 3, 4]);            // [2, 3, 4, 10]
 * ```
 *
 * @category Array
 */
export function appendElement<I extends any[]>(
  value: ElementType<I>
): (data: I) => I;
export function appendElement(...args: any[]) {
  return purry(_appendElement, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("appends an element to the array", () => {
    expect(appendElement([2, 3, 4], 10)).toEqual([2, 3, 4, 10]);
    expect(appendElement(10)([2, 3, 4])).toEqual([2, 3, 4, 10]);
  });
}
