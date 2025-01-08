import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LogoutIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14 18.5H6.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25H14A.75.75 0 0 0 14 4H6.75A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20H14a.75.75 0 0 0 0-1.5"
        fill="currentColor"
      />
      <path
        d="M15.645 14.649a.75.75 0 0 0 1.06 1.06l3.002-3.002a1 1 0 0 0 0-1.414L16.705 8.29a.75.75 0 0 0-1.06 1.06l1.898 1.899H8.75a.75.75 0 0 0 0 1.5h8.793z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
