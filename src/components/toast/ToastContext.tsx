import { type ReactNode, createContext, useCallback, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { type ToastProps, Toast } from 'src/components/toast/Toast';

import styles from './ToastContext.module.scss';

type BaseProps = Omit<ToastProps, 'children' | 'toastKey'>;
export type ToastContextFunctionType = (
  toast: ReactNode,
  props?: BaseProps,
  location?: { bottom?: string; left?: string },
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
  const [toastLocation, setToastLocation] = useState<{
    bottom: string;
    left: string;
  }>({
    bottom: '',
    left: '',
  });

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

  const setupToasts = useCallback<ToastContextFunctionType>(
    (toast, props, location) => {
      if (location) {
        setToastLocation({
          bottom: location.bottom || '',
          left: location.left || '',
        });
      }
      addToast(toast, props);
    },
    [addToast],
  );

  return (
    <AnimatePresence>
      <ToastContext.Provider value={setupToasts}>
        {children}
        <div
          className="toast-container"
          style={{
            '--amino-toast-context-bottom': toastLocation.bottom || '40px',
            '--amino-toast-context-left': toastLocation.left || '',
          }}
        >
          <div className={clsx(styles.toastsWrapper, 'toasts-wrapper')}>
            <AnimatePresence>
              {toasts.map(({ props, toast, uuid }) => {
                const key = `toast-${toast}-${uuid}`;
                return (
                  <Toast
                    key={key}
                    direction={props?.direction}
                    intent={props?.intent}
                    toastKey={key}
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
