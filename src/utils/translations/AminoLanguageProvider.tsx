import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type { SupportedLanguageCode } from './supportedLanguages';

/**
 * Context for amino components to access the current language
 * This allows consuming projects to set the language for all amino components
 */
const AminoLanguageContext = createContext<SupportedLanguageCode | undefined>(
  undefined,
);

type AminoLanguageProviderProps = {
  children: ReactNode;
  /**
   * Current language code (e.g., 'en', 'es', 'fr')
   * If not provided, amino will fall back to its internal detection
   */
  languageCode?: SupportedLanguageCode;
};

/**
 * AMINO PROVIDER: Allows consuming projects to set the language for amino components
 *
 * This provider should wrap the parts of your app that use amino components.
 * It provides the current language to all amino components within its tree.
 *
 * @example
 * ```tsx
 * // In consuming project:
 * import { AminoLanguageProvider } from '@zonos/amino';
 *
 * function App() {
 *   const [language, setLanguage] = useState('en');
 *
 *   return (
 *     <AminoLanguageProvider languageCode={language}>
 *       <MyApp />
 *     </AminoLanguageProvider>
 *   );
 * }
 * ```
 */
export const AminoLanguageProvider = ({
  children,
  languageCode,
}: AminoLanguageProviderProps) => (
  <AminoLanguageContext.Provider value={languageCode}>
    {children}
  </AminoLanguageContext.Provider>
);

/**
 * AMINO HOOK: Get the current language from amino context
 *
 * This hook allows amino components to access the language set by AminoLanguageProvider.
 * If no provider is found, returns undefined and amino will fall back to its internal detection.
 *
 * @returns The current language code or undefined
 *
 * @example
 * ```tsx
 * // Inside amino component:
 * const MyAminoComponent = () => {
 *   const language = useAminoLanguage();
 *   // language will be whatever was passed to AminoLanguageProvider
 * };
 * ```
 */
export const useAminoLanguage = (): SupportedLanguageCode | undefined =>
  useContext(AminoLanguageContext);
