import { purry } from "./internals";
import { POJO, Predicate, ValueType } from "./types";

function _noProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean {
  return !Object.values(data).some(condition);
}

/**
 * Returns true if no value of the `data` object passes the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * noProps({ x: 5, y: 10 }, x => x > 15);    // true
 * noProps({ x: 5, y: 10 }, isGt(7));    // false
 * ```
 *
 * @category Object
 */
export function noProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * noProps(x => x > 15)({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export function noProps<I extends POJO<any>>(
  condition: Predicate<ValueType<I>>
): (data: I) => boolean;

export function noProps(...args: any[]) {
  return purry(_noProps, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if no values pass the condition", () => {
    expect(noProps({ x: 5, y: 10 }, (x) => x > 15)).toBe(true);
    expect(noProps((x) => x > 15)({ x: 5, y: 10 })).toBe(true);
  });

  it("returns false if at least one value passes the condition", () => {
    expect(noProps({ x: 5, y: 10 }, (x) => x > 7)).toBe(false);
  });
}
