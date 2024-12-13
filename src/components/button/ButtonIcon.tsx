import clsx from 'clsx';

import { Button, type ButtonProps } from 'src/components/button/Button';

import styles from './ButtonIcon.module.scss';

/**
 * A Button that is just an icon.
 */

export const ButtonIcon = ({ className, style, ...props }: ButtonProps) => (
  <Button
    className={clsx(styles.buttonIcon, className)}
    style={style}
    {...props}
  />
);
