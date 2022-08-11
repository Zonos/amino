import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { AnimatePresence } from 'framer-motion';

import { Toast, ToastProps } from './Toast';

export const ToastContext = createContext((toast: ReactNode): void => {
  const defaultFunction = (options: ReactNode) => options;
  defaultFunction(toast);
});

export const ToastContextProvider = ({ children, intent }: ToastProps) => {
  const [toasts, setToasts] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts(t => t.slice(1)), 6000);
      return () => clearTimeout(timer);
    }

    return () => {};
  }, [toasts]);

  const addToast = useCallback(
    (toast: ReactNode) => {
      setToasts(t => t.concat(toast));
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
              {toasts.map(toast => (
                <Toast
                  toastKey={`toast-${toast}`}
                  key={`toast-${toast}`}
                  intent={intent}
                >
                  {toast}
                </Toast>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </ToastContext.Provider>
    </AnimatePresence>
  );
};
