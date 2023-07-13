import { type ReactNode, createContext, useCallback, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { type ToastProps, Toast } from './Toast';

type BaseProps = Omit<ToastProps, 'children' | 'toastKey'>;
export type ToastContextFunctionType = (
  toast: ReactNode,
  props?: BaseProps,
) => void;
type ToastType = {
  props?: Parameters<ToastContextFunctionType>[1];
  toast: Parameters<ToastContextFunctionType>[0];
  uuid: string;
};
export const ToastContext = createContext<ToastContextFunctionType>(
  (toast, props) => {
    //  This function is for the context type definition purpose.
    const defaultFunction = () => ({
      props,
      toast,
    });
    defaultFunction();
  },
);

type Props = {
  children: ReactNode;
};

export const ToastContextProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = useCallback<ToastContextFunctionType>(
    (toast, props) => {
      setToasts(t => [
        ...t,
        {
          props,
          toast,
          uuid: uuidv4(),
        },
      ]);
      // Each toast has a default lifetime of 6 seconds
      setTimeout(() => setToasts(t => t.slice(1)), props?.duration || 6000);
    },
    [setToasts],
  );

  return (
    <AnimatePresence>
      <ToastContext.Provider value={addToast}>
        {children}
        <div className="toast-container">
          <div className="toasts-wrapper">
            <AnimatePresence>
              {toasts.map(({ props, toast, uuid }) => {
                const key = `toast-${toast}-${uuid}`;
                return (
                  <Toast key={key} intent={props?.intent} toastKey={key}>
                    {toast}
                  </Toast>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </ToastContext.Provider>
    </AnimatePresence>
  );
};
