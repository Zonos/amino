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
