// AMINO Translation Utilities
// These utilities can be used by consuming projects to build their own translation systems

export { AminoProvider, type AminoProviderProps } from '../AminoProvider';

// New Zustand-based translation system
export {
  // Direct exports for utility functions (no hooks required)
  configureTranslations,
  getCurrentLanguage,
  isTranslationsLoading,
  type ITranslateText,
  type LoadTranslationsFunction,
  setLanguage,
  translate,
  type TranslateFunction,
  // Store and types
  useAminoTranslationStore,
  // Hook exports for React components (reactive)
  useCurrentLanguage,
  useIsTranslationsLoading,
  useTranslate,
} from './AminoTranslationStore';

// Legacy compatibility exports (redirects to new system)
export { getTranslationString } from './__internal__/translateAminoText';
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
