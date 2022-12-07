import { createContext, ReactNode, useCallback, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Toast, ToastProps } from './Toast';

type BaseProps = Omit<ToastProps, 'children' | 'toastKey'>;
export type ToastContextFunctionType = (
  toast: ReactNode,
  props?: BaseProps
) => void;
type ToastType = {
  toast: Parameters<ToastContextFunctionType>[0];
  props?: Parameters<ToastContextFunctionType>[1];
  uuid: string;
};
export const ToastContext = createContext<ToastContextFunctionType>(
  (toast, props) => {
    //  This function is for the context type definition purpose.
    const defaultFunction = () => ({
      toast,
      props,
    });
    defaultFunction();
  }
);

type Props = {
  children: ReactNode;
};

export const ToastContextProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = useCallback<ToastContextFunctionType>(
    (toast, props) => {
      setToasts(t =>
        t.concat({
          toast,
          props,
          uuid: uuidv4(),
        })
      );
      // Each toast has a default lifetime of 6 seconds
      setTimeout(() => setToasts(t => t.slice(1)), props?.duration || 6000);
    },
    [setToasts]
  );

  return (
    <AnimatePresence>
      <ToastContext.Provider value={addToast}>
        {children}
        <div className="toast-container">
          <div className="toasts-wrapper">
            <AnimatePresence>
              {toasts.map(({ toast, props, uuid }) => {
                const key = `toast-${toast}-${uuid}`;
                return (
                  <Toast toastKey={key} key={key} intent={props?.intent}>
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
