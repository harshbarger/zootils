import { purry } from "./internals";
import { POJO } from "./types";

function _pick<I extends POJO<any>, O = Partial<I>>(
  data: I,
  keys: string[]
): O {
  return keys.reduce(
    (acc, key) => ({ ...acc, [key]: data[key] }),
    {}
  ) as O;
}

/**
 * Returns a new object consisting of only the portion of the `data` object with the specified `keys`.
 *
 * @param data
 * @param keys
 *
 * @example
 * ```ts
 * pick({ a: 1, b: 2, c: 3 }, ["a", "b"]);   // { a: 1, b: 2 }
 * ```
 *
 * @category Object
 */
export function pick<I extends POJO<any>, O = Partial<I>>(
  data: I,
  keys: (keyof I)[]
): O;

/**
 * Returns a new object consisting of only the portion of the `data` object with the specified `keys`.
 *
 * @param keys
 *
 * @example
 * ```ts
 * pick(["a", "b"])({ a: 1, b: 2, c: 3 });   // { a: 1, b: 2 }
 * ```
 *
 * @category Object
 */
export function pick<I extends POJO<any>, O = Partial<I>>(
  keys: string[]
): (data: I) => O;
export function pick(...args: any[]) {
  return purry(_pick, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("keeps only specified keys", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "b"])).toEqual({
      a: 1,
      b: 2,
    });

    expect(pick(["a", "b", "d"])({ a: 1, b: 2, c: 3 })).toEqual({
      a: 1,
      b: 2,
    });
  });
}
