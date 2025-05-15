import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Menu.module.scss';

export type MenuProps = BaseProps & {
  /**
   * Menu items to be displayed
   * Typically MenuItem components
   */
  children?: ReactNode;
};

/**
 * Menu component provides a container for dropdown menu items.
 * It's typically used with MenuItem components and the MenuButton component.
 *
 * @example Basic usage
 * ```tsx
 * <Menu>
 *   <MenuItem>Profile settings</MenuItem>
 *   <MenuItem>Account settings</MenuItem>
 *   <MenuItem>Help</MenuItem>
 * </Menu>
 * ```
 *
 * @example With MenuButton
 * ```tsx
 * <MenuButton action={<Button>Options</Button>}>
 *   <Menu>
 *     <MenuItem onClick={handleEdit}>Edit</MenuItem>
 *     <MenuItem onClick={handleDelete}>Delete</MenuItem>
 *   </Menu>
 * </MenuButton>
 * ```
 *
 * @example With icons
 * ```tsx
 * <Menu>
 *   <MenuItem icon={<EditIcon />}>Edit</MenuItem>
 *   <MenuItem icon={<TrashIcon />}>Delete</MenuItem>
 *   <MenuItem icon={<CopyIcon />}>Duplicate</MenuItem>
 * </Menu>
 * ```
 *
 * @example With disabled items
 * ```tsx
 * <Menu>
 *   <MenuItem>Edit</MenuItem>
 *   <MenuItem disabled>Delete</MenuItem>
 *   <MenuItem>Duplicate</MenuItem>
 * </Menu>
 * ```
 */
export const Menu = ({ children, className, style }: MenuProps) => (
  <div className={clsx(className, styles.menu)} style={style}>
    {children}
  </div>
);
