// AMINO Translation Utilities
// These utilities can be used by consuming projects to build their own translation systems

export { AminoProvider, type AminoProviderProps } from '../AminoProvider';
export {
  AminoLanguageProvider,
  useAminoLanguage,
} from './AminoLanguageProvider';
export {
  handleTranslateComponentText,
  type TranslateProps,
} from './handleTranslateComponentText';
export {
  type ExtractVariables,
  handleTranslationVariables,
  type TranslatedTextWithoutContext,
  type TranslateParams,
} from './handleTranslationVariables';
export {
  type SupportedLanguageCode,
  supportedLanguages,
} from './supportedLanguages';
