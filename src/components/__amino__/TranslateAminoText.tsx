import type { ReactNode } from 'react';

import { Translate as GenericTranslate } from 'src/components/translations/Translate';
import type { TranslateProps } from 'src/utils/translations/_handleTranslateComponentText';
import type { AminoTranslationStrings } from 'src/utils/translations/AminoTranslationStore';

/**
 * Amino-only Translate component with type safety.
 * This enforces that only AminoTranslationStrings can be used.
 *
 * For consuming projects, use the generic Translate component from '../translations/Translate' (exported from index)
 */
export const TranslateAminoText = <T extends AminoTranslationStrings>(
  props: TranslateProps<T>,
): ReactNode => <GenericTranslate {...(props as TranslateProps<string>)} />;
