import type { ReactElement, ReactNode } from 'react';

import { Collapse } from 'src/components/collapse/Collapse';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type NavigationItemProps = BaseProps & {
  /**
   * Text or element to display as the navigation item
   */
  content: ReactNode;
  /**
   * Optional icon to display before the content
   */
  icon?: ReactNode;
  /**
   * Whether the navigation item is currently active/selected
   * @default false
   */
  isActive?: boolean;
};

export type NavigationGroupProps = BaseProps & {
  /**
   * Child navigation items to show in the collapsible group
   */
  children: ReactNode;
  /**
   * Whether the navigation group is collapsed (closed)
   * @default false
   */
  collapsed?: boolean;
  /**
   * The main navigation item that acts as the group header
   *
   * **NOTE**: Should be a `NavigationItem` component for proper styling.
   * If you want to use `href`, wrap the `anchor` tag outside of the `NavigationItem` component.
   */
  content: ReactElement<NavigationItemProps> | ReactElement<HTMLAnchorElement>;
};

/**
 * NavigationItem component renders a single navigation item with optional icon
 * and active state styling.
 *
 * @example Basic usage
 * ```tsx
 * <NavigationItem
 *   content="Dashboard"
 *   icon={<DashboardIcon size={24} />}
 * />
 * ```
 *
 * @example Active state
 * ```tsx
 * <NavigationItem
 *   content="Settings"
 *   icon={<SettingsIcon size={24} />}
 *   isActive={true}
 * />
 * ```
 *
 * @example With anchor tag for navigation
 * ```tsx
 * <a href="/dashboard">
 *   <NavigationItem
 *     content="Dashboard"
 *     icon={<DashboardIcon size={24} />}
 *     isActive={currentPath === '/dashboard'}
 *   />
 * </a>
 * ```
 */
export const NavigationItem = ({
  className,
  content,
  icon,
  isActive = false,
  style,
}: NavigationItemProps) => (
  <div
    className={cn(
      'flex items-center gap-amino-8 h-[28px] px-amino-8 py-amino-4 text-gray-800 dark:text-gray-200 text-amino-base font-medium rounded-amino-6 mb-[2px]',
      'hover:bg-hover hover:text-gray-1000 dark:hover:text-gray-1000',
      '[&_svg]:text-gray-600 dark:[&_svg]:text-gray-400 [&_svg]:h-amino-24 [&_svg]:w-amino-24 [&_svg]:ml-amino-negative-4',
      'hover:[&_svg]:text-gray-800 dark:hover:[&_svg]:text-gray-800',
      isActive &&
        'bg-gray-100 dark:bg-gray-900 text-gray-1000 [&_svg]:text-gray-1000',
      className,
    )}
    style={style}
  >
    {icon && <div className="flex-shrink-0 flex-grow-0">{icon}</div>}
    {content}
  </div>
);

/**
 * NavigationGroup component provides a collapsible group of navigation items
 * with a header item that toggles the group's expanded/collapsed state.
 *
 * @example Basic usage
 * ```tsx
 * <NavigationGroup
 *   content={
 *     <NavigationItem
 *       content="Settings"
 *       icon={<SettingsIcon size={24} />}
 *     />
 *   }
 * >
 *   <NavigationItem content="Profile" />
 *   <NavigationItem content="Preferences" />
 *   <NavigationItem content="Security" />
 * </NavigationGroup>
 * ```
 *
 * @example With links and active state
 * ```tsx
 * <NavigationGroup
 *   collapsed={!pathname.includes('/settings')}
 *   content={
 *     <a href="/settings">
 *       <NavigationItem
 *         content="Settings"
 *         icon={<SettingsIcon size={24} />}
 *       />
 *     </a>
 *   }
 * >
 *   <a href="/settings/profile">
 *     <NavigationItem
 *       content="Profile"
 *       isActive={pathname === '/settings/profile'}
 *     />
 *   </a>
 *   <a href="/settings/preferences">
 *     <NavigationItem
 *       content="Preferences"
 *       isActive={pathname === '/settings/preferences'}
 *     />
 *   </a>
 * </NavigationGroup>
 * ```
 *
 * @example Multiple groups in navigation
 * ```tsx
 * <>
 *   <NavigationGroup
 *     collapsed={!pathname.includes('/dashboard')}
 *     content={
 *       <a href="/dashboard">
 *         <NavigationItem
 *           content="Dashboard"
 *           icon={<DashboardIcon size={24} />}
 *         />
 *       </a>
 *     }
 *   >
 *     <a href="/dashboard/analytics">
 *       <NavigationItem content="Analytics" />
 *     </a>
 *     <a href="/dashboard/reports">
 *       <NavigationItem content="Reports" />
 *     </a>
 *   </NavigationGroup>
 *
 *   <NavigationGroup
 *     collapsed={!pathname.includes('/settings')}
 *     content={
 *       <a href="/settings">
 *         <NavigationItem
 *           content="Settings"
 *           icon={<SettingsIcon size={24} />}
 *         />
 *       </a>
 *     }
 *   >
 *     <a href="/settings/profile">
 *       <NavigationItem content="Profile" />
 *     </a>
 *     <a href="/settings/account">
 *       <NavigationItem content="Account" />
 *     </a>
 *   </NavigationGroup>
 * </>
 * ```
 */
export const NavigationGroup = ({
  children,
  className,
  collapsed = false,
  content,
  style,
}: NavigationGroupProps) => (
  <div className={cn('flex flex-col', className)} style={style}>
    <div
      className={cn(
        !collapsed &&
          '[&_.navigation-item]:text-text-color [&_.navigation-item]:hover:bg-transparent [&_.navigation-item_svg]:text-gray-1000 dark:[&_.navigation-item_svg]:text-gray-100',
      )}
    >
      <div className="navigation-item">{content}</div>
    </div>
    <Collapse
      className="pl-amino-12 ml-[15px] border-l border-border-color"
      collapsed={collapsed}
    >
      {children}
    </Collapse>
  </div>
);
