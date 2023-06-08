import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LoginIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M10.9 4A1.1 1.1 0 0 1 12 2.9h6A3.1 3.1 0 0 1 21.1 6v12a3.1 3.1 0 0 1-3.1 3.1h-6a1.1 1.1 0 0 1 0-2.2h6a.9.9 0 0 0 .9-.9V6a.9.9 0 0 0-.9-.9h-6A1.1 1.1 0 0 1 10.9 4Zm1.322 4.222a1.1 1.1 0 0 1 1.556 0l2.646 2.647a1.6 1.6 0 0 1 0 2.262l-2.646 2.647a1.1 1.1 0 1 1-1.556-1.556l1.122-1.122H4a1.1 1.1 0 0 1 0-2.2h9.344l-1.122-1.122a1.1 1.1 0 0 1 0-1.556Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
