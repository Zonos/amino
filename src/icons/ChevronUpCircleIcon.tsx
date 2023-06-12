import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 19.9a7.9 7.9 0 1 0 0-15.8 7.9 7.9 0 0 0 0 15.8ZM22.1 12c0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1Zm-6.322 1.778a1.1 1.1 0 0 1-1.556 0L12 11.556l-2.222 2.222a1.1 1.1 0 1 1-1.556-1.556l2.647-2.646a1.6 1.6 0 0 1 2.263 0l2.646 2.646a1.1 1.1 0 0 1 0 1.556Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
