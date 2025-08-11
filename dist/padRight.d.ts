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
export declare function padRight(data: string | number, length: number, chars: string): string;
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
export declare function padRight(length: number, chars: string): (data: string | number) => string;
