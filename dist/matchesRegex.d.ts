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
export declare function matchesRegex(data: string, regex: RegExp): boolean;
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
export declare function matchesRegex(regex: RegExp): (data: string) => boolean;
