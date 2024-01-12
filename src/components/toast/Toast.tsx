import type { ReactNode } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { CheckCircleIcon } from 'src/icons/CheckCircleIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import type { Intent } from 'src/types';

import styles from './Toast.module.scss';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

export type ToastProps = {
  children: ReactNode;
  direction?: Direction;
  /** Dismiss delay (default 6000 ms) */
  duration?: number;
  intent?: Extract<Intent, 'success' | 'warning' | 'error' | 'info'>;
  toastKey: string;
};

export const Toast = ({
  children,
  direction,
  intent,
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
    key: toastKey,
  };

  const parseIntent = () => {
    switch (intent) {
      case 'success':
        return { class: styles.aminoSuccessToast, icon: <CheckCircleIcon /> };
      case 'error':
        return { class: styles.aminoErrorToast, icon: <RemoveCircleIcon /> };
      case 'warning':
        return { class: styles.aminoWarningToast, icon: <WarningIcon /> };
      case 'info':
        return { class: styles.aminoInfoToast, icon: <InfoIcon /> };
      default:
        return { class: styles.aminoToast, icon: <InfoIcon /> };
    }
  };

  const intentValues = parseIntent();

  return (
    <motion.div
      className={clsx(styles.aminoToast, intentValues.class)}
      layout
      {...baseProps}
    >
      {intentValues.icon}
      {children}
    </motion.div>
  );
};
