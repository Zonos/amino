import { type ReactNode, createContext, useCallback, useState } from 'react';

import { CloseIcon } from '@graphiql/react';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { type ToastProps, Toast } from 'src/components/toast/Toast';

import styles from './ToastContext.module.scss';

type BaseProps = Omit<ToastProps, 'children' | 'toastKey'>;
export type ToastContextFunctionType = (
  toast: ReactNode,
  props?: BaseProps,
  location?: { bottom?: string; left?: string },
) => void;
type ToastType = {
  isPersistent?: boolean;
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
  const [persistentToasts, setPersistentToasts] = useState<ToastType[]>([]);
  const [expandedToasts, setExpandedToasts] = useState(false);

  const [toastLocation, setToastLocation] = useState<{
    bottom: string;
    left: string;
  }>({
    bottom: '',
    left: '',
  });

  const addToast = useCallback<ToastContextFunctionType>(
    (toast, props) => {
      const newToast = {
        isPersistent: props?.isPersistent,
        props,
        toast,
        uuid: uuidv4(),
      };

      if (props?.isPersistent) {
        setPersistentToasts(t => [newToast, ...t]);
      } else {
        setToasts(t => [...t, newToast]);
        // Only set timeout for non-persistent toasts
        setTimeout(() => setToasts(t => t.slice(1)), props?.duration || 6000);
      }
    },
    [setToasts, setPersistentToasts],
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

  const dismissPersistentToast = useCallback((toastId: string) => {
    setPersistentToasts(current => current.filter(t => t.uuid !== toastId));
  }, []);

  const dismissClicked = useCallback(
    (e: React.MouseEvent, toastId: string) => {
      e.stopPropagation();
      dismissPersistentToast(toastId);
    },
    [dismissPersistentToast],
  );

  return (
    <ToastContext.Provider value={setupToasts}>
      {children}
      <div
        className={clsx('toast-container', styles.toastContainer)}
        style={{
          '--amino-toast-context-bottom': toastLocation.bottom || '40px',
          '--amino-toast-context-left': toastLocation.left || 'auto',
          '--amino-toast-persistent-height':
            persistentToasts.length > 0 && !expandedToasts ? '102px' : 'unset',
        }}
      >
        {/* Non-persistent toasts */}
        <div className={clsx(styles.toastsWrapper, 'toasts-wrapper')}>
          <AnimatePresence>
            {toasts.map(({ props, toast, uuid }) => {
              const key = `toast-${toast}-${uuid}`;
              return (
                <Flex key={key}>
                  <Toast
                    direction={props?.direction}
                    intent={props?.intent}
                    toastKey={key}
                  >
                    {toast}
                  </Toast>
                </Flex>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Persistent toasts */}
        <div
          className={clsx(
            styles.toastsWrapper,
            styles.persistentToastsWrapper,
            expandedToasts && styles.expanded,
            'toasts-wrapper',
          )}
        >
          {!!persistentToasts.length && (
            <Button
              className={styles.clearAllButton}
              icon={<CloseIcon />}
              onClick={() => setPersistentToasts([])}
              variant="text"
            >
              Clear all
            </Button>
          )}
          <AnimatePresence>
            {persistentToasts.map(({ props, toast, uuid }) => {
              const key = `persistent-toast-${toast}-${uuid}`;
              return (
                <div
                  key={key}
                  className={styles.persistentToast}
                  onClick={() => setExpandedToasts(!expandedToasts)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setExpandedToasts(!expandedToasts);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <Flex fullWidth>
                    <Toast
                      direction={props?.direction}
                      intent={props?.intent}
                      isPersistent
                      toastKey={key}
                    >
                      <Flex
                        alignItems="center"
                        fullWidth
                        justifyContent="space-between"
                      >
                        <div>{toast}</div>
                        <Button
                          icon={<CloseIcon />}
                          onClick={e => dismissClicked(e, uuid)}
                          variant="plain"
                        />
                      </Flex>
                    </Toast>
                  </Flex>
                </div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
};
