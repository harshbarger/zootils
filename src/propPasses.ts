import { purry } from "./internals";

function _propPasses<I extends POJO<any>>(
  data: I,
  key: string,
  condition: Predicate<ValueType<I>>
): boolean {
  return key in data && condition(data[key]);
}

/**
 * Returns true if an object property `key` exists and passes the `condition`, false otherwise.
 * @param data
 * @param key
 * @param condition
 *
 * @example
 * ```
 * propPasses({ x: 5 }, "x", x => x > 0);    // true
 * propPasses({ x: 5 }, "x", x => x < 0);    // false
 * ```
 *
 * @category Object
 */
export function propPasses<I extends POJO<any>>(
  data: I,
  key: string,
  condition: Predicate<ValueType<I>>
): boolean;

/**
 * @param key
 * @param condition
 *
 * @example
 * ```
 * propPasses("x", x => x > 0)({ x: 5 });    // true
 * ```
 *
 * @category Object
 */
export function propPasses<I extends POJO<any>>(
  key: string,
  condition: Predicate<ValueType<I>>
): (data: I) => boolean;

export function propPasses(...args: any[]) {
  return purry(_propPasses, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("indicates if existing prop passes the condition", () => {
    expect(propPasses({ x: 5 }, "x", (x) => x > 0)).toBe(true);
    expect(propPasses("x", (x: number) => x < 0)({ x: 5 })).toBe(
      false
    );
  });

  it("returns false if prop doesn't exist", () => {
    expect(propPasses({ x: 5 }, "y", (x) => x > 0)).toBe(false);
  });
}
