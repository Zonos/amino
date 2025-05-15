import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Table.module.scss';

export type TableProps = BaseProps & {
  children: ReactNode;
  size?: 'medium' | 'small';
};

/**
 * Table component that provides styled tabular data presentation.
 * Used in combination with TableHead, TableBody, TableRow, TableCell, and TableFooter
 * to create structured tables with consistent styling.
 *
 * @example Basic table
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Name</TableCell>
 *       <TableCell>Email</TableCell>
 *       <TableCell>Role</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *       <TableCell>Admin</TableCell>
 *     </TableRow>
 *     <TableRow>
 *       <TableCell>Jane Smith</TableCell>
 *       <TableCell>jane@example.com</TableCell>
 *       <TableCell>User</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 *
 * @example With column groups
 * <Table>
 *   <colgroup>
 *     <col />
 *     <col width="40%" />
 *     <col width="20%" />
 *   </colgroup>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Product</TableCell>
 *       <TableCell>Description</TableCell>
 *       <TableCell>Price</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *   </TableBody>
 * </Table>
 *
 * @example With footer
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Item</TableCell>
 *       <TableCell>Quantity</TableCell>
 *       <TableCell>Price</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Widget</TableCell>
 *       <TableCell>2</TableCell>
 *       <TableCell>$10.00</TableCell>
 *     </TableRow>
 *     <TableRow>
 *       <TableCell>Gadget</TableCell>
 *       <TableCell>1</TableCell>
 *       <TableCell>$15.00</TableCell>
 *     </TableRow>
 *   </TableBody>
 *   <TableFooter>
 *     <TableRow>
 *       <TableCell colSpan={2} align="right">Total:</TableCell>
 *       <TableCell>$35.00</TableCell>
 *     </TableRow>
 *   </TableFooter>
 * </Table>
 *
 * @example Small size table
 * <Table size="small">
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Name</TableCell>
 *       <TableCell>Value</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *   </TableBody>
 * </Table>
 *
 * @example With expandable rows
 * <Table>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell>Category</TableCell>
 *       <TableCell>Amount</TableCell>
 *       <TableCell></TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRowCollapse
 *       collapsed={isCollapsed}
 *       onToggleCollapse={toggleCollapse}
 *       rowContent={
 *         <>
 *           <TableCell>Shipping</TableCell>
 *           <TableCell>$15.99</TableCell>
 *         </>
 *       }
 *     >
 *       <div>Additional shipping details here...</div>
 *     </TableRowCollapse>
 *   </TableBody>
 * </Table>
 */
export const Table = ({
  children,
  className,
  size = 'medium',
  style,
}: TableProps) => (
  <table
    className={clsx(className, styles.styledTable, `Amino-table-size-${size}`)}
    style={style}
  >
    {children}
  </table>
);
