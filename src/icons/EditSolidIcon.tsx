import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EditSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m13.398 6.412-6.364 6.364 4.243 4.242 6.364-6.364-4.243-4.242Zm5.657 2.828 1.412-1.412a2 2 0 0 0 0-2.828l-1.415-1.414a2 2 0 0 0-2.828 0l-1.412 1.412 4.243 4.242Zm-9.193 9.193L5.62 14.19l-1.546 1.545a2 2 0 0 0-.56 1.091l-.5 3.064a1 1 0 0 0 1.148 1.149l3.064-.502a2 2 0 0 0 1.091-.56l1.545-1.544Z"
      />
    </IconBase>
  )
);
