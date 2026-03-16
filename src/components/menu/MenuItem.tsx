import type { MouseEventHandler, ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

type MenuItemProps = BaseProps & {
  /**
   * Content to display in the menu item
   */
  children: ReactNode;
  /**
   * Whether the menu item is disabled and cannot be clicked
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional icon to display before the menu item text
   */
  icon?: ReactNode;
  /**
   * Function to call when the menu item is clicked
   */
  onClick?: MouseEventHandler;
};

/**
 * MenuItem component represents a clickable option in a dropdown menu.
 * Each MenuItem is typically placed within a Menu component.
 *
 * @example Basic usage
 * ```tsx
 * <Menu>
 *   <MenuItem onClick={handleClick}>Settings</MenuItem>
 *   <MenuItem onClick={handleLogout}>Logout</MenuItem>
 * </Menu>
 * ```
 *
 * @example With icons
 * ```tsx
 * <Menu>
 *   <MenuItem icon={<SettingsIcon />} onClick={handleSettings}>
 *     Settings
 *   </MenuItem>
 *   <MenuItem icon={<LogoutIcon />} onClick={handleLogout}>
 *     Logout
 *   </MenuItem>
 * </Menu>
 * ```
 *
 * @example Disabled state
 * ```tsx
 * <Menu>
 *   <MenuItem onClick={handleEdit}>Edit</MenuItem>
 *   <MenuItem disabled onClick={handleDelete}>
 *     Delete
 *   </MenuItem>
 * </Menu>
 * ```
 *
 * @example With MenuButton
 * ```tsx
 * <MenuButton action={<Button size="sm">Actions</Button>}>
 *   <Menu>
 *     <MenuItem onClick={() => handleAction('view')}>
 *       View Details
 *     </MenuItem>
 *     <MenuItem onClick={() => handleAction('edit')}>
 *       Edit Item
 *     </MenuItem>
 *     <MenuItem disabled={!canDelete} onClick={() => handleAction('delete')}>
 *       Delete Item
 *     </MenuItem>
 *   </Menu>
 * </MenuButton>
 * ```
 */
export const MenuItem = ({
  children,
  className,
  disabled,
  icon,
  onClick,
  style,
}: MenuItemProps) => (
  <li
    className={cn(
      disabled &&
        `[&_.menu-button]:opacity-amino-disabled
        [&_.menu-button]:cursor-not-allowed`,
      className,
    )}
    style={style}
  >
    <button
      className="menu-button p-amino-8 rounded-amino-6 text-amino-base
        hover:bg-hover [&_svg]:mr-amino-8 flex w-full cursor-pointer
        items-center leading-6 select-none active:outline-none
        dark:hover:bg-gray-100 [&_a]:block [&_a]:w-full"
      onClick={e => !disabled && onClick?.(e)}
      type="button"
    >
      {icon}
      {children}
    </button>
  </li>
);
