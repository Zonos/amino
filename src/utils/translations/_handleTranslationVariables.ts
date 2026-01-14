/**
 * Extracts variables pattern "[pattern]" from a string
 * @example
 * type Variables = ExtractVariables<'[percentage] GST due on any order above [threshold].'>
 * // Variables = 'percentage' | 'threshold'
 */
export type ExtractVariables<TString extends string> =
  TString extends `${string}[${infer Var}]${infer End}`
    ? Var | ExtractVariables<End>
    : never;

/**
 * AMINO UTILITY: Handles variable interpolation in translated text
 *
 * This utility processes curly braces and square bracket variables in text:
 * - Removes curly braces but keeps content: "{John}" becomes "John"
 * - Replaces square bracket variables: "[count]" becomes the actual value
 *
 * @param text - The text to process
 * @param variables - Object with variable names as keys and their values
 * @returns The processed text with variables interpolated
 *
 * @example
 * ```ts
 * handleTranslationVariables({
 *   text: '{John} has [count] apples',
 *   variables: { count: 5 }
 * })
 * // Returns: "John has 5 apples"
 * ```
 */
export const handleTranslationVariables = <T extends string>({
  text,
  variables,
}: {
  text: T;
  variables?: Record<ExtractVariables<T>, string | number>;
}): T => {
  // Handle curly braces first - remove them but keep the content
  let processedText = text.replace(/\{([^}]+)\}/g, '$1');

  processedText = processedText.includes(' --context:')
    ? processedText.split(' --context:')[0] || processedText
    : processedText;

  // Handle square bracket variables
  if (variables) {
    Object.entries(variables).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number') {
        processedText = processedText.replace(
          new RegExp(`\\[${key}\\]`, 'g'),
          String(value),
        );
      }
    });
  }

  return processedText as T;
};
