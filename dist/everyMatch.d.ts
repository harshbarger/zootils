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
export declare function everyMatch(data: string, regex: RegExp): string[];
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
export declare function everyMatch(regex: RegExp): (data: string) => string[];
