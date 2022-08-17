import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { AnimatePresence } from 'framer-motion';

import { Toast, ToastProps } from './Toast';

type BaseProps = Omit<ToastProps, 'children' | 'toastKey'>;
type ToastContextFunctionType = (toast: ReactNode, props?: BaseProps) => void;
type ToastType = {
  toast: Parameters<ToastContextFunctionType>[0];
  props?: Parameters<ToastContextFunctionType>[1];
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

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts(t => t.slice(1)), 6000);
      return () => clearTimeout(timer);
    }

    return () => {};
  }, [toasts]);

  const addToast = useCallback<ToastContextFunctionType>(
    (toast, props) => {
      setToasts(t =>
        t.concat({
          toast,
          props,
        })
      );
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
              {toasts.map(({ toast, props }) => {
                return (
                  <Toast
                    toastKey={`toast-${toast}-${Date.now()}`}
                    key={`toast-${toast}-${Date.now()}`}
                    intent={props?.intent}
                  >
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
