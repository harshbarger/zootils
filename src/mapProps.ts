import { purry } from "./internals";
import { POJO, ValueType } from "./types";

function _mapProps<I extends POJO<any>, O extends POJO<any>>(
  data: I,
  transform: (x: ValueType<I>) => ValueType<O>
): O {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      transform(value),
    ])
  ) as O;
}

/**
 * Applies a transform function to each property value in the object.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * mapProps({ a: 1, b: 2, c: 3 }, x => x * 2);   // { a: 2, b: 4, c: 6 }
 * ```
 *
 * @category Object
 */
export function mapProps<I extends POJO<any>, O extends POJO<any>>(
  data: I,
  transform: (x: ValueType<I>) => ValueType<O>
): O;

/**
 * @param transform
 *
 * @example
 * ```
 * mapProps(x => x * 2)({ a: 1, b: 2, c: 3 });   // { a: 2, b: 4, c: 6 }
 * ```
 *
 * @category Object
 */
export function mapProps<I extends POJO<any>, O extends POJO<any>>(
  transform: (x: ValueType<I>) => ValueType<O>
): (data: I) => O;

export function mapProps(...args: any[]) {
  return purry(_mapProps, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("transforms each property value in the object", () => {
    expect(mapProps({ a: 1, b: 2, c: 3 }, (x) => x * 2)).toEqual({
      a: 2,
      b: 4,
      c: 6,
    });
  });
}
