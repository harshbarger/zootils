import { purry } from "./internals";

function _prepend<I extends any[] | string>(data: I, value: I): I {
  return (
    Array.isArray(data) ? [...value, ...data] : `${value}${data}`
  ) as I;
}

/**
 * Returns a `data` the `value` array prepended. To prepend an element
 * (rather than another array) to an array instead, use {@link prependElement}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * prepend([2, 3, 4], [10, 11]);            // [10, 11, 2, 3, 4]
 * prepend("ostrich", "weasel");            // "weaselostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export function prepend<I extends any[] | string>(
  data: I,
  value: I
): I;

/**
 * @param value
 *
 * @example
 * ```
 * prepend([10, 11])([2, 3, 4]);            // [10, 11, 2, 3, 4]
 * prepend<string>("weasel")("ostrich")     // "weaselostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export function prepend<I extends any[] | string>(
  value: I
): (data: I) => I;

export function prepend(...args: any[]) {
  return purry(_prepend, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("prepends arrays", () => {
    expect(prepend([2, 3, 4], [10, 11])).toEqual([10, 11, 2, 3, 4]);
    expect(prepend([10, 11])([2, 3, 4])).toEqual([10, 11, 2, 3, 4]);
  });

  it("prepends strings", () => {
    expect(prepend("ostrich", "weasel")).toBe("weaselostrich");
    expect(prepend<string>("weasel")("ostrich")).toBe(
      "weaselostrich"
    );
  });
}
