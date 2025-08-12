import { purry } from "./internals";
import { POJO, Predicate, ValueType } from "./types";

function _someProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean {
  return Object.values(data).some(condition);
}

/**
 * Returns true if at least one value of the `data` object passes the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * someProps({ x: 5, y: 10 }, isGt(7));    // true
 * someProps({ x: 5, y: 10 }, isGt(15));    // false
 * ```
 *
 * @category Object
 */
export function someProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * someProps(isGt(7))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export function someProps<I extends POJO<any>>(
  condition: Predicate<ValueType<I>>
): (data: I) => boolean;

export function someProps(...args: any[]) {
  return purry(_someProps, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if at least one value passes the `condition`", () => {
    expect(someProps({ x: 5, y: 10 }, (x) => x > 7)).toBe(true);
  });

  it("returns false if no value passes the `condition`", () => {
    expect(someProps({ x: 5, y: 10 }, (x) => x > 15)).toBe(false);
  });

  it("returns false for an empty object", () => {
    expect(someProps({}, (x) => x > 0)).toBe(false);
  });
}
