import { type ReactNode } from 'react';

import MuiCollapse, {
  type CollapseProps as MuiCollapseProps,
} from '@mui/material/Collapse';

// https://mui.com/material-ui/api/collapse

export type CollapseProps = {
  children: ReactNode;
  className?: string;
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
}: CollapseProps) => (
  <MuiCollapse
    className={className}
    collapsedSize={collapseSize}
    in={!collapsed}
    orientation={orientation}
  >
    {children}
  </MuiCollapse>
);
