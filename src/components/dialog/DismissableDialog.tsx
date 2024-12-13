import type { ReactNode } from 'react';

import { BaseDialog } from 'src/components/dialog/BaseDialog';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Thumbnail } from 'src/components/thumbnail/Thumbnail';
import { ExclamationMarkDuotoneIcon } from 'src/icons/ExclamationMarkDuotoneIcon';
import { HelpDuotoneIcon } from 'src/icons/HelpDuotoneIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import type { BaseProps } from 'src/types/BaseProps';
import type { Theme } from 'src/types/Theme';

import styles from './DismissableDialog.module.scss';

export type DismissableDialogIntent = 'danger' | 'warning' | 'info';

export type DismissableDialogBaseArgs = {
  intent: DismissableDialogIntent;
  label: string;
  subtitle?: ReactNode;
  /**
   * @default 350
   */
  width?: number;
};

export type DismissableDialogProps = BaseProps &
  DismissableDialogBaseArgs & {
    actions?: ReactNode;
    dismissAction: () => void;
    open: boolean;
    themeOverride?: Theme;
  };

const getIconForIntent = (intent: DismissableDialogIntent) => {
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

const getColorForIntent = (intent: DismissableDialogIntent) => {
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

export const _dismissableDialogGetButtonVariant = (
  intent: DismissableDialogIntent,
) => {
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

export const DismissableDialog = ({
  actions,
  dismissAction,
  intent,
  label,
  open,
  style,
  subtitle,
  themeOverride,
  width = 350,
}: DismissableDialogProps) => (
  <BaseDialog
    data-theme={themeOverride}
    onClose={dismissAction}
    open={open}
    style={style}
    width={width}
  >
    <div className={styles.content}>
      <VStack spacing={24}>
        <Thumbnail
          color={getColorForIntent(intent)}
          icon={getIconForIntent(intent)}
          size={40}
        />
        <VStack spacing={8}>
          <Text type="subheader">{label}</Text>
          {subtitle && (
            <Text color="gray800" lineHeight="base" type="body">
              {subtitle}
            </Text>
          )}
        </VStack>
        <div className={styles.footer}>{actions}</div>
      </VStack>
    </div>
  </BaseDialog>
);
