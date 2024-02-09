import { type ReactNode, createContext, useCallback, useState } from 'react';

import { AlertDialog } from 'src/components/dialog/alert/AlertDialog';
import type { AlertDialogOpts } from 'src/types/AlertDialogOpts';

export const AlertContext = createContext((opts: AlertDialogOpts) => {
  const defaultFunction = (options: AlertDialogOpts) => options;
  defaultFunction(opts);
});

type Props = {
  children: ReactNode;
};

export const AlertContextProvider = ({ children }: Props) => {
  const [dialog, setDialog] = useState<AlertDialogOpts | null>();
  const [isOpen, setIsOpen] = useState(false);

  const confirm = useCallback((opts: AlertDialogOpts) => {
    setDialog(opts);
    setIsOpen(true);
  }, []);

  return (
    <AlertContext.Provider value={confirm}>
      {children}
      {dialog && (
        <AlertDialog
          dismissAction={() => {
            setIsOpen(false);
            dialog.onDismiss();
          }}
          dismissText={dialog.dismissText}
          intent={dialog.intent}
          label={dialog.label}
          open={isOpen}
          subtitle={dialog.subtitle}
        />
      )}
    </AlertContext.Provider>
  );
};
