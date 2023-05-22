import type { ReactNode } from 'react';

import type { Theme } from 'src/types/Theme';

import { BaseDialog } from '../dialog/_BaseDialog';

export type LightBoxProps = {
  className?: string;
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  themeOverride?: Theme;
  width?: number;
  withBorder?: boolean;
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
};

export const LightBox = ({
  children,
  className,
  onClose,
  open,
  themeOverride,
  width,
  withBorder = false,
  closeOnBlur,
  closeOnEsc,
}: LightBoxProps) => (
  <BaseDialog
    className={className}
    data-theme={themeOverride}
    open={open}
    width={width}
    noBorder={!withBorder}
    onClose={onClose}
    closeOnBlur={closeOnBlur}
    closeOnEsc={closeOnEsc}
  >
    {children}
  </BaseDialog>
);
