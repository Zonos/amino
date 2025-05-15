import clsx from 'clsx';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import { getAminoColor } from 'src/utils/getAminoColor';

import styles from './ProgressBar.module.scss';

export type ProgressBarProps = BaseProps & {
  /**
   * The color style of the progress bar
   * - Can be a specific Color from the theme
   * - 'greenToRed': Color transitions from green (0-20%) to orange (20-80%) to red (80-100%)
   * - 'redToGreen': Color transitions from red (0-20%) to orange (20-80%) to green (80-100%)
   * @default 'blue600'
   */
  colorStyle?: 'greenToRed' | 'redToGreen' | Color;
  /**
   * The progress percentage, from 0 to 100
   * Values less than 0 will be treated as 0, and values greater than 100 will be treated as 100
   * @default 0
   */
  progress?: number;
};

/**
 * A progress bar component that displays a horizontal bar to visualize completion or loading progress.
 * Supports different color styles and percentage-based progress values.
 *
 * @example Basic usage
 * ```tsx
 * <ProgressBar progress={75} />
 * ```
 *
 * @example With different color styles
 * ```tsx
 * <VStack spacing={16}>
 *   <ProgressBar colorStyle="blue600" progress={60} />
 *   <ProgressBar colorStyle="green600" progress={60} />
 *   <ProgressBar colorStyle="red600" progress={60} />
 * </VStack>
 * ```
 *
 * @example With dynamic coloring based on progress
 * ```tsx
 * <VStack spacing={16}>
 *   <Text>Green to Red (higher is worse)</Text>
 *   <ProgressBar colorStyle="greenToRed" progress={80} />
 *
 *   <Text>Red to Green (higher is better)</Text>
 *   <ProgressBar colorStyle="redToGreen" progress={80} />
 * </VStack>
 * ```
 *
 * @example With custom styling
 * ```tsx
 * <ProgressBar
 *   className="custom-progress"
 *   colorStyle="orange600"
 *   progress={45}
 *   style={{ height: '8px', borderRadius: '4px' }}
 * />
 * ```
 */
export const ProgressBar = ({
  className,
  colorStyle = 'blue600',
  progress = 0,
  style,
}: ProgressBarProps) => {
  const validateProgress = () => {
    if (progress < 0) {
      return 0;
    }
    if (progress > 100) {
      return 100;
    }
    return progress;
  };

  const validatedProgress = validateProgress();

  const getBarColor = () => {
    switch (colorStyle) {
      case 'greenToRed':
        if (validatedProgress <= 20) {
          return theme.green600;
        }
        if (validatedProgress >= 80) {
          return theme.red600;
        }
        return theme.orange600;
      case 'redToGreen':
        if (validatedProgress <= 20) {
          return theme.red600;
        }
        if (validatedProgress >= 80) {
          return theme.green600;
        }
        return theme.orange600;
      default:
        return getAminoColor(colorStyle);
    }
  };
  return (
    <div
      className={clsx(className, styles.base)}
      style={{
        ...style,
        '--amino-progress-bar-background-color': getBarColor() || '',
        '--amino-progress-bar-width': `${validatedProgress}%`,
      }}
    >
      <div className={styles.bar} />
    </div>
  );
};
