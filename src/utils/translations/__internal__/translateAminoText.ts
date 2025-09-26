import {
  handleTranslationVariables,
  type TranslatedTextWithoutContext,
  type TranslateParams,
} from 'src/utils/translations';
import {
  type ITranslateText,
  translate as storeTranslate,
  useAminoTranslationStore,
} from 'src/utils/translations/AminoTranslationStore';
import type { SupportedLanguageCode } from 'src/utils/translations/supportedLanguages';

// Re-export for backward compatibility
export type { ITranslateText };

// Function that gets translation for a specific language and text
export const getTranslationString = (
  text: ITranslateText,
  languageCode?: SupportedLanguageCode,
): string => {
  // If no language specified, use the store's current language
  if (!languageCode) {
    return storeTranslate(text);
  }

  // For English, return the text as-is
  if (languageCode === 'EN') {
    return text;
  }

  // For other languages, we need to get from the store's cache
  const { translations } = useAminoTranslationStore.getState();
  const languageTranslations = translations.get(languageCode);
  return languageTranslations?.[text] || text;
};

// Legacy function for backward compatibility with old TranslateParams pattern
export const translate = <T extends ITranslateText>(
  params: TranslateParams<T>,
): TranslatedTextWithoutContext<T> => {
  const { text, variables } = params;
  const translatedText = storeTranslate(text);

  return handleTranslationVariables({
    text: translatedText as T,
    variables,
  }) as TranslatedTextWithoutContext<T>;
};
