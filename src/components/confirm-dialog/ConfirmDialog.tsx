import type { ReactNode } from 'react';

import styled from 'styled-components';

import { Button } from 'src/components/button/LegacyButton';
import { BaseDialog } from 'src/components/dialog/BaseDialog';
import { RoundedIcon } from 'src/components/rounded-icon/RoundedIcon';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { ExclamationMarkDuotoneIcon } from 'src/icons/ExclamationMarkDuotoneIcon';
import { HelpDuotoneIcon } from 'src/icons/HelpDuotoneIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import type { Intent } from 'src/types/Intent';
import type { Theme } from 'src/types/Theme';

const Content = styled.div`
  padding: ${theme.space24};

  & > div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${theme.space24};

  & > button + button {
    margin-left: ${theme.space8};
  }

  button {
    flex: 1;
  }
`;

export type ConfirmDialogProps = {
  confirmText?: string;
  dismissText?: string;
  intent: Intent;
  label: string;
  open: boolean;
  subtitle?: ReactNode;
  themeOverride?: Theme;
  confirmAction: () => void;
  dismissAction: () => void;
};

const getIconForIntent = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return (
        <ExclamationMarkDuotoneIcon color="red800" secondaryColor="red400" />
      );
    case 'warning':
      return (
        <WarningDuotoneIcon color="orange800" secondaryColor="orange400" />
      );
    case 'info':
    default:
      return <HelpDuotoneIcon color="blue800" secondaryColor="blue400" />;
  }
};

export const ConfirmDialog = ({
  confirmAction,
  confirmText,
  dismissAction,
  dismissText,
  intent,
  label,
  open,
  subtitle,
  themeOverride,
}: ConfirmDialogProps) => (
  <BaseDialog data-theme={themeOverride} open={open} width={350}>
    <Content>
      <VStack spacing={16}>
        <RoundedIcon intent={intent}>{getIconForIntent(intent)}</RoundedIcon>
        <VStack spacing={8}>
          <Text type="subheader">{label}</Text>
          {subtitle && (
            <Text color="gray800" type="body">
              {subtitle}
            </Text>
          )}
        </VStack>
        <Footer>
          <Button intent="outline" onClick={dismissAction} size="md">
            {dismissText}
          </Button>
          <Button intent={intent} onClick={confirmAction} size="md">
            {confirmText}
          </Button>
        </Footer>
      </VStack>
    </Content>
  </BaseDialog>
);
