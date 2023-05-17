import type { ReactNode } from 'react';

import type { ITheme } from 'src/types/ITheme';

import { BaseDialog } from '../dialog/_BaseDialog';

export type LightBoxProps = {
  className?: string;
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  theme?: ITheme;
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
  theme: _theme,
  width,
  withBorder = false,
  closeOnBlur,
  closeOnEsc,
}: LightBoxProps) => (
  <BaseDialog
    className={className}
    data-theme={_theme}
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
