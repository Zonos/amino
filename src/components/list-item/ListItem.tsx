import type { MouseEventHandler, ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type Props = BaseProps & {
  /**
   * Element to display before the label, typically an icon or avatar
   */
  decorator?: ReactNode;
  /**
   * Whether the list item is disabled and cannot be interacted with
   * @default false
   */
  disabled?: boolean;
  /**
   * Primary text or element to display in the list item
   */
  label: ReactNode;
  /**
   * Function to call when the list item is clicked
   */
  onClick?: MouseEventHandler;
  /**
   * Element to display after the label and subtitle, typically a badge or action
   */
  rightDecorator?: ReactNode;
  /**
   * Whether the list item is visually selected/active
   * @default false
   */
  selected?: boolean;
  /**
   * Secondary text or element to display below the label
   */
  subtitle?: ReactNode;
};

/**
 * ListItem component represents an interactive item in a list with optional
 * decorators, label, subtitle, and selection states.
 *
 * @example Basic usage
 * ```tsx
 * <List>
 *   <ListItem
 *     label="Settings"
 *     onClick={() => navigate('/settings')}
 *   />
 *   <ListItem
 *     label="Profile"
 *     onClick={() => navigate('/profile')}
 *   />
 * </List>
 * ```
 *
 * @example With icons and subtitles
 * ```tsx
 * <ListItem
 *   decorator={<SettingsIcon size={24} />}
 *   label="Account Settings"
 *   subtitle="User preferences and security options"
 *   onClick={handleSettingsClick}
 * />
 * ```
 *
 * @example With selection state
 * ```tsx
 * const [selected, setSelected] = useState('settings');
 *
 * <List>
 *   <ListItem
 *     decorator={<HomeIcon size={24} />}
 *     label="Dashboard"
 *     selected={selected === 'dashboard'}
 *     onClick={() => setSelected('dashboard')}
 *   />
 *   <ListItem
 *     decorator={<SettingsIcon size={24} />}
 *     label="Settings"
 *     selected={selected === 'settings'}
 *     onClick={() => setSelected('settings')}
 *   />
 * </List>
 * ```
 *
 * @example With right decorator
 * ```tsx
 * <ListItem
 *   label="Notifications"
 *   rightDecorator={<Badge>3</Badge>}
 *   onClick={handleNotificationsClick}
 * />
 * ```
 *
 * @example Disabled state
 * ```tsx
 * <ListItem
 *   label="Premium Feature"
 *   subtitle="Upgrade your plan to access"
 *   disabled={true}
 *   onClick={handlePremiumClick}
 * />
 * ```
 */
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
    return <img alt={label} className="mr-4 w-8 h-8 rounded-md" src={icon} />;
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
    className={cn(
      'p-2 px-4 flex flex-row gap-4 items-center min-h-[var(--amino-size-xl)] rounded-lg leading-4',
      !disabled && selected && 'bg-blue-50 [&_*]:text-blue-800',
      'active:outline-none active:bg-amino-hover-color',
      'focus:outline-none focus:bg-amino-hover-color',
      'hover:outline-none hover:bg-amino-hover-color',
      disabled && 'text-gray-600 cursor-not-allowed',
      !disabled &&
        !selected &&
        onClick &&
        'hover:bg-amino-hover-color cursor-pointer',
      className,
    )}
    onClick={e => !disabled && onClick?.(e)}
    style={style}
    type="button"
  >
    <div
      className={cn(
        '__icon-wrapper',
        !decorator && 'hidden',
        decorator && 'inline-block',
      )}
    >
      {decorator}
      <ListIcon label={typeof label === 'string' ? label : ''} />
    </div>

    <div className="flex flex-col items-start gap-[2px] flex-grow">
      <Text type="label">{label}</Text>
      {subtitle && <Text type="caption">{subtitle}</Text>}
    </div>
    {rightDecorator}
  </button>
);
