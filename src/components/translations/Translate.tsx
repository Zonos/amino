import type { ReactNode } from 'react';

import type { TranslateProps } from 'src/utils/translations/_handleTranslateComponentText';
import { handleTranslateComponentText } from 'src/utils/translations/_handleTranslateComponentText';
import { useTranslate } from 'src/utils/translations/AminoTranslationStore';

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
