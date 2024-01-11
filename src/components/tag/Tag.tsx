import type { ReactNode } from 'react';

import clsx from 'clsx';

import { RemoveIcon } from 'src/icons/RemoveIcon';

import styles from './Tag.module.scss';

type TagSize = 'base' | 'lg';

export type TagProps = {
  children?: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  iconRight?: boolean;
  size?: TagSize;
  onClick?: () => void;
  onClose: () => void;
};

export const Tag = ({
  children,
  className,
  icon,
  iconRight,
  onClick,
  onClose,
  size = 'base',
}: TagProps) => (
  <div
    className={clsx(
      className,
      styles.tagWrapper,
      size === 'base' && styles.base,
    )}
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
