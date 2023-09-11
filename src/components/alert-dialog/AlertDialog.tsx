import type { ReactNode } from 'react';

import type { Variant } from 'framer-motion';
import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { BaseDialog } from 'src/components/dialog/BaseDialog';
import { RoundedIcon } from 'src/components/rounded-icon/RoundedIcon';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { ExclamationMarkDuotoneIcon } from 'src/icons/ExclamationMarkDuotoneIcon';
import { ExclamationMarkIcon } from 'src/icons/ExclamationMarkIcon';
import { HelpDuotoneIcon } from 'src/icons/HelpDuotoneIcon';
import { HelpIcon } from 'src/icons/HelpIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import { theme } from 'src/styles/constants/theme';
import { type Intent } from 'src/types/Intent';
import { type Theme } from 'src/types/Theme';

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
  color: ${theme.textColorSecondary};
  line-height: ${theme.lineHeightBase};
  font-size: ${theme.fontSizeBase};
`;

export type AlertDialogProps = {
  dismissText: string;
  intent: Intent;
  label: string;
  open: boolean;
  subtitle: ReactNode;
  themeOverride?: Theme;
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

const getButtonVariant = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return 'danger';
    case 'warning':
      return 'warning';
    case 'info':
    default:
      return 'primary';
  }
};

export const AlertDialog = ({
  dismissAction,
  dismissText,
  intent,
  label,
  open,
  subtitle,
  themeOverride,
}: AlertDialogProps) => (
  <BaseDialog
    data-theme={themeOverride}
    onClose={dismissAction}
    open={open}
    width={350}
  >
    <Content>
      <VStack spacing={24}>
        <RoundedIcon intent={intent}>{getIconForIntent(intent)}</RoundedIcon>
        <VStack spacing={8}>
          <Text type="subheader">{label}</Text>
          <AlertPrompt>{subtitle}</AlertPrompt>
        </VStack>
        <Footer>
          <Button
            onClick={dismissAction}
            size="lg"
            variant={getButtonVariant(intent)}
          >
            {dismissText}
          </Button>
        </Footer>
      </VStack>
    </Content>
  </BaseDialog>
);
