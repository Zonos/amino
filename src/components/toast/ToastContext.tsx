import {
  type ReactNode,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { type ToastProps, Toast } from 'src/components/toast/Toast';
import { RemoveIcon } from 'src/icons/RemoveIcon';

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

  const dismissPersistentToast = (toastId: string) => {
    setPersistentToasts(current => current.filter(t => t.uuid !== toastId));
  };

  const dismissClicked = (e: React.MouseEvent, toastId: string) => {
    e.stopPropagation();
    dismissPersistentToast(toastId);
  };

  const clearAllClicked = () => {
    setPersistentToasts([]);
    setExpandedToasts(false);
  };

  const toggleExpanded = (e: React.MouseEvent | React.KeyboardEvent) => {
    const actionsElement = e.currentTarget.querySelector('.toast-actions');
    if (actionsElement && !actionsElement.contains(e.target as Node)) {
      setExpandedToasts(prev => !prev);
    }
  };

  const firstToastRef = useRef<HTMLDivElement>(null);
  const [firstToastHeight, setFirstToastHeight] = useState(0);

  const firstToast = persistentToasts.find(Boolean);

  useEffect(() => {
    if (firstToastRef.current) {
      setFirstToastHeight(firstToastRef.current.offsetHeight);
    }
  }, [firstToast]); // Only re-measure when first toast changes

  return (
    <ToastContext.Provider value={setupToasts}>
      {children}
      <div
        className={styles.toastContainer}
        style={{
          '--amino-toast-context-bottom': toastLocation.bottom || '40px',
          '--amino-toast-context-left': toastLocation.left || 'auto',
          '--amino-toast-persistent-height':
            persistentToasts.length > 0 && !expandedToasts
              ? `${firstToastHeight + 40}px`
              : 'unset',
        }}
      >
        {/* Non-persistent toasts */}
        <div
          className={clsx(styles.toastsWrapper, styles.regularToastsWrapper)}
        >
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
          )}
        >
          {!!persistentToasts.length && (
            <Button
              className={styles.clearAllButton}
              icon={<RemoveIcon />}
              onClick={clearAllClicked}
              variant="text"
            >
              Clear all
            </Button>
          )}
          <AnimatePresence>
            {persistentToasts.map(({ props, toast, uuid }, index) => {
              const key = `persistent-toast-${toast}-${uuid}`;
              return (
                <div
                  key={key}
                  ref={index === 0 ? firstToastRef : null} // Only ref the first toast
                  className={styles.persistentToast}
                  onClick={toggleExpanded}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleExpanded(e);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <Flex fullWidth>
                    <Toast
                      isPersistent
                      onDismiss={e => {
                        props?.onDismiss?.(e);
                        dismissClicked(e, uuid);
                      }}
                      toastKey={key}
                      {...props}
                    >
                      {index === 0 || expandedToasts ? toast : ''}
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
