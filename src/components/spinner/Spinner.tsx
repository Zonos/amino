import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

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

const spinnerColorClasses: Record<
  SpinnerColor,
  { svg: string; track: string }
> = {
  black: {
    svg: 'stroke-spinner-stroke-black',
    track: 'stroke-spinner-track-black',
  },
  cyan: { svg: 'stroke-cyan-600', track: 'stroke-cyan-100' },
  danger: { svg: 'stroke-red-600', track: 'stroke-red-100' },
  info: { svg: 'stroke-blue-600', track: 'stroke-blue-100' },
  inverted: {
    svg: 'stroke-spinner-stroke-white dark:stroke-spinner-stroke-black',
    track: 'stroke-spinner-track-white dark:stroke-spinner-track-black',
  },
  primary: { svg: 'stroke-blue-600', track: 'stroke-gray-200' },
  purple: { svg: 'stroke-purple-600', track: 'stroke-purple-100' },
  success: { svg: 'stroke-green-600', track: 'stroke-green-100' },
  warning: { svg: 'stroke-orange-600', track: 'stroke-orange-100' },
  white: {
    svg: 'stroke-spinner-stroke-white',
    track: 'stroke-spinner-track-white',
  },
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
}: SpinnerProps) => {
  const colors = spinnerColorClasses[color];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        ...style,
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <svg
        className={cn(
          'absolute animate-spinner-rotate',
          colors.svg,
          className,
          'amino-spinner',
        )}
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
        viewBox="0 0 50 50"
      >
        <circle
          className={cn('track', colors.track)}
          cx="25"
          cy="25"
          fill="none"
          id="loading-spinner-circle"
          r="20"
          strokeWidth="5"
        />
        <circle
          className="animate-spinner-dash [stroke-linecap:round]"
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
};
