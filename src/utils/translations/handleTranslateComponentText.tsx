import { Fragment, type ReactNode } from 'react';

import { v4 as uuidv4 } from 'uuid';

import type { ExtractVariables } from './handleTranslationVariables';
import type { SupportedLanguageCode } from './supportedLanguages';

/**
 * Require variables argument to be an object with keys that match the variables in the string.
 * If no variables are present, variables argument is optional.
 */
export type TranslateProps<T extends string> = {
  languageCode?: SupportedLanguageCode;
  text: T;
} & (ExtractVariables<T> extends never
  ? { variables?: never }
  : { variables: Record<ExtractVariables<T>, ReactNode> });

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
