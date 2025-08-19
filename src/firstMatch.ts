import { ensureNoGlobalFlag, purry } from "./internals";

function _firstMatch(data: string, regex: RegExp): string {
  const withoutGlobal = ensureNoGlobalFlag(regex);
  const match = data.match(withoutGlobal);
  return match ? match[0] : "";
}

/**
 * Returns the first match to `regex` in `data`, or an empty string if no match exists. The global flag will be removed from `regex`
 * automatically if present, since this function is designed to find
 * only the first match. (To return all matches, use {@link everyMatch}
 * instead.)
 *
 * @param data
 * @param regex
 *
 * @example
 * ```
 * firstMatch('weasel', /[aeiou]/);     // 'e'
 * firstMatch('weasel', /[xyz]/);       // ''
 * ```
 *
 * @category String
 */
export function firstMatch(data: string, regex: RegExp): string;

/**
 * @param regex
 *
 * @example
 * ```
 * firstMatch(/[aeiou]/)('weasel');     // 'e'
 * ```
 *
 * @category String
 */
export function firstMatch(regex: RegExp): (data: string) => string;

export function firstMatch(...args: any[]) {
  return purry(_firstMatch, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns the first match if pressent", () => {
    expect(firstMatch("weasel", /[aeiou]/g)).toBe("e");
    expect(firstMatch(/[aeiou]/)("weeasel")).toBe("e");
  });

  it("returns undefined if no match", () => {
    expect(firstMatch("weasel", /[xyz]/)).toBe("");
  });
}
