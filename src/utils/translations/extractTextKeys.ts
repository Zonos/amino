/**
 * AMINO UTILITY: Extracts all possible text keys from a translations object
 *
 * This type utility helps create strongly-typed translation keys based on your translation object.
 *
 * @example
 * ```ts
 * const myTranslations = {
 *   'hello': 'hola',
 *   'goodbye': 'adiós'
 * };
 *
 * type MyTextKeys = ExtractTextKeys<typeof myTranslations>;
 * // MyTextKeys = 'hello' | 'goodbye'
 * ```
 */
export type ExtractTextKeys<TTranslations extends Record<string, string>> =
  keyof TTranslations;
