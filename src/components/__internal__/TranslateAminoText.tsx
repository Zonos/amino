import type { ReactNode } from 'react';

import {
  type ITranslateText,
  translate,
} from 'src/utils/__internal__/translateAminoText';
import {
  handleTranslateComponentText,
  type TranslateParams,
  type TranslateProps,
  useAminoLanguage,
} from 'src/utils/translations';

// This component provides a convenient way to translate text while automatically getting the current locale context,
// so you don't need to manually pass the locale to the translate function each time.
export const Translate = <T extends ITranslateText>(
  props: TranslateProps<T>,
): ReactNode => {
  const contextLanguage = useAminoLanguage();
  const languageToUse = props.languageCode || contextLanguage || 'EN';

  const translatedText = translate({
    ...props,
    languageCode: languageToUse,
  } as TranslateParams<T>);

  return handleTranslateComponentText({
    translatedTextNoJsx: translatedText,
    variables: props.variables || {},
  });
};
