import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Divider.module.scss';

type Props = BaseProps & {
  /**
   * @default false
   */
  noMargin?: boolean;
  /**
   * @default false
   */
  vertical?: boolean;
};

export const Divider = ({
  className,
  noMargin = false,
  style,
  vertical = false,
}: Props) =>
  vertical ? (
    <hr
      className={clsx(
        styles.dividerVertical,
        noMargin && styles.noMargin,
        className,
      )}
      style={style}
    />
  ) : (
    <hr
      className={clsx(
        styles.dividerHorizontal,
        noMargin && styles.noMargin,
        className,
      )}
      style={style}
    />
  );
