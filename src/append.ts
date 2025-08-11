import { purry } from "./internals";

function _append<I extends any[] | string>(data: I, value: I): I {
  return (
    Array.isArray(data) ? [...data, ...value] : `${data}${value}`
  ) as I;
}

/**
 * Returns a `data` the `value` array appended. To append an element
 * (rather than another array) to an array instead, use {@link appendElement}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * append([2, 3, 4], [10, 11]);            // [2, 3, 4, 10, 11]
 * append("ostrich", "weasel");            // "ostrichweasel"
 * ```
 *
 * @category Array
 * @category String
 */
export function append<I extends any[] | string>(
  data: I,
  value: I
): I;

/**
 * @param value
 *
 * @example
 * ```
 * append([10, 11])([2, 3, 4]);            // [2, 3, 4, 10, 11]
 * append<string>("weasel")("ostrich")     // "ostrichweasel"
 * ```
 *
 * @category Array
 * @category String
 */
export function append<I extends any[] | string>(
  value: I
): (data: I) => I;
export function append(...args: any[]) {
  return purry(_append, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("appends arrays", () => {
    expect(append([2, 3, 4], [10, 11])).toEqual([2, 3, 4, 10, 11]);
    expect(append([10, 11])([2, 3, 4])).toEqual([2, 3, 4, 10, 11]);
  });

  it("appends strings", () => {
    expect(append("ostrich", "weasel")).toBe("ostrichweasel");
    expect(append<string>("weasel")("ostrich")).toBe("ostrichweasel");
  });
}
