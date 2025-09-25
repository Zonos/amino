import type { ReactNode } from 'react';

import { AlertContextProvider } from 'src/components/dialog/alert/AlertContext';
import { ConfirmContextProvider } from 'src/components/dialog/confirm/ConfirmContext';
import { ToastContextProvider } from 'src/components/toast/ToastContext';
import { AminoLanguageProvider } from 'src/utils/translations/AminoLanguageProvider';
import type { ISupportedLanguageCode } from 'src/utils/translations/supportedLanguages';

export type AminoProviderProps = {
  children: ReactNode;
  /**
   * Current language code for amino components
   * If not provided, amino will fall back to its internal detection
   */
  languageCode?: ISupportedLanguageCode;
};

/**
 * AMINO PROVIDER: Complete provider setup for amino components
 *
 * This provider combines all necessary amino contexts:
 * - Language/Translation support
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
}: AminoProviderProps) => (
  <AminoLanguageProvider languageCode={languageCode}>
    <ToastContextProvider>
      <ConfirmContextProvider>
        <AlertContextProvider>{children}</AlertContextProvider>
      </ConfirmContextProvider>
    </ToastContextProvider>
  </AminoLanguageProvider>
);
