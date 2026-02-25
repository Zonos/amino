import {
  createContext,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { Toast, type ToastProps } from 'src/components/toast/Toast';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { cn } from 'src/utils/cn';

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
export const ToastContext = createContext<{
  dismissAllToasts: () => void;
  dismissToast: (toastId: string) => void;
  notify: ToastContextFunctionType;
}>({
  dismissAllToasts: () => {
    // This function is for the context type definition purpose.
  },
  dismissToast: _toastId => {
    // This function is for the context type definition purpose.
  },
  notify: (toast, props) => {
    //  This function is for the context type definition purpose.
    const defaultFunction = () => ({
      props,
      toast,
    });
    defaultFunction();
  },
});

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
        uuid: props?.id || uuidv4(),
      };

      if (props?.isPersistent) {
        setPersistentToasts(t => {
          // Skip if an ID is provided that already exists in either toast list
          if (t.some(existingToast => existingToast.uuid === newToast.uuid)) {
            // Return to the same reference to prevent re-rendering
            return t;
          }
          return [newToast, ...t];
        });
      } else {
        setToasts(t => {
          // Skip if an ID is provided that already exists in either toast list
          if (t.some(existingToast => existingToast.uuid === newToast.uuid)) {
            // Return to the same reference to prevent re-rendering
            return t;
          }
          return [...t, newToast];
        });
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

  const dismissToast = useCallback(
    (toastId: string) => {
      setToasts(current => current.filter(t => t.uuid !== toastId));
      setPersistentToasts(current => current.filter(t => t.uuid !== toastId));
    },
    [setPersistentToasts],
  );

  const dismissClicked = (e: React.MouseEvent, toastId: string) => {
    e.stopPropagation();
    dismissToast(toastId);
  };

  const dismissAllToasts = useCallback(() => {
    setPersistentToasts([]);
    setToasts([]);
    setExpandedToasts(false);
  }, [setPersistentToasts, setToasts, setExpandedToasts]);

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

  const contextValue = useMemo(
    () => ({ dismissAllToasts, dismissToast, notify: setupToasts }),
    [dismissAllToasts, dismissToast, setupToasts],
  );

  const hasPersistentToasts = persistentToasts.length > 0;

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div
        className="fixed z-[9999999] pointer-events-none w-full flex justify-end flex-col"
        style={{
          '--amino-toast-context-bottom': toastLocation.bottom || '40px',
          '--amino-toast-context-left': toastLocation.left || 'auto',
          '--amino-toast-persistent-height':
            hasPersistentToasts && !expandedToasts
              ? `${firstToastHeight + 40}px`
              : 'unset',
          bottom: 'var(--amino-toast-context-bottom)',
          left: 'var(--amino-toast-context-left)',
        }}
      >
        {/* Non-persistent toasts */}
        <div
          className={cn(
            'pointer-events-auto flex flex-col items-center gap-4',
            hasPersistentToasts && 'mb-4',
          )}
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
          className={cn(
            'pointer-events-auto flex flex-col items-center gap-4',
            'z-[1000] max-w-[600px] w-full mx-auto relative max-h-[60vh]',
            'hover:cursor-pointer',
            '[&_.persistentToast]:w-full [&_.persistentToast]:z-[8]',
            '[&_.persistentToast:nth-of-type(1)]:z-[10]',
            '[&_.persistentToast:nth-of-type(2)]:z-[9]',
            !expandedToasts &&
              cn(
                '[&_.persistentToast]:absolute [&_.persistentToast]:scale-50 [&_.persistentToast]:opacity-0',
                '[&_.persistentToast]:brightness-200 [&_.persistentToast]:transition-all [&_.persistentToast]:duration-300',
                '[&_.persistentToast]:ease-[cubic-bezier(0.4,0,0.2,1)] [&_.persistentToast]:origin-bottom',
                '[&_.persistentToast:nth-of-type(1)]:bottom-0 [&_.persistentToast:nth-of-type(1)]:scale-100',
                '[&_.persistentToast:nth-of-type(1)]:opacity-100 [&_.persistentToast:nth-of-type(1)]:brightness-100',
                '[&_.persistentToast:nth-of-type(2)]:-bottom-2 [&_.persistentToast:nth-of-type(2)]:scale-90',
                '[&_.persistentToast:nth-of-type(2)]:opacity-100 [&_.persistentToast:nth-of-type(2)]:brightness-150',
                '[&_.persistentToast:nth-of-type(3)]:scale-80 [&_.persistentToast:nth-of-type(3)]:opacity-80',
                '[&_.persistentToast:nth-of-type(3)]:-bottom-4 [&_.persistentToast:nth-of-type(3)]:brightness-200',
              ),
            expandedToasts && 'relative w-full',
          )}
          style={{
            minHeight:
              hasPersistentToasts && !expandedToasts
                ? `var(--amino-toast-persistent-height)`
                : 'unset',
          }}
        >
          {!!persistentToasts.length && (
            <Button
              className={cn(
                'ml-auto bg-[rgba(0,0,0,0.06)] rounded backdrop-blur-[5px]',
                expandedToasts && '-mb-2',
              )}
              icon={<RemoveIcon />}
              onClick={dismissAllToasts}
              variant="text"
            >
              <Translate text="Clear all --context: button text referencing clearing all toasts" />
            </Button>
          )}
          <AnimatePresence>
            {persistentToasts.map(({ props, toast, uuid }, index) => {
              const key = `persistent-toast-${toast}-${uuid}`;
              const showContent = index === 0 || expandedToasts;
              return (
                <div
                  key={key}
                  ref={index === 0 ? firstToastRef : null} // Only ref the first toast
                  className="persistentToast"
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
                      {...props}
                      actions={showContent ? props?.actions : undefined}
                      isPersistent
                      onDismiss={e => {
                        props?.onDismiss?.(e);
                        dismissClicked(e, uuid);
                      }}
                      toastKey={key}
                    >
                      {showContent ? toast : ''}
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
