import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronRightCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4.1 12a7.9 7.9 0 1 0 15.8 0 7.9 7.9 0 0 0-15.8 0ZM12 22.1C6.422 22.1 1.9 17.578 1.9 12 1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1Zm-1.778-6.322a1.1 1.1 0 0 1 0-1.556L12.444 12l-2.222-2.222a1.1 1.1 0 1 1 1.556-1.556l2.646 2.647a1.6 1.6 0 0 1 0 2.262l-2.646 2.647a1.1 1.1 0 0 1-1.556 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
