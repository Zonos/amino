import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BufferWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 5.094 5.462 8 12 10.906 18.538 8 12 5.094Zm-.61-1.918a1.5 1.5 0 0 1 1.22 0l7.768 3.453c1.188.528 1.188 2.214 0 2.742l-7.769 3.452a1.5 1.5 0 0 1-1.218 0L3.62 9.371c-1.187-.528-1.187-2.214 0-2.742l7.77-3.453ZM3.085 12.1a1 1 0 0 1 1.317-.515L12 14.908l7.599-3.324a1 1 0 0 1 .802 1.832l-7.8 3.412a1.5 1.5 0 0 1-1.202 0l-7.8-3.412a1 1 0 0 1-.515-1.317Zm0 4a1 1 0 0 1 1.317-.515L12 18.908l7.599-3.324a1 1 0 0 1 .802 1.832l-7.8 3.412a1.5 1.5 0 0 1-1.202 0l-7.8-3.412a1 1 0 0 1-.515-1.317Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);