import type { ReactNode } from 'react';

import clsx from 'clsx';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import type { Intent } from 'src/types/Intent';

import styles from './RoundedIcon.module.scss';

export type RoundedIconProps = BaseProps & {
  background?: Color;
  children: ReactNode;
  color?: Color;
  intent?: Intent;
};

export const RoundedIcon = ({
  background,
  children,
  className,
  color,
  intent,
  style,
}: RoundedIconProps) => {
  const getIntentClass = () => {
    switch (intent) {
      case 'danger':
      case 'primary':
      case 'warning':
      case 'success':
        return styles[intent];
      default:
        return '';
    }
  };

  return (
    <div
      className={clsx(className, styles.iconWrapper, getIntentClass())}
      style={{
        ...style,
        '--amino-rounded-icon-background': background
          ? theme[background]
          : theme.gray200,
        '--amino-rounded-icon-color': color ? theme[color] : theme.gray600,
      }}
    >
      {children}
    </div>
  );
};
