import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const WarningIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 9.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75m0 5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M14.46 5.492c-1.014-2.027-3.906-2.027-4.92 0L4.276 16.02c-.914 1.83.416 3.98 2.46 3.98h10.528c2.044 0 3.374-2.151 2.46-3.98zm-3.578.671c.46-.921 1.775-.921 2.236 0l5.264 10.528a1.25 1.25 0 0 1-1.118 1.809H6.736a1.25 1.25 0 0 1-1.118-1.809z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
