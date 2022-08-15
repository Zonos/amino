import React from 'react';

import { motion } from 'framer-motion';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { InfoDuotoneIcon } from 'src/icons/InfoDuotoneIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import { Intent } from 'src/types';
import styled from 'styled-components';

const AminoToast = styled(motion.div)`
  background: ${theme['gray-l80']};
  z-index: 999999;
  border-radius: var(--amino-radius-lg);
  color: ${theme['gray-d80']};
  box-shadow: var(--amino-shadow-medium);
  padding: var(--amino-space-half) var(--amino-space);
  display: flex;
  gap: ${theme['space-quarter']};
  font-weight: 500;
  user-select: none;

  & + & {
    margin-top: var(--amino-space);
  }
`;

const AminoSuccessToast = styled(AminoToast)`
  background-color: ${theme['green-l80']};
  color: ${theme['green-d40']};
`;

const AminoErrorToast = styled(AminoToast)`
  background-color: ${theme['red-l80']};
  color: ${theme['red-d40']};
`;

const AminoWarningToast = styled(AminoToast)`
  background-color: ${theme['orange-l80']};
  color: ${theme['orange-d40']};
`;
const AminoInfoToast = styled(AminoToast)`
  background-color: ${theme['blue-l80']};
  color: ${theme['blue-d40']};
`;

export type ToastProps = {
  children: React.ReactNode;
  intent?: Extract<Intent, 'success' | 'warning' | 'error' | 'info'>;
  toastKey: string;
};

export const Toast: React.FC<ToastProps> = ({ children, intent, toastKey }) => {
  const baseProps = {
    key: toastKey,
    initial: { opacity: 0, translateX: 10 },
    animate: { opacity: 1, translateX: 0 },
    exit: { opacity: 0 },
  };
  switch (intent) {
    case 'success':
      return (
        <AminoSuccessToast layout {...baseProps}>
          <CheckCircleDuotoneIcon
            color="green-d60"
            secondaryColor="green-l40"
          />
          {children}
        </AminoSuccessToast>
      );
    case 'error':
      return (
        <AminoErrorToast layout {...baseProps}>
          <RemoveCircleDuotoneIcon color="red-d60" secondaryColor="red-l40" />
          {children}
        </AminoErrorToast>
      );
    case 'warning':
      return (
        <AminoWarningToast layout {...baseProps}>
          <WarningDuotoneIcon color="orange-d60" secondaryColor="orange-l40" />
          {children}
        </AminoWarningToast>
      );

    case 'info':
      return (
        <AminoInfoToast layout {...baseProps}>
          <InfoDuotoneIcon color="blue-d60" secondaryColor="blue-l40" />
          {children}
        </AminoInfoToast>
      );
    default:
      return (
        <AminoToast layout {...baseProps}>
          <InfoDuotoneIcon color="gray-d60" secondaryColor="gray-l40" />
          {children}
        </AminoToast>
      );
  }
};
