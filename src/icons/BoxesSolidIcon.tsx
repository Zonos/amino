import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BoxesSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0-.5.5V14a1 1 0 1 1-2 0v-1.5a.5.5 0 0 0-.5-.5H15ZM5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0-.5.5V14a1 1 0 1 1-2 0v-1.5a.5.5 0 0 0-.5-.5H5Zm5-10a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0-.5.5V4a1 1 0 1 1-2 0V2.5a.5.5 0 0 0-.5-.5H10Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
