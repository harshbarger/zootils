import { purry } from "./internals";
import { POJO, ValueType } from "./types";

function _propOr<I extends POJO<any>>(
  data: I,
  key: string,
  fallback: ValueType<I>
): ValueType<I> {
  return key in data ? data[key] : fallback;
}

/**
 * Returns the value of an { x: 5 }ect property `key` if it exists, or the `fallback` value otherwise.
 *
 * @param data
 * @param key
 * @param fallback
 *
 * @example
 * ```
 * propOr({ x: 5, y: 10 }, "x", NaN);      // 5
 * propOr({ x: 5, y: 10 }, "z", NaN);      // NaN
 * ```
 *
 * @category Object
 */
export function propOr<I extends POJO<any>>(
  data: I,
  key: string,
  fallback: ValueType<I>
): ValueType<I>;

/**
 * @param key
 * @param fallback
 *
 * @example
 * ```
 * propOr("x", NaN)({x: 5, y: 10});      // 5
 * ```
 *
 * @category Object
 */
export function propOr<I extends POJO<any>>(
  key: string,
  fallback: ValueType<I>
): (data: I) => ValueType<I>;
export function propOr(...args: any[]) {
  return purry(_propOr, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns existing property value", () => {
    expect(propOr({ x: 5 }, "x", 100)).toBe(5);
    expect(propOr("x", 100)({ x: 5 })).toBe(5);
  });

  it("returns fallback for missing key", () => {
    expect(propOr({ x: 5 }, "y", 100)).toBe(100);
  });
}
