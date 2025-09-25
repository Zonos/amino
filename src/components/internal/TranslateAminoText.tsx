import type { ReactNode } from 'react';

import {
  type ITranslateParams,
  type ITranslateText,
  translate,
} from 'src/utils/internal/translateAminoText';
import { useAminoLanguage } from 'src/utils/translations/AminoLanguageProvider';
import {
  type ExtractVariables,
  handleTranslateComponentText,
} from 'src/utils/translations/handleTranslationVariables';
import type { ISupportedLanguageCode } from 'src/utils/translations/supportedLanguages';

/**
 * Require variables argument to be an object with keys that match the variables in the string.
 * If no variables are present, variables argument is optional.
 */
export type ITranslateProps<T extends ITranslateText> = {
  languageCode?: ISupportedLanguageCode;
  text: T;
} & (ExtractVariables<T> extends never
  ? { variables?: never }
  : { variables: Record<ExtractVariables<T>, ReactNode> });

// This component provides a convenient way to translate text while automatically getting the current locale context,
// so you don't need to manually pass the locale to the translate function each time.
export const Translate = <T extends ITranslateText>(
  props: ITranslateProps<T>,
): ReactNode => {
  const contextLanguage = useAminoLanguage();
  const languageToUse = props.languageCode || contextLanguage || 'EN';

  const translatedText = translate({
    ...props,
    languageCode: languageToUse,
  } as ITranslateParams<T>);

  return handleTranslateComponentText({
    translatedTextNoJsx: translatedText,
    variables: props.variables || {},
  });
};
