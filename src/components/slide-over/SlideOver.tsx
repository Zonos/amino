import { type ReactNode } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import {
  type BaseDialogProps,
  BaseDialog,
} from 'src/components/dialog/BaseDialog';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';

import styles from './SlideOver.module.scss';

export type SlideOverProps = BaseDialogProps & {
  actions?: ReactNode;
  label?: string;
  subtitle?: ReactNode;
};

export const SlideOver = ({
  actions,
  children,
  label,
  onClose,
  subtitle,
  width = 444,
  ...props
}: SlideOverProps) => (
  <BaseDialog
    className={styles.styledBaseDialog}
    onClose={onClose}
    popupMotionProps={{
      animate: { x: 0 },
      exit: { x: width },
      initial: { x: width },
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    }}
    width={width}
    {...props}
  >
    <div className={styles.wrapper}>
      <header className={styles.slideOverHeader}>
        <Button icon={<RemoveIcon />} onClick={onClose} />
        {subtitle ? (
          <VStack
            className={clsx(styles.headerContent, 'header-content')}
            spacing={0}
          >
            <Text type="subheader">{label}</Text>
            {subtitle}
          </VStack>
        ) : (
          <Text
            className={clsx(styles.headerContent, 'header-content')}
            type="subheader"
          >
            {label}
          </Text>
        )}
      </header>
      <div className={styles.slideOverContent}>{children}</div>
      {actions && (
        <div className={styles.footer}>
          <HStack spacing={8}>{actions}</HStack>
        </div>
      )}
    </div>
  </BaseDialog>
);
