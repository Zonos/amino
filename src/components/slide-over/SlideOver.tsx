import type { ReactNode } from 'react';

import { Button } from 'src/components/button/Button';
import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';

import styles from './SlideOver.module.scss';

export type SlideOverProps = BaseDialogProps & {
  actions?: ReactNode;
  bottomActions?: ReactNode;
  fullWindowWidth?: boolean;
  label?: string;
  subtitle?: ReactNode;
};

export const SlideOver = ({
  actions,
  bottomActions,
  children,
  fullWindowWidth,
  label,
  onClose,
  subtitle,
  width = 444,
  ...props
}: SlideOverProps) => (
  <BaseDialog
    className={styles.styledBaseDialog}
    fullWindowWidth={fullWindowWidth}
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
        <div>
          <Button icon={<RemoveIcon />} onClick={onClose} />
          {subtitle ? (
            <VStack spacing={0}>
              <Text type="subheader">{label}</Text>
              {subtitle}
            </VStack>
          ) : (
            <Text type="subheader">{label}</Text>
          )}
        </div>
        {actions && <div>{actions}</div>}
      </header>
      <div className={styles.slideOverContent}>{children}</div>
      {bottomActions && (
        <div className={styles.footer}>
          <HStack spacing={8}>{bottomActions}</HStack>
        </div>
      )}
    </div>
  </BaseDialog>
);
