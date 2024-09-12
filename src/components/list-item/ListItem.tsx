import type { MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './ListItem.module.scss';

export type Props = BaseProps & {
  /** @description Decorater takes a React node, preferably an icon or an avatar */
  decorator?: ReactNode;
  disabled?: boolean;
  label: ReactNode;
  onClick?: MouseEventHandler;
  rightDecorator?: ReactNode;
  selected?: boolean;
  subtitle?: ReactNode;
};

const ListIcon = ({
  icon,
  iconComponent,
  label,
}: {
  icon?: string;
  iconComponent?: ReactNode;
  label: string;
}) => {
  if (icon) {
    return <img alt={label} className={styles.icon} src={icon} />;
  }
  if (iconComponent) {
    return <>{iconComponent}</>;
  }
  return null;
};

export const ListItem = ({
  className,
  decorator,
  disabled,
  label,
  onClick,
  rightDecorator,
  selected,
  style,
  subtitle,
}: Props) => (
  <button
    className={clsx(
      className,
      styles.aminoListItem,
      disabled && styles.disabled,
      selected && styles.selected,
      !!onClick && styles.withClick,
    )}
    onClick={e => !disabled && onClick?.(e)}
    style={style}
    type="button"
  >
    <div className={clsx('__icon-wrapper', decorator && styles.hasIcon)}>
      {decorator}
      <ListIcon label={typeof label === 'string' ? label : ''} />
    </div>

    <div className={styles.textContainer}>
      <Text type="label">{label}</Text>
      {subtitle && <Text type="caption">{subtitle}</Text>}
    </div>
    {rightDecorator}
  </button>
);
