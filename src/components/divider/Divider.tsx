import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Divider.module.scss';

type Props = BaseProps & {
  vertical?: boolean;
};

export const Divider = ({ className, style, vertical = false }: Props) =>
  vertical ? (
    <hr className={clsx(styles.dividerVertical, className)} style={style} />
  ) : (
    <hr className={clsx(styles.dividerHorizontal, className)} style={style} />
  );
