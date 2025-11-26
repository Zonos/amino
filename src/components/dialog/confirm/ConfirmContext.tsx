import { createContext, type ReactNode, useCallback, useState } from 'react';

import { ConfirmDialog } from 'src/components/dialog/confirm/ConfirmDialog';
import type { DismissableDialogBaseArgs } from 'src/components/dialog/DismissableDialog';

type ConfirmDialogArgsBase = DismissableDialogBaseArgs & {
  confirmText: string;
  dismissText: string;
};

/**
 * @deprecated Use ConfirmDialogArgsNewApi instead.
 * Legacy API with single callback that receives a boolean parameter.
 */
type ConfirmDialogArgsLegacy = ConfirmDialogArgsBase & {
  /**
   * @deprecated Use separate onConfirm and onDismiss callbacks instead.
   * Legacy callback that receives a boolean parameter (true for confirm, false for dismiss).
   */
  onConfirm: (confirmed: boolean) => void;
};

/** New API with separate callbacks for confirm and dismiss actions */
type ConfirmDialogArgsNewApi = ConfirmDialogArgsBase & {
  /** Callback when dialog is confirmed */
  onConfirm: () => void;
  /** Callback when dialog is dismissed/cancelled */
  onDismiss: () => void;
};

export type ConfirmDialogArgs =
  | ConfirmDialogArgsLegacy
  | ConfirmDialogArgsNewApi;

const isNewApi = (args: ConfirmDialogArgs): args is ConfirmDialogArgsNewApi =>
  'onDismiss' in args && typeof args.onDismiss === 'function';

export const ConfirmContext = createContext<(opts: ConfirmDialogArgs) => void>(
  () => {
    // Default no-op function for context
  },
);

type ConfirmContextProviderProps = {
  children: ReactNode;
};

export const ConfirmContextProvider = ({
  children,
}: ConfirmContextProviderProps) => {
  const [dialog, setDialog] = useState<ConfirmDialogArgs | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const confirm = useCallback((opts: ConfirmDialogArgs) => {
    setDialog(opts);
    setIsOpen(true);
  }, []);

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {dialog && (
        <ConfirmDialog
          {...dialog}
          confirmAction={() => {
            setIsOpen(false);
            void (isNewApi(dialog)
              ? dialog.onConfirm()
              : dialog.onConfirm(true));
          }}
          dismissAction={() => {
            setIsOpen(false);
            void (isNewApi(dialog)
              ? dialog.onDismiss()
              : dialog.onConfirm(false));
          }}
          open={isOpen}
        />
      )}
    </ConfirmContext.Provider>
  );
};
