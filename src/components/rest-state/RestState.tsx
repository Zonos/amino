import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';

import styles from './RestState.module.scss';

export type RestStateProps = {
  action?: ReactNode;
  className?: string;
  icon?: string;
  label: string;
  subtitle?: ReactNode;
};

export const RestState = ({
  action,
  className,
  icon,
  label,
  subtitle,
}: RestStateProps) => (
  <div className={clsx(className, styles.styledRestState)}>
    {icon ? <img alt={label} className={styles.icon} src={icon} /> : null}
    <div className={styles.textWrapper}>
      <Text type="title">{label}</Text>
      {subtitle && <Text type="subtitle">{subtitle}</Text>}
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  </div>
);
