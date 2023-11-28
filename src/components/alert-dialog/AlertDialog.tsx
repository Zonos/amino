import { type ReactNode } from 'react';

import { Button } from 'src/components/button/Button';
import { BaseDialog } from 'src/components/dialog/BaseDialog';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Thumbnail } from 'src/components/thumbnail/Thumbnail';
import { ExclamationMarkDuotoneIcon } from 'src/icons/ExclamationMarkDuotoneIcon';
import { HelpDuotoneIcon } from 'src/icons/HelpDuotoneIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import { type Intent } from 'src/types/Intent';
import { type Theme } from 'src/types/Theme';

import styles from './AlertDialog.module.scss';

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

const getColorForIntent = (intent: Intent) => {
  switch (intent) {
    case 'danger':
      return 'red';
    case 'warning':
      return 'orange';
    case 'info':
    default:
      return 'blue';
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
    <div className={styles.aminoContent}>
      <VStack spacing={24}>
        <Thumbnail
          color={getColorForIntent(intent)}
          icon={getIconForIntent(intent)}
          size={40}
        />
        <VStack spacing={8}>
          <Text type="subheader">{label}</Text>
          <span className={styles.aminoAlertPrompt}>{subtitle}</span>
        </VStack>
        <div className={styles.aminoFooter}>
          <Button
            onClick={dismissAction}
            size="lg"
            variant={getButtonVariant(intent)}
          >
            {dismissText}
          </Button>
        </div>
      </VStack>
    </div>
  </BaseDialog>
);
