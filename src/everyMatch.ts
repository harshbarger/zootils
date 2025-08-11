import { ensureGlobalFlag, purry } from "./internals";

function _everyMatch(data: string, regex: RegExp): string[] {
  const withGlobal = ensureGlobalFlag(regex);
  return data.match(withGlobal) ?? [];
}

/**
 * Returns an array containing all matches to `regex` in the string
 * `data`, or an empty array if there are no matches. The global
 * flag will be added automatically if not already present on `regex`,
 * since this function is designed to get all matches. (To return
 * only the first match, use {@link: firstMatch} instead.)
 *
 * @param data
 * @param regex
 *
 * @example
 * ```
 * everyMatch('weasels', /[aeiou]/);      // ['e', 'a', 'e']
 * everyMatch('weasels', /[xyz]/);        // []
 * ```
 *
 * @category String
 */
export function everyMatch(data: string, regex: RegExp): string[];

/**
 * @param regex
 *
 * @example
 * ```
 * everyMatch(/[aeiou]/)('weasels');      // ['e', 'a', 'e']
 * ```
 *
 * @category String
 */
export function everyMatch(regex: RegExp): (data: string) => string[];

export function everyMatch(...args: any[]) {
  return purry(_everyMatch, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns all matches to regex, or empty array if none", () => {
    expect(everyMatch("weasels", /[aeiou]/)).toEqual(["e", "a", "e"]);
    expect(everyMatch(/[aeiou]/)("weasels")).toEqual(["e", "a", "e"]);
    expect(everyMatch(/[xyz]/)("weasels")).toEqual([]);
  });
}
