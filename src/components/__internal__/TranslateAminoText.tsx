import type { ReactNode } from 'react';

import {
  type AminoTranslationStrings,
  useTranslate,
} from 'src/utils/translations/AminoTranslationStore';
import type { TranslateProps } from 'src/utils/translations/handleTranslateComponentText';
import { handleTranslateComponentText } from 'src/utils/translations/handleTranslateComponentText';

// This component provides a convenient way to translate text while automatically getting the current locale context,
// and will re-render when translations are loaded or language changes.
export const Translate = <T extends AminoTranslationStrings>(
  props: TranslateProps<T>,
): ReactNode => {
  const translate = useTranslate();

  const translatedText = translate(props.text);

  return handleTranslateComponentText({
    translatedTextNoJsx: translatedText,
    variables: props.variables || {},
  });
};
