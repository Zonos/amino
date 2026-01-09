import type { ReactNode } from 'react';

import { handleTranslateComponentText } from 'src/utils/translations/handleTranslateComponentText';
import type { ExtractVariables } from 'src/utils/translations/handleTranslationVariables';
import type { SupportedLanguageCode } from 'src/utils/translations/supportedLanguages';
import {
  type AminoTranslationStrings,
  translate,
} from 'src/utils/translations/translateAminoText';

/**
 * Require variables argument to be an object with keys that match the variables in the string.
 * If no variables are present, variables argument is optional.
 */
export type ITranslateProps<T extends AminoTranslationStrings> = {
  languageCode?: SupportedLanguageCode;
  text: T;
} & (ExtractVariables<T> extends never
  ? { variables?: never }
  : { variables: Record<ExtractVariables<T>, ReactNode> });

// This component provides a convenient way to translate text while automatically getting the current locale context,
// so you don't need to manually pass the locale to the translate function each time.
export const Translate = <T extends AminoTranslationStrings>(
  props: ITranslateProps<T>,
): ReactNode => {
  const translatedText = translate({
    ...props,
    languageCode: props.languageCode,
  });

  return handleTranslateComponentText({
    translatedTextNoJsx: translatedText,
    variables: props.variables || {},
  });
};
