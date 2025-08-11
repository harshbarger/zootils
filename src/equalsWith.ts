import { purry } from "../src/internals";

function _equalsWith<I>(
  data: I,
  value: I,
  transform: (x: I) => any
): boolean {
  return transform(data) === transform(value);
}

/**
 * Tells whether `data` and `value` are strictly equal after the `transform`
 * function is applied to each.
 *
 * @param data
 * @param value
 * @param transform
 *
 * @example
 * ```
 * equalsWith(4, -4, Math.abs);      // true
 * ```
 *
 * @category Logic
 */
export function equalsWith<I>(
  data: I,
  value: I,
  transform: (x: I) => any
): boolean;

/**
 * @remarks The generic type specification is needed so TS doesn't infer the
 * type as a specific constant.
 *
 * @param value
 * @param transform
 *
 * @example
 * ```
 * equalsWith<number>(-4, Math.abs)(4);     // true
 * ```
 *
 * @category Logic
 */
export function equalsWith<I>(
  value: I,
  transform: (x: I) => any
): (data: I) => boolean;

export function equalsWith(...args: any[]) {
  return purry(_equalsWith, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("determines equality based on result of transform", () => {
    expect(equalsWith(4, -4, Math.abs)).toBe(true);
    expect(equalsWith(4, 3, Math.abs)).toBe(false);
    expect(equalsWith<number>(-4, Math.abs)(4)).toBe(true);
  });
}
