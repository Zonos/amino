import React from 'react';

import { Button } from 'src/components/button/Button';
import { BaseDialog } from 'src/components/dialog/_BaseDialog';
import { RoundedIcon } from 'src/components/rounded-icon/RoundedIcon';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { ExclamationMarkSolidIcon } from 'src/icons/ExclamationMarkSolidIcon';
import { HelpSolidIcon } from 'src/icons/HelpSolidIcon';
import { WarningSolidIcon } from 'src/icons/WarningSolidIcon';
import { IAminoTheme } from 'src/types/IAminoTheme';
import { Intent } from 'src/types/Intent';
import styled from 'styled-components';

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
      return <ExclamationMarkSolidIcon />;
    case 'warning':
      return <WarningSolidIcon />;
    case 'info':
    default:
      return <HelpSolidIcon />;
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
          <Text type="xl">{label}</Text>
          <AlertPrompt>{subtitle}</AlertPrompt>
        </div>
        <Footer>
          <Button onClick={dismissAction} intent={intent}>
            {dismissText}
          </Button>
        </Footer>
      </VStack>
    </Content>
  </BaseDialog>
);
