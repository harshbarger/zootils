/**
 * Creates a new array with `length` elements. Element values are determined
 * by a `transform` of the element index.
 *
 * Creates an empty array for invalid `length` (non-integer or negative).
 *
 * @param length
 * @param transform
 *
 * @example
 * ```
 * createArrayWith(5, i => i ** 2);         // [0, 1, 4, 9, 16]
 * ```
 *
 * @category Array
 */
export function createArrayWith<E>(
  length: number,
  transform: (x: number) => E
): E[] {
  return isValid(length)
    ? [...new Array(length)].map((_, i) => transform(i))
    : [];
}

const isValid = (length: number) =>
  Number.isInteger(length) && length > 0;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("makes array from function", () => {
    expect(createArrayWith(3, (x) => x ** 2)).toEqual([0, 1, 4]);
  });

  it("returns empty array for zero or invalid length", () => {
    expect(createArrayWith(0, (x) => x ** 2)).toEqual([]);
    expect(createArrayWith(2.5, (x) => x ** 2)).toEqual([]);
    expect(createArrayWith(-2, (x) => x ** 2)).toEqual([]);
  });
}
