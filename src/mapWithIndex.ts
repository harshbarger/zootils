import { purry } from "./internals";

function _mapWithIndex<I extends any[], O extends any[] = I>(
  data: I,
  transform: (x: ElementType<I>, i: number) => O[number]
): O {
  return data.map(transform) as O;
}

/**
 * Similar to {@link map} (which is in turn similar to `Array.prototype.map`),
 * but the `transform` function requires an index as the second parameter.
 * Use {@link map} instead if you do not need the index.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * mapWithIndex([2, 3, 4], (x, i) => x + i);        [2, 4, 6];
 * ```
 *
 * @category Array
 */
export function mapWithIndex<I extends any[], O extends any[] = I>(
  data: I,
  transform: (x: ElementType<I>, i: number) => O[number]
): O;

/**
 * @param transform
 *
 * @example
 * ```
 * mapWithIndex((x, i) => x + i)([2, 3, 4]);        [2, 4, 6];
 * ```
 *
 * @category Array
 */
export function mapWithIndex<I extends any[], O extends any[] = I>(
  transform: (x: ElementType<I>, i: number) => O[number]
): (data: I) => O;

export function mapWithIndex(...args: any[]) {
  return purry(_mapWithIndex, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("maps using the index", () => {
    expect(mapWithIndex([2, 3, 4], (x, i) => x + i)).toEqual([
      2, 4, 6,
    ]);
    expect(mapWithIndex((x, i) => x + i)([2, 3, 4])).toEqual([
      2, 4, 6,
    ]);
  });
}
