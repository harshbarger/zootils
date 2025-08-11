import { ensureGlobalFlag, purry } from "./internals";

function _replaceSubstrings(
  data: string,
  target: string | RegExp,
  replacement: string | ((s: string) => string)
): string {
  const globalTarget =
    typeof target === "string" ? target : ensureGlobalFlag(target);
  // @ts-expect-error (TS type doesn't like the type of replacement)
  return data.replaceAll(globalTarget, replacement);
}

/**
 * Replaces all instances of `target` in `data` with either a string `replacement` or a
 * transformed string if `target` is a function. If `target` is aregular expression,
 * the global flag will be added automatically if it isn't already there, since this function
 * always replaces all innstances.
 *
 * @param data
 * @param target
 * @param replacement
 *
 * @example
 * ```
 * replaceAll('ostriches', "s", _);                    // "o_triche_*
 * replaceAll('ostriches', /[aeiou]/, '_');            // "_str_ch_s*
 * replaceAll('ostriches', /[aeiou]/, s => s.toUpperCase);      // "OstrIchEs"
 * ```
 *
 * @category String
 */
export function replaceSubstrings(
  data: string,
  target: string | RegExp,
  replacement: string | ((s: string) => string)
): string;

/**
 * @param target
 * @param replacement
 *
 * @example
 * ```
 * replaceAll("s", _)("ostriches");                    // "o_triche_*
 * ```
 *
 * @category String
 */
export function replaceSubstrings(
  target: string | RegExp,
  replacement: string | ((s: string) => string)
): (data: string) => string;

export function replaceSubstrings(...args: any[]) {
  return purry(_replaceSubstrings, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("replaces using string targets", () => {
    expect(replaceSubstrings("ostriches", "s", "_")).toBe(
      "o_triche_"
    );
    expect(
      replaceSubstrings("ostriches", "s", (s) => s.toUpperCase())
    ).toBe("oStricheS");
    expect(
      replaceSubstrings("s", (s) => s.toUpperCase())("ostriches")
    ).toBe("oStricheS");
  });

  it("replaces using regex targets", () => {
    expect(replaceSubstrings("ostriches", /[aeiou]/, "_")).toBe(
      "_str_ch_s"
    );
    expect(
      replaceSubstrings("ostriches", /[aeiou]/, (s) =>
        s.toUpperCase()
      )
    ).toBe("OstrIchEs");
    expect(
      replaceSubstrings(/[aeiou]/, (s) => s.toUpperCase())(
        "ostriches"
      )
    ).toBe("OstrIchEs");
  });
}
