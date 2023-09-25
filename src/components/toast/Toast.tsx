import type { ReactNode } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { CheckCircleIcon } from 'src/icons/CheckCircleIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import { theme } from 'src/styles/constants/theme';
import type { Intent } from 'src/types';

const AminoToast = styled(motion.div)`
  background: linear-gradient(
      90deg,
      rgba(148, 150, 158, 0.4) 0%,
      rgba(148, 150, 158, 0) 50%
    ),
    ${theme.gray1200};
  z-index: 999999;
  border-radius: ${theme.radius12};
  color: ${theme.gray0};
  box-shadow: ${theme.v3ShadowLarge};
  padding: ${theme.space16};
  display: flex;
  align-items: center;
  gap: ${theme.space12};
  font-weight: 500;
  user-select: none;

  & + & {
    margin-top: ${theme.space24};
  }

  & svg {
    color: ${theme.gray500};
  }

  [data-theme='night'] & {
    background: linear-gradient(
        90deg,
        rgba(148, 150, 158, 0.24) 0%,
        rgba(148, 150, 158, 0) 50%
      ),
      ${theme.gray50};
    color: ${theme.gray1200};

    & svg {
      color: ${theme.gray600};
    }
  }
`;

const AminoSuccessToast = styled(AminoToast)`
  background: linear-gradient(
      90deg,
      rgba(86, 199, 111, 0.4) 0%,
      rgba(86, 199, 111, 0) 50%
    ),
    ${theme.gray1200};

  & svg {
    color: ${theme.green500};
  }

  [data-theme='night'] & {
    background: linear-gradient(
        90deg,
        rgba(86, 199, 111, 0.24) 0%,
        rgba(86, 199, 111, 0) 50%
      ),
      ${theme.gray50};

    & svg {
      color: ${theme.green600};
    }
  }
`;

const AminoErrorToast = styled(AminoToast)`
  background: linear-gradient(
      90deg,
      rgba(249, 92, 103, 0.4) 0%,
      rgba(249, 92, 103, 0) 50%
    ),
    ${theme.gray1200};

  & svg {
    color: ${theme.red500};
  }

  [data-theme='night'] & {
    background: linear-gradient(
        90deg,
        rgba(249, 92, 103, 0.24) 0%,
        rgba(249, 92, 103, 0) 50%
      ),
      ${theme.gray50};

    & svg {
      color: ${theme.red600};
    }
  }
`;

const AminoWarningToast = styled(AminoToast)`
  background: linear-gradient(
      90deg,
      rgba(248, 140, 83, 0.4) 0%,
      rgba(248, 140, 83, 0) 50%
    ),
    ${theme.gray1200};

  & svg {
    color: ${theme.orange500};
  }

  [data-theme='night'] & {
    background: linear-gradient(
        90deg,
        rgba(248, 140, 83, 0.24) 0%,
        rgba(248, 140, 83, 0) 50%
      ),
      ${theme.gray50};

    & svg {
      color: ${theme.orange600};
    }
  }
`;

const AminoInfoToast = styled(AminoToast)`
  background: linear-gradient(
      90deg,
      rgba(95, 146, 246, 0.4) 0%,
      rgba(95, 146, 246, 0) 50%
    ),
    ${theme.gray1200};

  & svg {
    color: ${theme.blue500};
  }

  [data-theme='night'] & {
    background: linear-gradient(
        90deg,
        rgba(95, 146, 246, 0.24) 0%,
        rgba(95, 146, 246, 0) 50%
      ),
      ${theme.gray50};

    & svg {
      color: ${theme.blue600};
    }
  }
`;

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

  switch (intent) {
    case 'success':
      return (
        <AminoSuccessToast layout {...baseProps}>
          <CheckCircleIcon />
          {children}
        </AminoSuccessToast>
      );
    case 'error':
      return (
        <AminoErrorToast layout {...baseProps}>
          <RemoveCircleIcon />
          {children}
        </AminoErrorToast>
      );
    case 'warning':
      return (
        <AminoWarningToast layout {...baseProps}>
          <WarningIcon />
          {children}
        </AminoWarningToast>
      );

    case 'info':
      return (
        <AminoInfoToast layout {...baseProps}>
          <InfoIcon />
          {children}
        </AminoInfoToast>
      );
    default:
      return (
        <AminoToast layout {...baseProps}>
          <InfoIcon />
          {children}
        </AminoToast>
      );
  }
};
