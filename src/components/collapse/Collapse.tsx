import type { ReactNode } from 'react';

import type { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse';
import MuiCollapse from '@mui/material/Collapse';

import type { BaseProps } from 'src/types/BaseProps';

// https://mui.com/material-ui/api/collapse

export type CollapseProps = BaseProps & {
  children: ReactNode;
  /**
   * Size when collapsed
   * @default 0
   */
  collapseSize?: number;
  /**
   * Collapsed state
   * @default false
   */
  collapsed?: boolean;
} & Pick<MuiCollapseProps, 'orientation'>;

export const Collapse = ({
  children,
  className,
  collapsed = false,
  collapseSize = 0,
  orientation,
  style,
}: CollapseProps) => (
  <MuiCollapse
    className={className}
    collapsedSize={collapseSize}
    in={!collapsed}
    orientation={orientation}
    style={style}
  >
    {children}
  </MuiCollapse>
);
