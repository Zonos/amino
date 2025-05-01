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
  | 'white';

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

/**
 * Spinner component displays an animated loading indicator.
 * Used to indicate that content is loading or an action is in progress.
 *
 * @example Basic spinner with default size and color
 * <Spinner />
 *
 * @example Different colors
 * <Spinner color="primary" />
 * <Spinner color="success" />
 * <Spinner color="danger" />
 * <Spinner color="warning" />
 * <Spinner color="info" />
 *
 * @example Different sizes
 * <Spinner size={16} /> // Small
 * <Spinner size={32} /> // Default
 * <Spinner size={48} /> // Large
 * <Spinner size={64} /> // Extra large
 *
 * @example On dark background
 * <div style={{ backgroundColor: "#333", padding: "20px" }}>
 *   <Spinner color="inverted" />
 * </div>
 *
 * @example In a button
 * <Button disabled loading>
 *   <Spinner size={16} color="white" />
 *   Loading
 * </Button>
 *
 * @example Centering in container
 * <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
 *   <Spinner />
 * </div>
 *
 * @example With text
 * <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
 *   <Spinner />
 *   <Text>Loading data...</Text>
 * </div>
 */
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
