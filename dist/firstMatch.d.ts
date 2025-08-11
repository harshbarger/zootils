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
export declare function firstMatch(data: string, regex: RegExp): string;
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
export declare function firstMatch(regex: RegExp): (data: string) => string | undefined;
