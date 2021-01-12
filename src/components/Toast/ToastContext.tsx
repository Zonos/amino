import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  ReactNode
} from "react";
import { AnimatePresence } from "framer-motion";

import { Toast } from "./Toast";

export const ToastContext = createContext((toast: ReactNode): void => {});

type Props = {
  children: ReactNode;
};

export const ToastContextProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<string[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts(toasts => toasts.slice(1)),
        6000
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
    function(toast) {
      setToasts(toasts => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="toasts-wrapper">
        <AnimatePresence>
          {toasts.map(toast => (
            <Toast toastKey={`toast-${toast}`} key={toast}>
              {toast}
            </Toast>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
