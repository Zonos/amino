import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClearIcon = forwardRef<SVGSVGElement, IconProps>(
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
        clipRule="evenodd"
        d="M8.75 4A4.75 4.75 0 0 0 4 8.75V19a1 1 0 0 0 1 1h10.25A4.75 4.75 0 0 0 20 15.25v-3a1 1 0 0 0-1-1h-4.095a3 3 0 0 0-2.155-2.155V5a1 1 0 0 0-1-1zM5.5 8.75A3.25 3.25 0 0 1 8.75 5.5h2.5v4c0 .57.452.958.917 1.01a1.5 1.5 0 0 1 1.324 1.323c.051.465.438.917 1.009.917h4v2.5a3.25 3.25 0 0 1-3.25 3.25H5.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M15.36 5.858a.75.75 0 1 0-.72 1.315 5.53 5.53 0 0 1 2.187 2.188.75.75 0 0 0 1.315-.721 7.03 7.03 0 0 0-2.781-2.782Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
