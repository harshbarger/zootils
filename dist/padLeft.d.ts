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
export declare function padLeft(data: string | number, length: number, chars: string): string;
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
export declare function padLeft(length: number, chars: string): (data: string | number) => string;
