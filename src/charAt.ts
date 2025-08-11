import { getAdjustedIndex, purry } from "./internals";

function _charAt(data: string, index: number): string {
  const adjIndex = getAdjustedIndex(data, index, "onlyInBounds");
  return isNaN(adjIndex) ? "" : data[adjIndex];
}

/**
 * Returns the element of `data` at `index`, or an empty string if `index` is out of bounds
 * or otherwise invalid.
 *
 * @param data
 * @param index  counts backward from end of array if negative, must be integer
 *
 * @example
 * ```
 * charAt("ostrich", 2);       // "t"
 * charAt("ostrich", -2);      // "c"
 * charAt("ostrich", 10);      // ""
 * ```
 *
 * @category String
 */
export function charAt(data: string, index: number): string;

/**
 * @param index
 *
 * @example
 * ```
 * charAt(2)("ostrich");       // "t"
 * ```
 * @category String
 */
export function charAt(index: number): (data: string) => string;
export function charAt(...args: any[]) {
  return purry(_charAt, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the correct character for valid indices", () => {
    expect(charAt("ostrich", 2)).toBe("t");
    expect(charAt("ostrich", -2)).toBe("c");
    expect(charAt(-7)("ostrich")).toBe("o");
  });

  it("returns empty string for out of bounds or invalid indices", () => {
    expect(charAt("ostrich", 8)).toBe("");
    expect(charAt("ostrich", -8)).toBe("");
    expect(charAt("ostrich", 1.5)).toBe("");
  });
}
