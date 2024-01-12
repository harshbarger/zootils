import { doTransform } from "./internals";

/**
 * Creates a new array with `length` elements. Element values are determined
 * by a `transform` of the element index.
 *
 * Returns an empty array for invalid lengths (non-integer or negative).
 *
 * @param length
 * @param transform
 *
 * @example
 * ```
 * createArrayWith(4, 5);                  // [5, 5, 5, 5]
 * createArrayWith(5, i => i ** 2);         // [0, 1, 4, 9, 16]
 * ```
 */
export function createArrayWith<E>(
  length: number,
  transform: Transform<number, E>
): E[] {
  return isValid(length)
    ? [...new Array(length)].map((_, i) => doTransform(i, transform))
    : [];
}

const isValid = (length: number) => Number.isInteger(length) && length > 0;
