import { z } from 'zod';
import { create } from 'zustand';

import { getStorageItem, setStorageItem } from 'src/utils/storage';

// Import Spanish JSON to get the type definition
import type spanish from './__amino__/strings/spanish.json';
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

export type TranslateFunction = <T extends string>(text: T) => string;

// Shared translation logic that can be used by both the store and hooks
const getTextTranslation = (
  text: string,
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
  translate: (text: string) => string;
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
      // Auto-load translations for the stored language if not English and not already loaded
      const { currentLanguage, translations } = get();
      if (currentLanguage !== 'EN' && !translations.has(currentLanguage)) {
        // Load translations asynchronously without blocking
        void (async () => {
          try {
            const newTranslations = await loadFn(currentLanguage);
            set(state => ({
              translations: new Map(state.translations).set(
                currentLanguage,
                newTranslations,
              ),
            }));
          } catch (error) {
            // eslint-disable-next-line no-console
            console.warn(
              `Failed to auto-load translations for ${currentLanguage}:`,
              error,
            );
          }
        })();
      }
    },

    translate: (text: string) => {
      const { currentLanguage, translations } = get();
      return getTextTranslation(text, currentLanguage, translations);
    },

    translations: new Map(),
  }),
);

/**
 * Translate text (non-reactive). Use in utilities, event handlers, or outside React components.
 * For React components, use `useTranslate` hook instead.
 *
 * @param text - The text to translate (English key)
 * @returns The translated text, or the original text if translation not found
 *
 * @example
 * ```typescript
 * // ✅ In utility functions
 * const validateEmail = (email: string) => {
 *   if (!email) return translate('Email is required');
 * };
 *
 * // ✅ In event handlers
 * const handleSubmit = async () => {
 *   showToast(translate('Saving...'));
 * };
 * ```
 */
export const translate = (text: string): string =>
  useAminoTranslationStore.getState().translate(text);

/**
 * Change the current language and load translations if needed.
 * Automatically saves to localStorage. Components using `useTranslate` will re-render when complete.
 *
 * @param languageCode - The language code to switch to
 * @returns Promise that resolves when language is set (and translations loaded if needed)
 *
 * @example
 * ```typescript
 * const handleLanguageChange = (code: SupportedLanguageCode) => {
 *   void setLanguage(code);
 * };
 *
 * <Button onClick={() => setLanguage('ES')}>Spanish</Button>
 * ```
 */
export const setLanguage = (
  languageCode: SupportedLanguageCode,
): Promise<void> =>
  useAminoTranslationStore.getState().setLanguage(languageCode);

/**
 * Configure the translation loader function. Usually called once at app startup.
 * Use `configureProjectTranslations` instead if you want to merge with Amino translations.
 * Note: Amino automatically configures with internal translations.
 *
 * @param loadFn - Function that loads translations for a given language code
 *
 * @example
 * ```typescript
 * configureTranslations(async (languageCode) => {
 *   return (await import(`./translations/${languageCode}.json`)).default;
 * });
 * ```
 */
export const configureTranslations = (loadFn: LoadTranslationsFunction): void =>
  useAminoTranslationStore.getState().setLoadTranslations(loadFn);

/**
 * Get the current language code (non-reactive). Use outside React components.
 * For React components, use `useCurrentLanguage` hook instead.
 *
 * @returns The current language code
 *
 * @example
 * ```typescript
 * const getLocalizedDateFormat = () => {
 *   const lang = getCurrentLanguage();
 *   return lang === 'EN' ? 'MM/DD/YYYY' : 'DD/MM/YYYY';
 * };
 * ```
 */
export const getCurrentLanguage = (): SupportedLanguageCode =>
  useAminoTranslationStore.getState().currentLanguage;

/**
 * Check if translations are loading (non-reactive). Use outside React components.
 * For React components, use `useIsTranslationsLoading` hook instead.
 *
 * @returns `true` if translations are currently being loaded, `false` otherwise
 *
 * @example
 * ```typescript
 * const showLoadingMessage = () => {
 *   return isTranslationsLoading() ? 'Loading translations...' : '';
 * };
 * ```
 */
