import { type ReactNode, createContext, useCallback, useState } from 'react';

import { ConfirmDialog } from 'src/components/confirm-dialog/ConfirmDialog';
import type { ConfirmDialogOpts } from 'src/types/ConfirmDialogOpts';

export const ConfirmContext = createContext((opts: ConfirmDialogOpts) => {
  const defaultFunction = (options: ConfirmDialogOpts) => options;
  defaultFunction(opts);
});

type Props = {
  children: ReactNode;
};

export const ConfirmContextProvider = ({ children }: Props) => {
  const [dialog, setDialog] = useState<ConfirmDialogOpts | null>();
  const [isOpen, setIsOpen] = useState(false);

  const confirm = useCallback((opts: ConfirmDialogOpts) => {
    setDialog(opts);
    setIsOpen(true);
  }, []);

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {dialog && (
        <ConfirmDialog
          confirmAction={() => {
            setIsOpen(false);
            dialog.onConfirm(true);
          }}
          confirmText={dialog.confirmText}
          dismissAction={() => {
            setIsOpen(false);
            dialog.onConfirm(false);
          }}
          dismissText={dialog.dismissText}
          intent={dialog.intent}
          label={dialog.label}
          open={isOpen}
          subtitle={dialog.subtitle}
        />
      )}
    </ConfirmContext.Provider>
  );
};
