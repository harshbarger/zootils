import { purry } from "./internals";
import { POJO } from "./types";

function _omitKeys<I extends POJO<any>, O extends Partial<I>>(
  data: I,
  keys: string[]
): O {
  return Object.keys(data).reduce((acc, key) => {
    if (!keys.includes(key)) {
      acc[key as keyof I] = data[key];
    }
    return acc;
  }, {} as O);
}

/*
 * Returns a new object that omits specified keys. If some elements
 * of `keys` are not present in `data`, they are ignored.
 *
 * @param data
 * @param keys
 *
 * @example
 * ```ts
 * omitKeys({ a: 1, b: 2, c: 3 }, ["a", "b"]);   // { c: 3 }
 * ```
 *
 * @category Object
 */

export function omitKeys<I extends POJO<any>, O extends Partial<I>>(
  data: I,
  keys: string[]
): O;

/**
 * @param keys
 *
 * @example
 * ```ts
 * omitKeys(["a", "b"])({ a: 1, b: 2, c: 3 });   // { c: 3 }
 * ```
 *
 * @category Object
 */
export function omitKeys<I extends POJO<any>, O extends Partial<I>>(
  keys: string[]
): (data: I) => O;

export function omitKeys(...args: any[]) {
  return purry(_omitKeys, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns a new object that omits specified keys", () => {
    expect(omitKeys({ a: 1, b: 2, c: 3 }, ["a", "b"])).toEqual({
      c: 3,
    });
    expect(omitKeys(["a", "b", "d"])({ a: 1, b: 2, c: 3 })).toEqual({
      c: 3,
    });
  });
}
