import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const IntegrationWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 12a8 8 0 0 1 8-8h3.91A2.09 2.09 0 0 1 17 6.09V8h3a1 1 0 1 1 0 2h-3v4h3a1 1 0 1 1 0 2h-3v1.91A2.09 2.09 0 0 1 14.91 20H11a8 8 0 0 1-8-8Zm8-6a6 6 0 1 0 0 12h3.91c.05 0 .09-.04.09-.09V6.09a.09.09 0 0 0-.09-.09H11Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
