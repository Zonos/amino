import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RemoveCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a7.9 7.9 0 1 0 0 15.8 7.9 7.9 0 0 0 0-15.8ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1Zm6.322-3.778a1.1 1.1 0 0 1 1.556 0L12 10.444l2.222-2.222a1.1 1.1 0 1 1 1.556 1.556L13.555 12l2.223 2.222a1.1 1.1 0 1 1-1.556 1.556L12 13.556l-2.222 2.222a1.1 1.1 0 1 1-1.556-1.556L10.444 12 8.222 9.778a1.1 1.1 0 0 1 0-1.556Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
