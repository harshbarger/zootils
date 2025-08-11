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
export declare function replaceSubstrings(data: string, target: string | RegExp, replacement: string | ((s: string) => string)): string;
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
export declare function replaceSubstrings(target: string | RegExp, replacement: string | ((s: string) => string)): (data: string) => string;
