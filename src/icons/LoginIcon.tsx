import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LoginIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10 5.5h7.25c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H10a.75.75 0 0 0 0 1.5h7.25A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4H10a.75.75 0 0 0 0 1.5"
        fill="currentColor"
      />
      <path
        d="M11.644 14.649a.75.75 0 0 0 1.061 1.06l3.002-3.002a1 1 0 0 0 0-1.414L12.705 8.29a.75.75 0 0 0-1.06 1.06l1.898 1.899H4.75a.75.75 0 0 0 0 1.5h8.793z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
