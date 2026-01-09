import { type ReactNode, useEffect } from 'react';

import { AlertContextProvider } from 'src/components/dialog/alert/AlertContext';
import { ConfirmContextProvider } from 'src/components/dialog/confirm/ConfirmContext';
import { ToastContextProvider } from 'src/components/toast/ToastContext';
import { setLanguage } from 'src/utils/translations/AminoTranslationStore';
import type { SupportedLanguageCode } from 'src/utils/translations/supportedLanguages';

export type AminoProviderProps = {
  children: ReactNode;
  /**
   * Current language code for amino components
   * If not provided, amino will fall back to its internal detection
   */
  languageCode?: SupportedLanguageCode;
};

/**
 * AMINO PROVIDER: Complete provider setup for amino components
 *
 * This provider combines all necessary amino contexts:
 * - Language/Translation support (synced to Zustand store)
 * - Toast notifications
 * - Alert dialogs
 * - Confirm dialogs
 *
 * @example
 * ```tsx
 * // In consuming project:
 * import { AminoProvider } from '@zonos/amino';
 *
 * function App() {
 *   const [language, setLanguage] = useState('EN');
 *
 *   return (
 *     <AminoProvider languageCode={language}>
 *       <MyApp />
 *     </AminoProvider>
 *   );
 * }
 * ```
 */
export const AminoProvider = ({
  children,
  languageCode,
}: AminoProviderProps) => {
  useEffect(() => {
    if (languageCode) {
      void setLanguage(languageCode);
    }
  }, [languageCode]);

  return (
    <ToastContextProvider>
      <ConfirmContextProvider>
        <AlertContextProvider>{children}</AlertContextProvider>
      </ConfirmContextProvider>
    </ToastContextProvider>
  );
};
