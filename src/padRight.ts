import { purry } from "./internals";

function _padRight(
  data: string,
  length: number,
  chars: string
): string {
  const spaceToFill = length - data.length;

  if (spaceToFill <= 0 || chars === "" || !Number.isInteger(length)) {
    return data;
  }

  const copiesNeeded = Math.ceil(spaceToFill / chars.length);
  return data + chars.repeat(copiesNeeded).slice(0, spaceToFill);
}

/**
 * If the string `data` is shorter than `length` characters, then adds copies of `chars`
 * to the right of the string until the string `length` is reached. If `chars` is more
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
 * padRight("ostrich", 10, ' ');    "ostrich   ";
 * padRight("ostrich", 5, ' ');     "ostrich";
 * padRight("cat", 10, '123');      "cat1231231";
 * ```
 *
 * @category String
 */
export function padRight(
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
 * padRight(10, ' ')("ostrich");    "ostrich   ";
 * ```
 *
 * @category String
 */
export function padRight(
  length: number,
  chars: string
): (data: string | number) => string;

export function padRight(...args: any[]) {
  return purry(_padRight, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("pads right for valid length and chars", () => {
    expect(padRight("ostrich", 10, " ")).toBe("ostrich   ");
    expect(padRight("ostrich", 5, " ")).toBe("ostrich");
    expect(padRight(10, "123")("cat")).toBe("cat1231231");
    expect(padRight(6, "123")("")).toBe("123123");
    expect(padRight(0, "123")("")).toBe("");
  });

  it("returns the original for invalid length or chars", () => {
    expect(padRight("ostrich", -3, "_")).toBe("ostrich");
    expect(padRight("ostrich", 3.5, "_")).toBe("ostrich");
    expect(padRight("ostrich", 3, "")).toBe("ostrich");
  });
}