export const isTranslationsLoading = (): boolean =>
  useAminoTranslationStore.getState().isLoading;

/**
 * Clear the stored language preference from localStorage.
 * Note: Current language in memory remains unchanged until next page load or `setLanguage` call.
 *
 * @example
 * ```typescript
 * const handleLogout = () => {
 *   clearStoredLanguage();
 * };
 * ```
 */
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

/**
 * React hook to translate text with automatic re-renders when language changes.
 * Use in React component render functions. For event handlers/utilities, use `translate` instead.
 *
 * @returns A translate function that will cause re-renders when language changes
 *
 * @example
 * ```typescript
 * const MyComponent = () => {
 *   const translate = useTranslate();
 *   return (
 *     <div>
 *       <p>{translate('Welcome message')}</p>
 *       <button>{translate('Click me')}</button>
 *     </div>
 *   );
 * };
 * ```
 */
export const useTranslate = (): TranslateFunction => {
  // Subscribe to both currentLanguage and translations to ensure re-renders
  const currentLanguage = useAminoTranslationStore(
    state => state.currentLanguage,
  );
  const translations = useAminoTranslationStore(state => state.translations);

  return <T extends string>(text: T): string =>
    getTextTranslation(text, currentLanguage, translations);
};

/**
 * React hook to get the current language code with automatic re-renders.
 * Use in React component render functions. For utilities/event handlers, use `getCurrentLanguage` instead.
 *
 * @returns The current language code (component will re-render when it changes)
 *
 * @example
 * ```typescript
 * const MyComponent = () => {
 *   const currentLang = useCurrentLanguage();
 *   return (
 *     <div>
 *       {currentLang === 'ES' && <SpanishContent />}
 *       {currentLang === 'FR' && <FrenchContent />}
 *     </div>
 *   );
 * };
 * ```
 */
export const useCurrentLanguage = (): SupportedLanguageCode =>
  useAminoTranslationStore(state => state.currentLanguage);

/**
 * React hook to check if translations are loading.
 * Use in React component render functions. For utilities/event handlers, use `isTranslationsLoading` instead.
 *
 * @returns `true` if translations are currently being loaded, `false` otherwise
 *
 * @example
 * ```typescript
 * const MyComponent = () => {
 *   const isLoading = useIsTranslationsLoading();
 *   if (isLoading) return <Spinner />;
 *   return <TranslatedContent />;
 * };
 * ```
 */
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
        return (await import('./__amino__/strings/chinese.json')).default;
      case 'ES':
        return (await import('./__amino__/strings/spanish.json')).default;
      case 'FR':
        return (await import('./__amino__/strings/french.json')).default;
      case 'DE':
        return (await import('./__amino__/strings/german.json')).default;
      case 'DA':
        return (await import('./__amino__/strings/danish.json')).default;
      case 'NL':
        return (await import('./__amino__/strings/dutch.json')).default;
      case 'ID':
        return (await import('./__amino__/strings/indonesian.json')).default;
      case 'IT':
        return (await import('./__amino__/strings/italian.json')).default;
      case 'JA':
        return (await import('./__amino__/strings/japanese.json')).default;
      case 'KO':
        return (await import('./__amino__/strings/korean.json')).default;
      case 'NO':
        return (await import('./__amino__/strings/norwegian.json')).default;
      case 'PL':
        return (await import('./__amino__/strings/polish.json')).default;
      case 'PT':
        return (await import('./__amino__/strings/portuguese.json')).default;
      case 'RU':
        return (await import('./__amino__/strings/russian.json')).default;
      case 'SV':
        return (await import('./__amino__/strings/swedish.json')).default;
      case 'TH':
        return (await import('./__amino__/strings/thai.json')).default;
      case 'TR':
        return (await import('./__amino__/strings/turkish.json')).default;
      case 'VI':
        return (await import('./__amino__/strings/vietnamese.json')).default;
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
