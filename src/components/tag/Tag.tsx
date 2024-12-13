import type { HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Tag.module.scss';

type TagSize = 'base' | 'lg';

type TagIntent = 'default' | 'error';

export type TagProps = BaseProps &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode | string;
    highlighted?: boolean;
    icon?: ReactNode;
    iconRight?: boolean;
    intent?: TagIntent;
    onClick?: () => void;
    onClose: () => void;
    size?: TagSize;
  };

export const Tag = ({
  children,
  className,
  highlighted = false,
  icon,
  iconRight,
  intent = 'default',
  onClick,
  onClose,
  size = 'base',
  style,
}: TagProps) => (
  <div
    className={clsx(
      className,
      styles.tagWrapper,
      size === 'base' && styles.base,
      intent !== 'default' ? styles[intent] : '',
      highlighted && styles.highlight,
    )}
    style={style}
  >
    <button
      className={clsx(styles.styledTagLeft, iconRight && styles.iconRight)}
      onClick={onClick}
      type="button"
    >
      {icon}
      <p>{children}</p>
    </button>
    <button className={styles.styledTagRight} onClick={onClose} type="button">
      <div className={styles.styledRemoveBtn}>
        <RemoveIcon size={14} />
      </div>
    </button>
  </div>
);
