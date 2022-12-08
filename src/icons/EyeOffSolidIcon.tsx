import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EyeOffSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m18.03 18.03-3.202-3.202a4 4 0 1 1-5.657-5.657L5.97 5.97c-2.058 1.552-3.196 3.638-3.7 4.77a3.088 3.088 0 0 0 0 2.52C3.14 15.213 5.892 20 12 20c2.566 0 4.54-.845 6.03-1.97Z"
      />
      <path
        fill="currentColor"
        d="M10.586 10.586a2 2 0 1 0 2.828 2.828l-2.828-2.828ZM12 4c6.11 0 8.861 4.788 9.73 6.74a3.088 3.088 0 0 1 0 2.52c-.155.35-.364.775-.634 1.24a1 1 0 0 1-1.73-1c.229-.398.406-.76.537-1.053a1.088 1.088 0 0 0 0-.893C19.11 9.772 16.856 6 12 6h-1a1 1 0 1 1 0-2h1Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
