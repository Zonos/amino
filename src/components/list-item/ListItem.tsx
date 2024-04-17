import { type MouseEventHandler, type ReactNode, forwardRef } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './ListItem.module.scss';

export type Props = BaseProps & {
  /** @description Decorater takes a React node, preferably an icon or an avatar */
  decorator?: ReactNode;
  disabled?: boolean;
  label: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
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

export const ListItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      decorator,
      disabled,
      label,
      onClick,
      rightDecorator,
      selected,
      style,
      subtitle,
    },
    ref,
  ) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      ref={ref}
      className={clsx(
        className,
        styles.aminoListItem,
        disabled && styles.disabled,
        selected && styles.selected,
        !!onClick && styles.withClick,
      )}
      onClick={e => !disabled && onClick && onClick(e)}
      role="button"
      style={style}
      tabIndex={0}
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
    </div>
  ),
);
