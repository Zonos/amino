import { create } from 'zustand';

// Import Spanish JSON to get the type definition
import type spanish from './__internal__/strings/spanish.json';
import type { SupportedLanguageCode } from './supportedLanguages';

export type ITranslateText = keyof typeof spanish;

type TranslationCache = Map<SupportedLanguageCode, Record<string, string>>;

export type LoadTranslationsFunction = (
  languageCode: SupportedLanguageCode,
) => Promise<Record<string, string>>;

export type TranslateFunction = (text: ITranslateText) => string;

// Shared translation logic that can be used by both the store and hooks
const getTextTranslation = (
  text: ITranslateText,
  currentLanguage: SupportedLanguageCode,
  translations: TranslationCache,
): string => {
  // English is always the fallback
  if (currentLanguage === 'EN') {
    return text;
  }

  // Get translation from cache
  const languageTranslations = translations.get(currentLanguage);
  return languageTranslations?.[text] || text;
};

type AminoTranslationState = {
  currentLanguage: SupportedLanguageCode;
  isLoading: boolean;
  loadTranslations: LoadTranslationsFunction | null;
  translations: TranslationCache;
};

type AminoTranslationActions = {
  setLanguage: (languageCode: SupportedLanguageCode) => Promise<void>;
  setLoadTranslations: (loadFn: LoadTranslationsFunction) => void;
  translate: (text: ITranslateText) => string;
};

type AminoTranslationStore = AminoTranslationState & AminoTranslationActions;

export const useAminoTranslationStore = create<AminoTranslationStore>(
  (set, get) => ({
    // State
    currentLanguage: 'EN',
    isLoading: false,
    loadTranslations: null,

    // Actions
    setLanguage: async (languageCode: SupportedLanguageCode) => {
      const { loadTranslations, translations } = get();

      // If English or already cached, switch immediately
      if (languageCode === 'EN' || translations.has(languageCode)) {
        set({ currentLanguage: languageCode });
        return;
      }

      // Need to load translations
      if (!loadTranslations) {
        return;
      }

      set({ isLoading: true });

      try {
        const newTranslations = await loadTranslations(languageCode);

        set(state => ({
          currentLanguage: languageCode,
          isLoading: false,
          translations: new Map(state.translations).set(
            languageCode,
            newTranslations,
          ),
        }));
      } catch (error) {
        set({ isLoading: false });
        // eslint-disable-next-line no-console
        console.warn(
          `There was an error loading translations for ${languageCode}:`,
          error,
        );
      }
    },
    setLoadTranslations: (loadFn: LoadTranslationsFunction) => {
      set({ loadTranslations: loadFn });
    },

    translate: (text: ITranslateText) => {
      const { currentLanguage, translations } = get();
      return getTextTranslation(text, currentLanguage, translations);
    },

    translations: new Map(),
  }),
);

// Direct exports for non-React usage (works anywhere!)
export const translate = (text: ITranslateText): string =>
  useAminoTranslationStore.getState().translate(text);

export const setLanguage = (
  languageCode: SupportedLanguageCode,
): Promise<void> =>
  useAminoTranslationStore.getState().setLanguage(languageCode);

export const configureTranslations = (loadFn: LoadTranslationsFunction): void =>
  useAminoTranslationStore.getState().setLoadTranslations(loadFn);

export const getCurrentLanguage = (): SupportedLanguageCode =>
  useAminoTranslationStore.getState().currentLanguage;

export const isTranslationsLoading = (): boolean =>
  useAminoTranslationStore.getState().isLoading;

// Hook exports for React components (reactive)
export const useTranslate = (): TranslateFunction => {
  // Subscribe to both currentLanguage and translations to ensure re-renders
  const currentLanguage = useAminoTranslationStore(
    state => state.currentLanguage,
  );
  const translations = useAminoTranslationStore(state => state.translations);

  return (text: ITranslateText) =>
    getTextTranslation(text, currentLanguage, translations);
};

export const useCurrentLanguage = (): SupportedLanguageCode =>
  useAminoTranslationStore(state => state.currentLanguage);

export const useIsTranslationsLoading = (): boolean =>
  useAminoTranslationStore(state => state.isLoading);
