import type { AminoTranslationStrings } from 'src/utils/translations/AminoTranslationStore';
import {
  translate as genericTranslate,
  type TranslateParams,
} from 'src/utils/translations/translate';

/**
 * Strips the --context: suffix from a translation string type
 */
type StripContext<T extends string> =
  T extends `${infer Base} --context: ${string}` ? Base : T;

/**
 * Amino-only translation function with type safety.
 * This enforces that only AminoTranslationStrings can be used.
 *
 * For consuming projects, use the generic translate function from '../translateAminoText' and apply your own generic type.
 */
export const translateAminoText = <T extends AminoTranslationStrings>(
  params: TranslateParams<T>,
): StripContext<T> => genericTranslate(params);
