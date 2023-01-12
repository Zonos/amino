import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BufferIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 5.204 5.708 8 12 10.796 18.292 8 12 5.204Zm-.65-2.119a1.6 1.6 0 0 1 1.3 0l7.769 3.453c1.267.563 1.267 2.361 0 2.924l-7.77 3.453a1.6 1.6 0 0 1-1.299 0L3.581 9.462c-1.267-.563-1.267-2.36 0-2.924l7.77-3.453ZM2.992 12.06a1.1 1.1 0 0 1 1.449-.567L12 14.8l7.56-3.307a1.1 1.1 0 1 1 .88 2.016l-7.799 3.412a1.6 1.6 0 0 1-1.282 0l-7.8-3.412a1.1 1.1 0 0 1-.567-1.449Zm0 4a1.1 1.1 0 0 1 1.449-.567L12 18.8l7.56-3.307a1.1 1.1 0 1 1 .88 2.016l-7.799 3.412a1.6 1.6 0 0 1-1.282 0l-7.8-3.412a1.1 1.1 0 0 1-.567-1.449Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);