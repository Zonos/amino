import { z } from 'zod';
import { create } from 'zustand';

import { getStorageItem, setStorageItem } from 'src/utils/storage';

// Import Spanish JSON to get the type definition
import type spanish from './__internal__/strings/spanish.json';
import {
  type SupportedLanguageCode,
  supportedLanguages,
} from './supportedLanguages';

// Storage configuration
const LANGUAGE_STORAGE_KEY = 'language:local';

const getStoredLanguage = (): SupportedLanguageCode => {
  const stored = getStorageItem({
    key: LANGUAGE_STORAGE_KEY,
    schema: z.enum(
      supportedLanguages.map(lang => lang.code) as [
        SupportedLanguageCode,
        ...SupportedLanguageCode[],
      ],
    ),
    type: 'local',
  });

  return stored || 'EN';
};

const setStoredLanguage = (languageCode: SupportedLanguageCode): void => {
  try {
    setStorageItem({
      key: LANGUAGE_STORAGE_KEY,
      type: 'local',
      value: languageCode,
    });
  } catch {
    // Silently fail if storage is not available
  }
};

export type AminoTranslationStrings = keyof typeof spanish;

type TranslationCache = Map<SupportedLanguageCode, Record<string, string>>;

export type LoadTranslationsFunction = (
  languageCode: SupportedLanguageCode,
) => Promise<Record<string, string>>;

export type TranslateFunction = (text: AminoTranslationStrings) => string;

// Shared translation logic that can be used by both the store and hooks
const getTextTranslation = (
  text: AminoTranslationStrings,
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
  translate: (text: AminoTranslationStrings) => string;
};

type AminoTranslationStore = AminoTranslationState & AminoTranslationActions;

export const useAminoTranslationStore = create<AminoTranslationStore>(
  (set, get) => ({
    // State - initialize from localStorage
    currentLanguage: getStoredLanguage(),
    isLoading: false,
    loadTranslations: null,

    // Actions
    setLanguage: async (languageCode: SupportedLanguageCode) => {
      const { loadTranslations, translations } = get();

      // If English or already cached, switch immediately
      if (languageCode === 'EN' || translations.has(languageCode)) {
        set({ currentLanguage: languageCode });
        setStoredLanguage(languageCode);
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
        setStoredLanguage(languageCode);
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

    translate: (text: AminoTranslationStrings) => {
      const { currentLanguage, translations } = get();
      return getTextTranslation(text, currentLanguage, translations);
    },

    translations: new Map(),
  }),
);

// Direct exports for non-React usage (works anywhere!)
export const translate = (text: AminoTranslationStrings): string =>
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

export const clearStoredLanguage = (): void => {
  try {
    setStorageItem({
      key: LANGUAGE_STORAGE_KEY,
      type: 'local',
      value: null,
    });
  } catch {
    // Silently fail if storage is not available
  }
};

// Hook exports for React components (reactive)
export const useTranslate = (): TranslateFunction => {
  // Subscribe to both currentLanguage and translations to ensure re-renders
  const currentLanguage = useAminoTranslationStore(
    state => state.currentLanguage,
  );
  const translations = useAminoTranslationStore(state => state.translations);

  return (text: AminoTranslationStrings) =>
    getTextTranslation(text, currentLanguage, translations);
};

export const useCurrentLanguage = (): SupportedLanguageCode =>
  useAminoTranslationStore(state => state.currentLanguage);

export const useIsTranslationsLoading = (): boolean =>
  useAminoTranslationStore(state => state.isLoading);

// Internal Amino translations loader (for Amino components only)
const loadInternalAminoTranslations = async (
  languageCode: SupportedLanguageCode,
): Promise<Record<string, string>> => {
  if (languageCode === 'EN') return {};

  try {
    switch (languageCode) {
      case 'ZH_CN':
        return (await import('./__internal__/strings/chinese.json')).default;
      case 'ES':
        return (await import('./__internal__/strings/spanish.json')).default;
      case 'FR':
        return (await import('./__internal__/strings/french.json')).default;
      case 'DE':
        return (await import('./__internal__/strings/german.json')).default;
      case 'DA':
        return (await import('./__internal__/strings/danish.json')).default;
      case 'NL':
        return (await import('./__internal__/strings/dutch.json')).default;
      case 'ID':
        return (await import('./__internal__/strings/indonesian.json')).default;
      case 'IT':
        return (await import('./__internal__/strings/italian.json')).default;
      case 'JA':
        return (await import('./__internal__/strings/japanese.json')).default;
      case 'KO':
        return (await import('./__internal__/strings/korean.json')).default;
      case 'NO':
        return (await import('./__internal__/strings/norwegian.json')).default;
      case 'PL':
        return (await import('./__internal__/strings/polish.json')).default;
      case 'PT':
        return (await import('./__internal__/strings/portuguese.json')).default;
      case 'RU':
        return (await import('./__internal__/strings/russian.json')).default;
      case 'SV':
        return (await import('./__internal__/strings/swedish.json')).default;
      case 'TR':
        return (await import('./__internal__/strings/turkish.json')).default;
      case 'VI':
        return (await import('./__internal__/strings/vietnamese.json')).default;
      default:
        return {};
    }
  } catch {
    // eslint-disable-next-line no-console
    console.warn(`Unable to load translations for ${languageCode}`);
    return {};
  }
};

// Combined loader that merges project translations with Amino translations
const createCombinedLoader =
  (projectLoader?: LoadTranslationsFunction): LoadTranslationsFunction =>
  async (languageCode: SupportedLanguageCode) => {
    // Load both project and Amino translations
    const [projectTranslations, aminoTranslations] = await Promise.all([
      projectLoader ? projectLoader(languageCode) : Promise.resolve({}),
      loadInternalAminoTranslations(languageCode),
    ]);

    // Project translations override Amino translations
    return {
      ...aminoTranslations,
      ...projectTranslations,
    };
  };

// Auto-configure with internal translations only (consuming projects can override)
let isAutoConfigured = false;
if (!isAutoConfigured) {
  configureTranslations(createCombinedLoader());
  isAutoConfigured = true;
}

/**
 * Configure translations with project-specific loader.
 * This will merge project translations with internal Amino translations,
 * with project translations taking precedence.
 *
 * @param projectLoader - Function to load project-specific translations
 * @example
 * ```typescript
 * import { configureProjectTranslations } from '@zonos/amino';
 *
 * const loadMyProjectTranslations = async (languageCode) => {
 *   // Load your project's translations
 *   return await import(`./translations/${languageCode}.json`);
 * };
 *
 * configureProjectTranslations(loadMyProjectTranslations);
 * ```
 */
export const configureProjectTranslations = (
  projectLoader: LoadTranslationsFunction,
): void => {
  configureTranslations(createCombinedLoader(projectLoader));
};
