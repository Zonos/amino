import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Divider.module.scss';

type Props = BaseProps & {
  /**
   * @default false
   */
  noMargin?: boolean;
  /**
   * @default false
   */
  vertical?: boolean;
};

/**
 * Divider component creates a visual separation between content sections.
 * It can be displayed horizontally or vertically and supports custom styling.
 *
 * @example Basic horizontal divider
 * <Divider />
 *
 * @example Vertical divider
 * <div style={{ height: '50px', display: 'flex' }}>
 *   <span>Left content</span>
 *   <Divider vertical />
 *   <span>Right content</span>
 * </div>
 *
 * @example Without margin
 * <Divider noMargin />
 *
 * @example Custom styling
 * <Divider className="custom-divider" style={{ borderColor: '#ff0000' }} />
 *
 * @example In a card layout
 * <Card>
 *   <CardHeader>Section 1</CardHeader>
 *   <CardContent>Content for section 1</CardContent>
 *   <Divider />
 *   <CardHeader>Section 2</CardHeader>
 *   <CardContent>Content for section 2</CardContent>
 * </Card>
 *
 * @example Between form fields
 * <VStack>
 *   <Input label="First Name" />
 *   <Divider />
 *   <Input label="Last Name" />
 * </VStack>
 *
 * @example In sidebar navigation
 * <VStack>
 *   <NavItem>Home</NavItem>
 *   <NavItem>Dashboard</NavItem>
 *   <Divider />
 *   <NavItem>Settings</NavItem>
 *   <NavItem>Profile</NavItem>
 * </VStack>
 */
export const Divider = ({
  className,
  noMargin = false,
  style,
  vertical = false,
}: Props) =>
  vertical ? (
    <hr
      className={clsx(
        styles.dividerVertical,
        noMargin && styles.noMargin,
        className,
      )}
      style={style}
    />
  ) : (
    <hr
      className={clsx(
        styles.dividerHorizontal,
        noMargin && styles.noMargin,
        className,
      )}
      style={style}
    />
  );
