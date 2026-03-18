import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { CheckCircleIcon } from 'src/icons/CheckCircleIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import type { BaseProps } from 'src/types/BaseProps';
import type { Intent } from 'src/types/Intent';
import { cn } from 'src/utils/cn';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

export type ToastProps = BaseProps & {
  actions?: ReactNode;
  children: ReactNode;
  direction?: Direction;
  /** Dismiss delay (default 6000 ms) */
  duration?: number;
  /** Pass a unique identifier for the toast (used for dismissing)
   * @default uuid created in Amino
   */
  id?: string;
  intent?: Extract<Intent, 'success' | 'warning' | 'error' | 'info'>;
  /** If true, toast will be shown in the persistent stack */
  isPersistent?: boolean;
  /** Only used for persistent toasts */
  onDismiss?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  toastKey: string;
};

/**
 * Toast component displays brief notifications or feedback messages to users.
 * It supports different intents (success, warning, error, info) with appropriate styling and icons,
 * and can be configured with actions, animations, and persistence options.
 *
 * @example Basic info toast
 * <Toast toastKey="info-toast">
 *   Information message for the user
 * </Toast>
 *
 * @example Success toast
 * <Toast
 *   intent="success"
 *   toastKey="success-toast"
 * >
 *   Operation completed successfully
 * </Toast>
 *
 * @example Warning toast
 * <Toast
 *   intent="warning"
 *   toastKey="warning-toast"
 * >
 *   Please review your inputs before continuing
 * </Toast>
 *
 * @example Error toast
 * <Toast
 *   intent="error"
 *   toastKey="error-toast"
 * >
 *   An error occurred. Please try again.
 * </Toast>
 *
 * @example With actions
 * <Toast
 *   intent="info"
 *   toastKey="actions-toast"
 *   actions={
 *     <Button variant="plain">Undo</Button>
 *   }
 * >
 *   Changes saved
 * </Toast>
 *
 * @example Persistent toast with dismiss
 * <Toast
 *   intent="warning"
 *   isPersistent={true}
 *   onDismiss={() => setVisible(false)}
 *   toastKey="persistent-toast"
 * >
 *   Your session will expire in 5 minutes
 * </Toast>
 *
 * @example With custom direction
 * <Toast
 *   direction="bottom"
 *   intent="info"
 *   toastKey="direction-toast"
 * >
 *   Toast coming from the bottom
 * </Toast>
 *
 * @example Using the Toast system
 * // Typically used with the Toast system rather than directly:
 * import { useToast } from 'src/components/toast/useToast';
 *
 * const { addToast } = useToast();
 *
 * addToast({
 *   intent: 'success',
 *   message: 'Item created successfully'
 * });
 */
export const Toast = ({
  actions,
  children,
  direction,
  intent,
  isPersistent,
  onDismiss,
  style,
  toastKey,
}: ToastProps) => {
  const getDirection = () => {
    switch (direction) {
      case 'top':
        return {
          opacity: 0,
          translateX: 0,
          translateY: -10,
        };
      case 'bottom':
        return {
          opacity: 0,
          translateX: 0,
          translateY: 10,
        };
      case 'left':
        return {
          opacity: 0,
          translateX: -10,
          translateY: 0,
        };
      case 'right':
      default:
        return {
          opacity: 0,
          translateX: 10,
          translateY: 0,
        };
    }
  };

  const baseProps = {
    animate: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
    exit: getDirection(),
    initial: getDirection(),
  };

  const parseIntent = () => {
    switch (intent) {
      case 'success':
        return {
          class: cn(
            'bg-gray-1000 bg-[image:linear-gradient(90deg,rgba(86,199,111,0.4)_0%,rgba(86,199,111,0)_50%)]',
            '[&_svg]:text-green-500',
            'dark:bg-gray-50 dark:bg-[image:linear-gradient(90deg,rgba(86,199,111,0.24)_0%,rgba(86,199,111,0)_50%)]',
            'dark:[&_svg]:text-green-600',
          ),
          icon: <CheckCircleIcon />,
        };
      case 'error':
        return {
          class: cn(
            'bg-gray-1000 bg-[image:linear-gradient(90deg,rgba(249,92,103,0.4)_0%,rgba(249,92,103,0)_50%)]',
            '[&_svg]:text-red-500',
            'dark:bg-gray-50 dark:bg-[image:linear-gradient(90deg,rgba(249,92,103,0.24)_0%,rgba(249,92,103,0)_50%)]',
            'dark:[&_svg]:text-red-600',
          ),
          icon: <RemoveCircleIcon />,
        };
      case 'warning':
        return {
          class: cn(
            'bg-gray-1000 bg-[image:linear-gradient(90deg,rgba(248,140,83,0.4)_0%,rgba(248,140,83,0)_50%)]',
            '[&_svg]:text-orange-500',
            'dark:bg-gray-50 dark:bg-[image:linear-gradient(90deg,rgba(248,140,83,0.24)_0%,rgba(248,140,83,0)_50%)]',
            'dark:[&_svg]:text-orange-600',
          ),
          icon: <WarningIcon />,
        };
      case 'info':
        return {
          class: cn(
            'bg-gray-1000 bg-[image:linear-gradient(90deg,rgba(95,146,246,0.4)_0%,rgba(95,146,246,0)_50%)]',
            '[&_svg]:text-blue-500',
            'dark:bg-gray-50 dark:bg-[image:linear-gradient(90deg,rgba(95,146,246,0.24)_0%,rgba(95,146,246,0)_50%)]',
            'dark:[&_svg]:text-blue-600',
          ),
          icon: <InfoIcon />,
        };
      default:
        return {
          class: cn(
            'bg-gray-1000 bg-[image:linear-gradient(90deg,rgba(148,150,158,0.4)_0%,rgba(148,150,158,0)_50%)]',
            '[&_svg]:text-gray-500',
            'dark:bg-gray-50 dark:bg-[image:linear-gradient(90deg,rgba(148,150,158,0.24)_0%,rgba(148,150,158,0)_50%)]',
            'dark:[&_svg]:text-gray-600',
          ),
          icon: <InfoIcon />,
        };
    }
  };

  const intentValues = parseIntent();

  return (
    <motion.div
      className={cn(
        `shadow-amino-large z-999999 flex-1 rounded-xl p-4 leading-6 font-medium
        select-none`,
        `bg-gray-1000 text-gray-0
        bg-[linear-gradient(90deg,rgba(148,150,158,0.4)_0%,rgba(148,150,158,0)_50%)]`,
        '[&_svg]:text-gray-500',
        `dark:text-gray-1000 dark:bg-gray-50
        dark:bg-[linear-gradient(90deg,rgba(148,150,158,0.24)_0%,rgba(148,150,158,0)_50%)]`,
        'dark:[&_svg]:text-gray-600',
        intentValues.class,
        isPersistent && 'cursor-pointer select-auto',
      )}
      layout
      style={{
        ...style,
      }}
      {...baseProps}
      key={toastKey}
    >
      <Flex alignItems="flex-start" gap={12} justifyContent="space-between">
        <Flex alignItems="center" className="self-center" gap={12}>
          <div className="self-start">{intentValues.icon}</div>
          <div>{children}</div>
        </Flex>

        <Flex alignItems="center" className="toast-actions" gap={12}>
          {actions}

          {isPersistent && (
            <Button
              className="h-6"
              icon={<RemoveIcon />}
              onClick={e => onDismiss?.(e)}
              variant="plain"
            />
          )}
        </Flex>
      </Flex>
    </motion.div>
  );
};
