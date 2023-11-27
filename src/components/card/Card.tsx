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
}: CardProps) => (
  <div
    className={clsx(className, styles.card)}
    style={{
      '--footer-height': footerHeight ? `${footerHeight}px` : '65px',
      '--margin': spacing ? `calc(${spacing} * -1)` : theme.spaceNegative24,
      '--margin-bottom': spacing || theme.space24,
      '--margin-top': spacing || theme.space24,
      '--padding-spacing': spacing || theme.space24,
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
