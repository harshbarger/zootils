import { purry } from "./internals";

function _aperture<I extends any[]>(data: I, size: number): I[] {
  if (!Number.isInteger(size) || size > data.length || size < 1) {
    return [];
  }

  return [...Array(data.length - size + 1)].map(
    (_, i) => data.slice(i, i + size) as I
  );
}

/**
 * Returns an array of arrays of length `size` with consecutive elements
 * from the original array. Returns an empty array if `size` is shorter
 * than the array, or is not a positive integer.
 *
 * @param data
 * @param size
 *
 * @example
 * ```
 * aperture([2, 4, 6, 8, 10], 3);     // [[2, 4, 6], [4, 6, 8], [6, 8, 10]]
 * ```
 *
 * @category Array
 */
export function aperture<I extends any[]>(data: I, size: number): I[];

/**
 * @param size
 *
 * @example
 * ```
 * aperture(3)([2, 4, 6, 8, 10]);     // [[2, 4, 6], [4, 6, 8], [6, 8, 10]]
 * ```
 *
 * @category Array
 */
export function aperture<I extends any[]>(
  size: number
): (data: I) => I[];
export function aperture(...args: any[]) {
  return purry(_aperture, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns correct subarrays for a valid size", () => {
    expect(aperture(3)([2, 4, 6, 8, 10, 12, 14])).toEqual([
      [2, 4, 6],
      [4, 6, 8],
      [6, 8, 10],
      [8, 10, 12],
      [10, 12, 14],
    ]);
  });

  it("returns an empty array for invalid sizes", () => {
    expect(aperture([2, 4], 3)).toEqual([]);
    expect(aperture([2, 4], -1)).toEqual([]);
    expect(aperture([2, 4, 6, 8, 10], 3.5)).toEqual([]);
  });
}
