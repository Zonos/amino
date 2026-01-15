import {
  type ExtractVariables,
  handleTranslationVariables,
} from 'src/utils/translations/_handleTranslationVariables';
import {
  getCurrentLanguage,
  useAminoTranslationStore,
} from 'src/utils/translations/AminoTranslationStore';

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
  const { languageCode, text, variables } = params;

  // Use provided languageCode or fall back to current language from store
  const targetLanguage = languageCode || getCurrentLanguage();

  // Get translation from the store
  const translations = useAminoTranslationStore.getState().translations;

  // English is always the fallback
  let translatedText = text;
  if (targetLanguage !== 'EN') {
    const languageTranslations = translations.get(targetLanguage);
    translatedText = (languageTranslations?.[text] || text) as T;
  }

  return handleTranslationVariables<T>({
    text: translatedText as T,
    variables,
  }) as StripContext<T>;
};
