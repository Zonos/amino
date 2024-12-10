import { createContext, type ReactNode, useCallback, useState } from 'react';

import { ConfirmDialog } from 'src/components/dialog/confirm/ConfirmDialog';
import type { DismissableDialogBaseArgs } from 'src/components/dialog/DismissableDialog';

export type ConfirmDialogArgs = DismissableDialogBaseArgs & {
  confirmText: string;
  dismissText: string;
  onConfirm: (ok: boolean) => void;
};

export const ConfirmContext = createContext((opts: ConfirmDialogArgs) => {
  const defaultFunction = (options: ConfirmDialogArgs) => options;
  defaultFunction(opts);
});

type Props = {
  children: ReactNode;
};

export const ConfirmContextProvider = ({ children }: Props) => {
  const [dialog, setDialog] = useState<ConfirmDialogArgs | null>();
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
            dialog.onConfirm(true);
          }}
          dismissAction={() => {
            setIsOpen(false);
            dialog.onConfirm(false);
          }}
          open={isOpen}
        />
      )}
    </ConfirmContext.Provider>
  );
};
