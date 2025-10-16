import {
  type AminoTranslationStrings,
  translate as aminoStoreTranslate,
} from 'src/utils/translations/AminoTranslationStore';
import {
  handleTranslationVariables,
  type TranslatedTextWithoutContext,
  type TranslateParams,
} from 'src/utils/translations/handleTranslationVariables';

export const translate = <T extends AminoTranslationStrings>(
  params: TranslateParams<T>,
): TranslatedTextWithoutContext<T> => {
  const { text, variables } = params;
  const translatedText = aminoStoreTranslate(text);

  return handleTranslationVariables({
    text: translatedText as T,
    variables,
  }) as TranslatedTextWithoutContext<T>;
};
