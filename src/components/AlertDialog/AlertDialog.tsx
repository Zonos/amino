import React from 'react';

import styled from 'styled-components';

import { DangerIcon, InfoIcon } from '../../icons';
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

const AlertPrompt = styled.span`
  opacity: 0.5;
`;

export type AlertDialogProps = {
  open: boolean;
  label: string;
  theme?: IAminoTheme;
  subtitle: React.ReactNode;
  intent: Intent;
  dismissText: string;
  dismissAction: () => void;
};

const getIconForIntent = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return <DangerIcon />;
    case 'info':
    default:
      return <InfoIcon />;
  }
};

export const AlertDialog = ({
  theme,
  open,
  label,
  intent,
  subtitle,
  dismissText,
  dismissAction,
}: AlertDialogProps) => (
  <BaseDialog width={350} data-theme={theme} open={open}>
    <Content>
      <VStack spacing="space-half">
        <RoundedIcon intent={intent}>{getIconForIntent(intent)}</RoundedIcon>
        <div>
          <Text type="h4">{label}</Text>
          <AlertPrompt>{subtitle}</AlertPrompt>
        </div>
        <Footer>
          <Button onClick={dismissAction}>{dismissText}</Button>
        </Footer>
      </VStack>
    </Content>
  </BaseDialog>
);
