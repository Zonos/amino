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

/**
 * Tag displays a small label with optional icon and close button, commonly used for categorization, filters, or metadata.
 * Supports different intents, sizes, icons, and can be highlighted. The close button triggers the `onClose` callback.
 *
 * @example Basic usage
 * ```tsx
 * <Tag onClose={() => {}}>Brazil</Tag>
 * ```
 *
 * @example With icon
 * ```tsx
 * <Tag icon={<CubeIcon size={16} />} onClose={() => {}}>
 *   HS code for Brazil
 * </Tag>
 * ```
 *
 * @example Highlighted tag
 * ```tsx
 * <Tag highlighted onClose={() => {}}>
 *   Highlighted Tag
 * </Tag>
 * ```
 *
 * @example Large size and error intent
 * ```tsx
 * <Tag size="lg" intent="error" onClose={() => {}}>
 *   Error Tag
 * </Tag>
 * ```
 */
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
