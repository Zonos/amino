import React from 'react';

import styled from 'styled-components';

import { Button } from '~/src/components/Button/Button';
import { BaseDialog } from '~/src/components/Dialog/BaseDialog';
import { RoundedIcon } from '~/src/components/RoundedIcon/RoundedIcon';
import { VStack } from '~/src/components/Stack/VStack';
import { Text } from '~/src/components/Text/Text';
import { ExclamationSolidIcon } from '~/src/icons/ExclamationIcon';
import { HelpSolidIcon } from '~/src/icons/HelpIcon';
import { WarningSolidIcon } from '~/src/icons/WarningIcon';
import { IAminoTheme } from '~/src/types/IAminoTheme';
import { Intent } from '~/src/types/Intent';

const Content = styled.div`
  padding: var(--amino-space);

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
  margin-top: var(--amino-space);

  & > button + button {
    margin-left: var(--amino-space-quarter);
  }

  button {
    flex: 1;
  }
`;

const ConfirmationPrompt = styled.span`
  opacity: 0.5;
`;

export type ConfirmDialogProps = {
  open: boolean;
  label: string;
  theme?: IAminoTheme;
  subtitle?: React.ReactNode;
  intent: Intent;
  confirmText?: string;
  dismissText?: string;
  confirmAction: () => void;
  dismissAction: () => void;
};

const getIconForIntent = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return <ExclamationSolidIcon />;
    case 'warning':
      return <WarningSolidIcon />;
    case 'info':
    default:
      return <HelpSolidIcon />;
  }
};

export const ConfirmDialog = ({
  theme,
  open,
  label,
  intent,
  subtitle,
  confirmText,
  dismissText,
  confirmAction,
  dismissAction,
}: ConfirmDialogProps) => (
  <BaseDialog width={350} data-theme={theme} open={open}>
    <Content>
      <VStack spacing="space-half">
        <RoundedIcon intent={intent}>{getIconForIntent(intent)}</RoundedIcon>
        <div>
          <Text type="h4">{label}</Text>
          {subtitle && <ConfirmationPrompt>{subtitle}</ConfirmationPrompt>}
        </div>
        <Footer>
          <Button size="md" onClick={dismissAction} intent="outline">
            {dismissText}
          </Button>
          <Button size="md" onClick={confirmAction} intent={intent}>
            {confirmText}
          </Button>
        </Footer>
      </VStack>
    </Content>
  </BaseDialog>
);
