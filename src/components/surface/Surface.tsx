import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';
import type { Depth } from 'src/types/Depth';

import styles from './Surface.module.scss';

type Props = BaseProps & {
  children: ReactNode;
  /**
   * @default false
   */
  dense?: boolean;
  depth?: Depth;
};

export const Surface = ({
  children,
  className,
  dense = false,
  depth = 'depth4',
  style,
}: Props) => {
  const classes = clsx(
    className,
    styles.surfaceBase,
    'elevated',
    dense && styles.dense,
    depth && styles[depth],
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
