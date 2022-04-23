import React, { createContext, ReactNode, useState } from 'react';

import { AlertDialogOpts } from '~/src/types';

import { AlertDialog } from './AlertDialog';

export const AlertContext = createContext((opts: AlertDialogOpts) => {
  const defaultFunction = (options: AlertDialogOpts) => {
    return options;
  };
  defaultFunction(opts);
});

type Props = {
  children: ReactNode;
};

export const AlertContextProvider = ({ children }: Props) => {
  const [dialog, setDialog] = useState<AlertDialogOpts | null>();
  const [isOpen, setIsOpen] = useState(false);

  const confirm = (opts: AlertDialogOpts) => {
    setDialog(opts);
    setIsOpen(true);
  };

  return (
    <AlertContext.Provider value={confirm}>
      {children}
      {dialog && (
        <AlertDialog
          open={isOpen}
          label={dialog.label}
          subtitle={dialog.subtitle}
          intent={dialog.intent}
          dismissText={dialog.dismissText}
          dismissAction={() => {
            setIsOpen(false);
            dialog.onDismiss();
          }}
        />
      )}
    </AlertContext.Provider>
  );
};
