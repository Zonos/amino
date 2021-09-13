import React from 'react';

import styled from 'styled-components';

import { DangerIcon, HelpIcon } from '../../icons';
import { IAminoTheme, Intent } from '../../types';
import { Button } from '../Button';
import { BaseDialog } from '../Dialog/BaseDialog';
import { RoundedIcon } from '../RoundedIcon';
import { VStack } from '../Stack';
import { Text } from '../Text';

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
  subtitle: React.ReactNode;
  intent: Intent;
  confirmText: string;
  dismissText: string;
  confirmAction: () => void;
  dismissAction: () => void;
};

const getIconForIntent = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return <DangerIcon />;
    case 'info':
    default:
      return <HelpIcon />;
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
          <ConfirmationPrompt>{subtitle}</ConfirmationPrompt>
        </div>
        <Footer>
          <Button onClick={dismissAction}>{dismissText}</Button>
          <Button onClick={confirmAction} intent={intent}>
            {confirmText}
          </Button>
        </Footer>
      </VStack>
    </Content>
  </BaseDialog>
);
