import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SendWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V7Zm4.257 1.331a1 1 0 0 1 1.412-.074L12 12.155l4.331-3.898a1 1 0 0 1 1.338 1.486l-4.666 4.2a1.5 1.5 0 0 1-2.006 0l-4.666-4.2a1 1 0 0 1-.074-1.412ZM18.586 18l-.293-.293a1 1 0 0 1 1.414-1.414l1.647 1.646a1.5 1.5 0 0 1 0 2.122l-1.647 1.646a1 1 0 0 1-1.414-1.414l.293-.293H15a1 1 0 1 1 0-2h3.586Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
