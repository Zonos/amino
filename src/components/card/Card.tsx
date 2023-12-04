import type { ReactNode } from 'react';

import clsx from 'clsx';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Card.module.scss';

export type CardProps = BaseProps & {
  actions?: ReactNode;
  children: ReactNode;
  footerActions?: ReactNode;
  footerContent?: ReactNode;
  footerHeight?: number;
  label?: ReactNode;
  spacing?: string;
};

export const Card = ({
  actions,
  children,
  className,
  footerActions,
  footerContent,
  footerHeight,
  label,
  spacing,
  style,
}: CardProps) => (
  <div
    className={clsx(className, styles.card)}
    style={{
      ...style,
      '--amino-card-footer-height': footerHeight ? `${footerHeight}px` : '65px',
      '--amino-card-margin': spacing
        ? `calc(${spacing} * -1)`
        : theme.spaceNegative24,
      '--amino-card-margin-bottom': spacing || theme.space24,
      '--amino-card-margin-top': spacing || theme.space24,
      '--amino-card-padding-spacing': spacing || theme.space24,
    }}
  >
    {label && (
      <div className={styles.cardHeader}>
        <Text type="subheader">{label}</Text>

        <HStack spacing={8}>{actions}</HStack>
      </div>
    )}
    {children}
    {(footerActions || footerContent) && (
      <div className={styles.cardFooter}>
        <div>{footerContent}</div>
        <HStack spacing={8}>{footerActions}</HStack>
      </div>
    )}
  </div>
);
