import { purry } from "./internals";

function _padLeft(
  data: string,
  length: number,
  chars: string
): string {
  const spaceToFill = length - data.length;

  if (spaceToFill <= 0 || chars === "" || !Number.isInteger(length)) {
    return data;
  }

  const copiesNeeded = Math.ceil(spaceToFill / chars.length);
  return chars.repeat(copiesNeeded).slice(0, spaceToFill) + data;
}

/**
 * If the string `data` is shorter than `length` characters, then adds copies of `chars`
 * to the left of the string until the string `length` is reached. If `chars` is more
 * than one character in length, the last copy will be truncated if necessary to reach
 * the exact target `length`.
 *
 * Returns the data unchanged if `length` is not an integer, or if `chars` is an
 * empty string.
 *
 * @param data
 * @param length
 * @param chars
 *
 * @example
 * ```
 * padLeft("ostrich", 10, ' ');    "   ostrich";
 * padLeft("ostrich", 5, ' ');     "ostrich";
 * padLeft("cat", 10, '123');      "1231231cat";
 * ```
 *
 * @category String
 */
export function padLeft(
  data: string | number,
  length: number,
  chars: string
): string;

/**
 * @param length
 * @param chars
 *
 * @example
 * ```
 * padLeft(10, ' ')("ostrich");    "   ostrich";
 * ```
 *
 * @category String
 */
export function padLeft(
  length: number,
  chars: string
): (data: string | number) => string;

export function padLeft(...args: any[]) {
  return purry(_padLeft, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("pads left for valid length and chars", () => {
    expect(padLeft("ostrich", 10, " ")).toBe("   ostrich");
    expect(padLeft("ostrich", 5, " ")).toBe("ostrich");
    expect(padLeft(10, "123")("cat")).toBe("1231231cat");
    expect(padLeft(6, "123")("")).toBe("123123");
    expect(padLeft(0, "123")("")).toBe("");
  });

  it("returns the original for invalid length or chars", () => {
    expect(padLeft("ostrich", -3, "_")).toBe("ostrich");
    expect(padLeft("ostrich", 3.5, "_")).toBe("ostrich");
    expect(padLeft("ostrich", 3, "")).toBe("ostrich");
  });
}
