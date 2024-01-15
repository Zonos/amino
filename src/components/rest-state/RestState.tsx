import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './RestState.module.scss';

export type RestStateProps = BaseProps & {
  action?: ReactNode;
  icon?: string;
  label: string;
  subtitle?: ReactNode;
};

export const RestState = ({
  action,
  className,
  icon,
  label,
  style,
  subtitle,
}: RestStateProps) => (
  <div className={clsx(className, styles.styledRestState)} style={style}>
    {icon ? <img alt={label} className={styles.icon} src={icon} /> : null}
    <div className={styles.textWrapper}>
      <Text type="title">{label}</Text>
      {subtitle && <Text type="subtitle">{subtitle}</Text>}
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  </div>
);
