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
  background: ${theme.grayL80};
  z-index: 999999;
  border-radius: ${theme.radiusLg};
  color: ${theme.grayD80};
  box-shadow: ${theme.v3ShadowLarge};
  padding: ${theme.spaceHalf} ${theme.space};
  display: flex;
  align-items: center;
  gap: ${theme.spaceQuarter};
  font-weight: 500;
  user-select: none;

  & + & {
    margin-top: ${theme.space};
  }
`;

const AminoSuccessToast = styled(AminoToast)`
  background-color: ${theme.greenL80};
  color: ${theme.greenD40};
`;

const AminoErrorToast = styled(AminoToast)`
  background-color: ${theme.redL80};
  color: ${theme.redD40};
`;

const AminoWarningToast = styled(AminoToast)`
  background-color: ${theme.orangeL80};
  color: ${theme.orangeD40};
`;
const AminoInfoToast = styled(AminoToast)`
  background-color: ${theme.blueL80};
  color: ${theme.blueD40};
`;

export type ToastProps = {
  children: React.ReactNode;
  toastKey: string;
  intent?: Extract<Intent, 'success' | 'warning' | 'error' | 'info'>;
  /** Dismiss delay (default 6000 ms) */
  duration?: number;
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
            color="green-900"
            secondaryColor="green-400"
          />
          {children}
        </AminoSuccessToast>
      );
    case 'error':
      return (
        <AminoErrorToast layout {...baseProps}>
          <RemoveCircleDuotoneIcon color="red-900" secondaryColor="red-400" />
          {children}
        </AminoErrorToast>
      );
    case 'warning':
      return (
        <AminoWarningToast layout {...baseProps}>
          <WarningDuotoneIcon color="orange-900" secondaryColor="orange-400" />
          {children}
        </AminoWarningToast>
      );

    case 'info':
      return (
        <AminoInfoToast layout {...baseProps}>
          <InfoDuotoneIcon color="blue-900" secondaryColor="blue-400" />
          {children}
        </AminoInfoToast>
      );
    default:
      return (
        <AminoToast layout {...baseProps}>
          <InfoDuotoneIcon color="gray-900" secondaryColor="gray-400" />
          {children}
        </AminoToast>
      );
  }
};
