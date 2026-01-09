import {
  type AminoTranslationStrings,
  translate as aminoStoreTranslate,
} from 'src/utils/translations/AminoTranslationStore';
import {
  type ExtractVariables,
  handleTranslationVariables,
} from 'src/utils/translations/handleTranslationVariables';

import type { TranslateProps } from './handleTranslateComponentText';

export type { AminoTranslationStrings } from 'src/utils/translations/AminoTranslationStore';

/**
 * Strips the --context: suffix from a translation string type
 */
type StripContext<T extends string> =
  T extends `${infer Base} --context: ${string}` ? Base : T;

export const translate = <T extends AminoTranslationStrings>(
  params: TranslateProps<T>,
): StripContext<T> => {
  const { text, variables } = params;
  const translatedText = aminoStoreTranslate(text);

  return handleTranslationVariables<T>({
    text: translatedText as T,
    variables: variables as Record<ExtractVariables<T>, string | number>,
  }) as StripContext<T>;
};
