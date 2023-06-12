import type { ReactNode } from 'react';

import type { Theme } from 'src/types/Theme';

import { BaseDialog } from '../dialog/_BaseDialog';

export type LightBoxProps = {
  children: ReactNode;
  className?: string;
  /** Close when clicking outside dialog (on the backdrop)
   * @param closeOnBlur
   * @default true
   */
  closeOnBlur?: boolean;
  /**
   * Close on pressing 'escape' key
   * @param closeOnEsc
   * @default true
   */
  closeOnEsc?: boolean;
  open: boolean;
  themeOverride?: Theme;
  width?: number;
  withBorder?: boolean;
  onClose: () => void;
};

export const LightBox = ({
  children,
  className,
  closeOnBlur,
  closeOnEsc,
  onClose,
  open,
  themeOverride,
  width,
  withBorder = false,
}: LightBoxProps) => (
  <BaseDialog
    className={className}
    closeOnBlur={closeOnBlur}
    closeOnEsc={closeOnEsc}
    data-theme={themeOverride}
    noBorder={!withBorder}
    onClose={onClose}
    open={open}
    width={width}
  >
    {children}
  </BaseDialog>
);
