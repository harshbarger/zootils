/**
 * Splits the `data` string into an array of substrings based on the `separator`
 * string or regular expression. This is a wrapper around the built-in
 * `String.prototype.split` (but without the `limit` parameter), so it will exhibit
 * the same behavior for capturing groups, empty strings, etc. See the
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) for details.
 *
 * @param data
 * @param separator
 *
 * @example
 * ```
 * split("cat,dog", ",");                    // ['cat', 'dog']
 * split("cat,dog fox4pig", /[^a-z]+/i);      // ['cat', 'dog', 'fox', 'pig']
 * ```
 *
 * @category String
 */
export declare function split(data: string, separator: string | RegExp): string[];
/**
 * @param separator
 *
 * @example
 * ```
 * split(",")("cat,dog");                    // ['cat', 'dog']
 * ```
 *
 * @category String
 */
export declare function split(separator: string | RegExp): (data: string) => string[];
