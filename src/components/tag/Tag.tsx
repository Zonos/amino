import type { HTMLAttributes, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

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

const tagVariants = cva('inline-flex rounded-amino6 border text-text-color', {
  compoundVariants: [
    {
      className: 'border-red-600',
      highlighted: true,
      intent: 'error',
    },
  ],
  defaultVariants: {
    highlighted: false,
    intent: 'default',
    size: 'lg',
  },
  variants: {
    highlighted: {
      false: '',
      true: 'bg-blue-50 text-blue-800 border-blue-600',
    },
    intent: {
      default: 'bg-gray-50 border-gray-200',
      error: 'bg-red-50 text-red-800 border-red-200',
    },
    size: {
      base: 'h-5',
      lg: '',
    },
  },
});

const tagHoverVariants = cva('', {
  defaultVariants: {
    highlighted: false,
    intent: 'default',
  },
  variants: {
    highlighted: {
      false: '',
      true: 'group-hover:bg-blue-100',
    },
    intent: {
      default: 'group-hover:bg-gray-100',
      error: 'group-hover:bg-red-100',
    },
  },
});

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
    className={cn(
      'group',
      tagVariants({ highlighted, intent, size }),
      className,
    )}
    style={style}
  >
    <button
      className={cn(
        'inline-flex items-center gap-1 text-amino-base font-medium text-center focus:outline-none',
        size === 'base'
          ? 'rounded-amino6 rounded-r-none py-0.5 px-1'
          : 'rounded-amino6 rounded-r-none py-1 pl-2 pr-1',
        iconRight && '[&_svg]:order-2',
        tagHoverVariants({ highlighted, intent }),
      )}
      onClick={onClick}
      type="button"
    >
      {icon}
      <p className="m-0">{children}</p>
    </button>
    <button
      className={cn(
        'inline-flex items-center rounded-amino6',
        size === 'base' ? 'py-0.5 px-0.75' : 'py-1 px-1.25',
        tagHoverVariants({ highlighted, intent }),
      )}
      onClick={onClose}
      type="button"
    >
      <div className="flex">
        <RemoveIcon size={14} />
      </div>
    </button>
  </div>
);
