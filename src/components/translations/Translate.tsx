import type { ReactNode } from 'react';

import { handleTranslateComponentText } from 'src/utils/translations/_handleTranslateComponentText';
import { useTranslate } from 'src/utils/translations/AminoTranslationStore';
import type { SupportedLanguageCode } from 'src/utils/translations/supportedLanguages';
import type { ExtractVariables } from 'src/utils/translations/translate';

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

// This component provides a convenient way to translate text while automatically getting the current locale context,
// and will re-render when translations are loaded or language changes.
export const Translate = <T extends string>(
  props: TranslateProps<T>,
): ReactNode => {
  const translate = useTranslate();

  const translatedText = translate(props.text);

  return handleTranslateComponentText({
    translatedTextNoJsx: translatedText,
    variables: props.variables || {},
  });
};
