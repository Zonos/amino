import clsx from 'clsx';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import { getAminoColor } from 'src/utils/getAminoColor';

import styles from './ProgressBar.module.scss';

export type ProgressBarProps = BaseProps & {
  colorStyle?: 'greenToRed' | 'redToGreen' | Color;
  progress?: number;
};

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
