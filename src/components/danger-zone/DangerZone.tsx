import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Card, type CardProps } from 'src/components/card/Card';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './DangerZone.module.scss';

export const DangerZone = ({
  children,
  className,
  style,
  ...props
}: BaseProps & CardProps & { children: ReactNode }) => (
  <Card className={clsx(styles.dangerZone, className)} style={style} {...props}>
    {children}
  </Card>
);
