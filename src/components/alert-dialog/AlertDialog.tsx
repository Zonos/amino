import type { ReactNode } from 'react';

import { Button } from 'src/components/button/Button';
import { BaseDialog } from 'src/components/dialog/_BaseDialog';
import { RoundedIcon } from 'src/components/rounded-icon/RoundedIcon';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { ExclamationMarkIcon } from 'src/icons/ExclamationMarkIcon';
import { HelpIcon } from 'src/icons/HelpIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import { theme } from 'src/styles/constants/theme';
import type { IAminoTheme } from 'src/types/IAminoTheme';
import type { Intent } from 'src/types/Intent';
import styled from 'styled-components';

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

const AlertPrompt = styled.span`
  opacity: 0.5;
`;

export type AlertDialogProps = {
  open: boolean;
  label: string;
  theme?: IAminoTheme;
  subtitle: ReactNode;
  intent: Intent;
  dismissText: string;
  dismissAction: () => void;
};

const getIconForIntent = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return <ExclamationMarkIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'info':
    default:
      return <HelpIcon />;
  }
};

export const AlertDialog = ({
  theme: _theme,
  open,
  label,
  intent,
  subtitle,
  dismissText,
  dismissAction,
}: AlertDialogProps) => (
  <BaseDialog
    width={350}
    data-theme={_theme}
    open={open}
    onClose={dismissAction}
  >
    <Content>
      <VStack spacing={16}>
        <RoundedIcon intent={intent}>{getIconForIntent(intent)}</RoundedIcon>
        <div>
          <Text type="title">{label}</Text>
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
