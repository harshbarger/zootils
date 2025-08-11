import { purry } from "./internals";

function _allProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean {
  return Object.values(data).every(condition);
}

/**
 * Returns true if all values of the `data` object pass the `condition` condition,
 * otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * allProps({ x: 5, y: 10 }, isGt(0));    // true
 * allProps({ x: 5, y: 10 }, isGt(7));    // false
 * ```
 *
 * @category Object
 */
export function allProps<I extends POJO<any>>(
  data: I,
  condition: Predicate<ValueType<I>>
): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * allProps(isGt(0))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export function allProps<I extends POJO<any>>(
  condition: Predicate<ValueType<I>>
): (data: I) => boolean;

export function allProps(...args: any[]) {
  return purry(_allProps, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("returns true when all values pass the condition", () => {
    expect(allProps({ x: 5, y: 10 }, (x) => x > 0)).toBe(true);
  });

  it("returns false when any value fails the condition", () => {
    expect(allProps({ x: 5, y: 10 }, (x) => x > 7)).toBe(false);
  });

  it("returns true for an empty object", () => {
    expect(allProps({}, (x) => x > 0)).toBe(true);
  });
}
