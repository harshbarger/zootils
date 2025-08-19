import { purry } from "./internals";
import { POJO } from "./types";

function _hasKey<I extends POJO<any>>(data: I, key: string): boolean {
  return data.hasOwnProperty(key);
}

/**
 * Indicates whether the object `data` contains a given `key`.
 * If a key is directly to `undefined`, the object is still considered to contain the key.
 *
 * Implemented using `hasOwnProperty`.
 *
 * @param data
 * @param key
 *
 * @example
 *
 * ```ts
 * hasKey({ x: 5, z: 10 }, "x");  // true
 * hasKey({ x: 5, z: 10 }, "y");  // false
 * hasKey({ x: 5, z: undefined }, "z");  // true
 * ```
 *
 * @category Object
 */
export function hasKey<I extends POJO<any>>(
  data: I,
  key: string
): boolean;

/**
 * @param key
 *
 * @example
 *
 * ```ts
 * hasKey("x")({ x: 5, z: 10 });  // true
 * ```
 *
 * @category Object
 */
export function hasKey<I extends POJO<any>>(
  key: string
): (data: I) => boolean;

export function hasKey(...args: any[]) {
  return purry(_hasKey, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns true if the object has the key", () => {
    expect(hasKey({ x: 5, z: 10 }, "x")).toBe(true);
    expect(hasKey("x")({ x: 5, z: 10 })).toBe(true);
    expect(hasKey({ x: 5, z: undefined }, "z")).toBe(true);
    expect(hasKey({ x: 5, z: null }, "z")).toBe(true);
  });

  it("returns false if the object does not have the key", () => {
    expect(hasKey({ x: 5, z: 10 }, "y")).toBe(false);
  });

  it("detects keys and non-keys in class instances", () => {
    class C {
      x = 5;
    }
    expect(hasKey(new C(), "x")).toBe(true);
    expect(hasKey(new C(), "y")).toBe(false);
  });
}
