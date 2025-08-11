/**
 * A thin wrapper around the built-in `String.prototype.toUpperCase` to facilitate
 * use in functional pipelines.
 * @param data
 * @returns
 *
 * @example
 * ```
 * upperCase('SCUBA Diver');     // 'SCUBA DIVER'
 * ```
 *
 * @category String
 */
export declare function upperCase(data: string): string;
