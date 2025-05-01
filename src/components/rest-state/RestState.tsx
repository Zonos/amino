import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './RestState.module.scss';

export type RestStateProps = BaseProps & {
  /**
   * Action element to display below the subtitle, typically a button
   */
  action?: ReactNode;
  /**
   * URL of an image to display above the text content
   */
  icon?: string;
  /**
   * Primary text displayed in the rest state
   */
  label: string;
  /**
   * Secondary text displayed below the label
   */
  subtitle?: ReactNode;
};

/**
 * RestState component provides a placeholder view for empty states, loading states,
 * errors, or success messages with optional icon and action.
 *
 * @example Basic usage
 * ```tsx
 * <RestState
 *   label="No results found"
 *   subtitle="Try adjusting your search criteria"
 * />
 * ```
 *
 * @example With action button
 * ```tsx
 * <RestState
 *   label="No items yet"
 *   subtitle="Create your first item to get started"
 *   action={<Button onClick={handleAddItem} variant="primary">Add Item</Button>}
 * />
 * ```
 *
 * @example With icon
 * ```tsx
 * <RestState
 *   icon="/path/to/empty-state-illustration.svg"
 *   label="Your cart is empty"
 *   subtitle="Browse our products to add items to your cart"
 *   action={<Button onClick={handleBrowseProducts}>Browse Products</Button>}
 * />
 * ```
 *
 * @example Error state
 * ```tsx
 * <RestState
 *   icon="/path/to/error-illustration.svg"
 *   label="Something went wrong"
 *   subtitle="We couldn't load your data. Please try again later."
 *   action={<Button onClick={handleRetry}>Retry</Button>}
 * />
 * ```
 *
 * @example Success state
 * ```tsx
 * <RestState
 *   icon="/path/to/success-illustration.svg"
 *   label="Payment successful!"
 *   subtitle="Your order has been processed and will be shipped soon."
 *   action={<Button onClick={handleViewOrder}>View Order</Button>}
 * />
 * ```
 */
export const RestState = ({
  action,
  className,
  icon,
  label,
  style,
  subtitle,
}: RestStateProps) => (
  <div className={clsx(className, styles.styledRestState)} style={style}>
    {icon ? <img alt={label} className={styles.icon} src={icon} /> : null}
    <div className={styles.textWrapper}>
      <Text type="title">{label}</Text>
      {subtitle && <Text type="subtitle">{subtitle}</Text>}
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  </div>
);
