// Card.tsx

import type { ReactNode } from 'react';

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
  spacing = theme.space24,
}: CardProps) => (
  <div
    className={`${styles.card} ${className || ''}`}
    style={{ padding: spacing }}
  >
    {label && (
      <div
        className={styles.cardHeader}
        style={{
          margin: spacing ? `calc(${spacing} * -1)` : theme.spaceNegative24,
          marginBottom: spacing || theme.space24,
          padding: spacing || theme.space24,
        }}
      >
        <Text type="subheader">{label}</Text>

        <HStack spacing={8}>{actions}</HStack>
      </div>
    )}
    {children}
    {(footerActions || footerContent) && (
      <div
        className={styles.cardFooter}
        style={{
          height: footerHeight && `${footerHeight}px`,
          margin: spacing ? `calc(${spacing} * -1)` : theme.spaceNegative24,
          marginTop: spacing || theme.space24,
          padding: spacing || theme.space24,
        }}
      >
        <div>{footerContent}</div>
        <HStack spacing={8}>{footerActions}</HStack>
      </div>
    )}
  </div>
);
