/**
 * Creates a new array with `length` elements, each filled with `value`.
 *
 * Creates an empty array for invalid `length` (non-integer or negative).
 *
 * @param length
 * @param value
 *
 * @example
 * ```
 * createArrayOf(5, 4);         // [4, 4, 4, 4, 4]
 * ```
 *
 * @category Array
 */
export function createArrayOf<E>(length: number, value: E): E[] {
  return isValid(length) ? [...new Array(length)].fill(value) : [];
}

const isValid = (length: number) =>
  Number.isInteger(length) && length > 0;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("creates arrays of valid length", () => {
    expect(createArrayOf(3, 4)).toEqual([4, 4, 4]);
  });

  it("returns empty array for zero or invalid length", () => {
    expect(createArrayOf(0, 4)).toEqual([]);
    expect(createArrayOf(-1, 4)).toEqual([]);
    expect(createArrayOf(2.5, 4)).toEqual([]);
  });
}
