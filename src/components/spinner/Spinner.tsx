import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Spinner.module.scss';

export type SpinnerColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning'
  | 'inverted'
  | 'black'
  | 'white'
  | 'purple'
  | 'cyan';

export type SpinnerProps = BaseProps & {
  /**
   * @default 'primary'
   */
  color?: SpinnerColor;
  /**
   * @default 32
   */
  size?: number;
};

export const Spinner = ({
  className,
  color = 'primary',
  size = 32,
  style,
}: SpinnerProps) => (
  <div
    className={styles.wrapper}
    style={{
      ...style,
      '--amino-spinner-height': `${size}px`,
      '--amino-spinner-width': `${size}px`,
    }}
  >
    <svg
      className={clsx(
        className,
        styles.styledSvg,
        color !== 'primary' && styles[color],
        'amino-spinner',
      )}
      viewBox="0 0 50 50"
    >
      <circle
        className={clsx(styles.track, 'track')}
        cx="25"
        cy="25"
        fill="none"
        id="loading-spinner-circle"
        r="20"
        strokeWidth="5"
      />
      <circle
        cx="25"
        cy="25"
        fill="none"
        id="loading-spinner-circle"
        r="20"
        strokeWidth="5"
      />
    </svg>
  </div>
);
