import { Fragment, type ReactNode } from 'react';

import { v4 as uuidv4 } from 'uuid';

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
}): string => {
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

export const handleTranslateComponentText = ({
  translatedTextNoJsx,
  variables,
}: {
  translatedTextNoJsx: string;
  variables: Record<string, ReactNode>;
}) => {
  // Collect all ReactNode variables
  const reactNodeVariables = Object.entries(variables || {}).filter(
    ([, value]) => typeof value === 'object' && value,
  );

  if (reactNodeVariables.length === 0) {
    return translatedTextNoJsx;
  }

  // Process all ReactNode variables at once
  let result: ReactNode[] = [translatedTextNoJsx];

  reactNodeVariables.forEach(([key, value]) => {
    const newResult: ReactNode[] = [];
    result.forEach(segment => {
      if (typeof segment === 'string') {
        const parts = segment.split(`[${key}]`);
        parts.forEach((part, index) => {
          if (index > 0) {
            newResult.push(value as ReactNode);
          }
          if (part) {
            newResult.push(part);
          }
        });
      } else {
        newResult.push(segment);
      }
    });
    result = newResult;
  });

  return (
    <>
      {result.map(segment => (
        <Fragment key={uuidv4()}>{segment}</Fragment>
      ))}
    </>
  );
};
