import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlayIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.477 4.845A.9.9 0 0 0 6.1 5.61v12.783a.9.9 0 0 0 1.377.763l10.226-6.392a.9.9 0 0 0 0-1.526L7.477 4.845ZM3.9 5.61c0-2.435 2.678-3.92 4.743-2.63l10.226 6.392c1.943 1.214 1.943 4.044 0 5.258L8.643 21.02C6.578 22.31 3.9 20.826 3.9 18.392V5.607Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
