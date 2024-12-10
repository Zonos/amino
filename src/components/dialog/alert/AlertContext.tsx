import { createContext, type ReactNode, useCallback, useState } from 'react';

import { AlertDialog } from 'src/components/dialog/alert/AlertDialog';
import type { DismissableDialogBaseArgs } from 'src/components/dialog/DismissableDialog';

export type AlertDialogArgs = DismissableDialogBaseArgs & {
  dismissText: string;
  onDismiss: () => void;
};

export const AlertContext = createContext((opts: AlertDialogArgs) => {
  const defaultFunction = (options: AlertDialogArgs) => options;
  defaultFunction(opts);
});

type Props = {
  children: ReactNode;
};

export const AlertContextProvider = ({ children }: Props) => {
  const [dialog, setDialog] = useState<AlertDialogArgs | null>();
  const [isOpen, setIsOpen] = useState(false);

  const confirm = useCallback((opts: AlertDialogArgs) => {
    setDialog(opts);
    setIsOpen(true);
  }, []);

  return (
    <AlertContext.Provider value={confirm}>
      {children}
      {dialog && (
        <AlertDialog
          {...dialog}
          dismissAction={() => {
            setIsOpen(false);
            dialog.onDismiss();
          }}
          open={isOpen}
        />
      )}
    </AlertContext.Provider>
  );
};
