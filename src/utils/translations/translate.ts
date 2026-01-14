import {
  type ExtractVariables,
  handleTranslationVariables,
} from 'src/utils/translations/_handleTranslationVariables';
import { translate as aminoStoreTranslate } from 'src/utils/translations/AminoTranslationStore';

import type { SupportedLanguageCode } from './supportedLanguages';

export type { AminoTranslationStrings } from 'src/utils/translations/AminoTranslationStore';

/**
 * Strips the --context: suffix from a translation string type
 */
type StripContext<T extends string> =
  T extends `${infer Base} --context: ${string}` ? Base : T;

/**
 * Parameters for the translate function that handles string/number variables
 */
export type TranslateParams<T extends string> = {
  languageCode?: SupportedLanguageCode;
  text: T;
} & (ExtractVariables<T> extends never
  ? { variables?: never }
  : { variables: Record<ExtractVariables<T>, string | number> });

export const translate = <T extends string>(
  params: TranslateParams<T>,
): StripContext<T> => {
  const { text, variables } = params;

  // This will go get the translated text from the amino store
  const translatedText = aminoStoreTranslate(text);

  return handleTranslationVariables<T>({
    text: translatedText as T,
    variables,
  }) as StripContext<T>;
};
