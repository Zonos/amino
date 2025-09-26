import type { ReactNode } from 'react';

import { AlertContextProvider } from 'src/components/dialog/alert/AlertContext';
import { ConfirmContextProvider } from 'src/components/dialog/confirm/ConfirmContext';
import { ToastContextProvider } from 'src/components/toast/ToastContext';

export type AminoProviderProps = {
  children: ReactNode;
};

/**
 * AMINO PROVIDER: Complete provider setup for amino components
 *
 * This provider combines all necessary amino contexts:
 * - Toast notifications
 * - Alert dialogs
 * - Confirm dialogs
 *
 * Language/Translation is now handled by Zustand store.
 * Use `configureTranslations()` and `setLanguage()` functions instead.
 *
 * @example
 * ```tsx
 * // In consuming project:
 * import { AminoProvider, configureTranslations, setLanguage } from '@zonos/amino';
 *
 * function App() {
 *   // Configure translations once
 *   configureTranslations(myLoadTranslationsFunction);
 *
 *   // Set language anywhere
 *   const handleLanguageChange = (lang) => setLanguage(lang);
 *
 *   return (
 *     <AminoProvider>
 *       <MyApp />
 *     </AminoProvider>
 *   );
 * }
 * ```
 */
export const AminoProvider = ({ children }: AminoProviderProps) => (
  <ToastContextProvider>
    <ConfirmContextProvider>
      <AlertContextProvider>{children}</AlertContextProvider>
    </ConfirmContextProvider>
  </ToastContextProvider>
);
