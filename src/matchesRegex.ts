import { purry } from "./internals";

function _matchesRegex(data: string, regex: RegExp): boolean {
  return regex.test(data);
}

/**
 * Returns `true` if the string `data` matches the regular expression `regex`, `false` otherwise.
 *
 * @param data
 * @param regex
 *
 * @example
 * ```
 * matchesRegex('weasels', /easel/);     // true
 * matchesRegex('weasels', /^easel$/);   // false
 * ```
 *
 * @category String
 */
export function matchesRegex(data: string, regex: RegExp): boolean;

/**
 * @param regex
 *
 * @example
 * ```
 * matchesRegex(/easel/)('weasels');     // true
 * matchesRegex(/^easel$/)('weasels');   // false
 * ```
 *
 * @category String
 */
export function matchesRegex(
  regex: RegExp
): (data: string) => boolean;

export function matchesRegex(...args: any[]) {
  return purry(_matchesRegex, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("detects true matches", () => {
    expect(matchesRegex("weasels", /easel/)).toBe(true);
    expect(matchesRegex(/easel/)("weasels")).toBe(true);
  });

  it("rejects false matches", () => {
    expect(matchesRegex("weasels", /^easel$/)).toBe(false);
    expect(matchesRegex(/^easel$/)("weasels")).toBe(false);
  });
}
