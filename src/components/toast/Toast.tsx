import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { InfoDuotoneIcon } from 'src/icons/InfoDuotoneIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import { Intent } from 'src/types';
import styled from 'styled-components';

const AminoToast = styled(motion.div)`
  background: ${theme.gray100};
  z-index: 999999;
  border-radius: ${theme.radius8};
  color: ${theme.gray1000};
  box-shadow: ${theme.v3ShadowLarge};
  padding: ${theme.space16} ${theme.space24};
  display: flex;
  align-items: center;
  gap: ${theme.space8};
  font-weight: 500;
  user-select: none;

  & + & {
    margin-top: ${theme.space24};
  }
`;

const AminoSuccessToast = styled(AminoToast)`
  background-color: ${theme.green100};
  color: ${theme.green800};
`;

const AminoErrorToast = styled(AminoToast)`
  background-color: ${theme.red100};
  color: ${theme.red800};
`;

const AminoWarningToast = styled(AminoToast)`
  background-color: ${theme.orange100};
  color: ${theme.orange800};
`;
const AminoInfoToast = styled(AminoToast)`
  background-color: ${theme.blue100};
  color: ${theme.blue800};
`;

export type ToastProps = {
  children: ReactNode;
  toastKey: string;
  intent?: Extract<Intent, 'success' | 'warning' | 'error' | 'info'>;
  /** Dismiss delay (default 6000 ms) */
  duration?: number;
};

export const Toast: FC<ToastProps> = ({ children, intent, toastKey }) => {
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
          <CheckCircleDuotoneIcon color="green900" secondaryColor="green400" />
          {children}
        </AminoSuccessToast>
      );
    case 'error':
      return (
        <AminoErrorToast layout {...baseProps}>
          <RemoveCircleDuotoneIcon color="red900" secondaryColor="red400" />
          {children}
        </AminoErrorToast>
      );
    case 'warning':
      return (
        <AminoWarningToast layout {...baseProps}>
          <WarningDuotoneIcon color="orange900" secondaryColor="orange400" />
          {children}
        </AminoWarningToast>
      );

    case 'info':
      return (
        <AminoInfoToast layout {...baseProps}>
          <InfoDuotoneIcon color="blue900" secondaryColor="blue400" />
          {children}
        </AminoInfoToast>
      );
    default:
      return (
        <AminoToast layout {...baseProps}>
          <InfoDuotoneIcon color="gray900" secondaryColor="gray400" />
          {children}
        </AminoToast>
      );
  }
};
