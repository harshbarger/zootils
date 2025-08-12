import { purry } from "./internals";
import { POJO, Predicate, ValueType } from "./types";

function _notAllProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean {
  return !Object.values(data).every(condition);
}

/**
 * Returns true if at least one value of the `data` object fails the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * notAllProps({ x: 5, y: 10 }, isGt(7));    // true
 * notAllProps({ x: 5, y: 10 }, isGt(0));    // false
 * ```
 *
 * @category Object
 */
export function notAllProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * notAllProps(isGt(7))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export function notAllProps<I extends POJO<any>>(
  condition: Predicate<ValueType<I>>
): (data: I) => boolean;

export function notAllProps(...args: any[]) {
  return purry(_notAllProps, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if any prop fails the condition", () => {
    expect(notAllProps({ x: 5, y: 10 }, (x) => x > 7)).toBe(true);
  });

  it("returns false if all props pass the condition", () => {
    expect(notAllProps({ x: 5, y: 10 }, (x) => x > 0)).toBe(false);
  });
}
