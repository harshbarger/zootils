import { purry } from "./internals";
import { POJO } from "./types";

function _isKeyOf(data: string, obj: POJO<any>): boolean {
  return obj.hasOwnProperty(data);
}

/**
 * Tells whether the plain object `obj` has its own key named `data`.
 *
 * @param data
 * @param obj
 *
 * @example
 * ```
 * isKeyOf("a", { a: "weasel" });      // true
 * isKeyOf("a", { an: "ostrich" });    // false
 * ```
 *
 * @category Object
 */
export function isKeyOf(data: string, obj: POJO<any>): boolean;

/**
 * @param obj
 *
 * @example
 * ```
 * isKeyOf({ a: "weasel" })("a");      // true
 * ```
 *
 * @category Object
 */
export function isKeyOf(obj: POJO<any>): (data: string) => boolean;
export function isKeyOf(...args: any[]) {
  return purry(_isKeyOf, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("identifies keys and non-keys", () => {
    expect(isKeyOf("a", { a: "weasel" })).toBe(true);
    expect(isKeyOf("a", { an: "ostrich" })).toBe(false);
    expect(isKeyOf({ a: "weasel", an: "ostrich" })("a")).toBe(true);
  });
}
