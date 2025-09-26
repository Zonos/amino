import type { ReactNode } from 'react';

import {
  handleTranslateComponentText,
  type TranslateProps,
} from 'src/utils/translations';
import {
  type ITranslateText,
  useTranslate,
} from 'src/utils/translations/AminoTranslationStore';

// This component provides a convenient way to translate text while automatically getting the current locale context,
// and will re-render when translations are loaded or language changes.
export const Translate = <T extends ITranslateText>(
  props: TranslateProps<T>,
): ReactNode => {
  const translate = useTranslate();

  const translatedText = translate(props.text);

  return handleTranslateComponentText({
    translatedTextNoJsx: translatedText,
    variables: props.variables || {},
  });
};
