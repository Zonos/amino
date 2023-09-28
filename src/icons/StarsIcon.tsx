import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarsIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10 4a.75.75 0 0 1 .75.75c0 1.101.535 2.231 1.402 3.098.867.867 1.997 1.402 3.098 1.402a.75.75 0 0 1 0 1.5c-1.101 0-2.231.535-3.098 1.402-.867.867-1.402 1.997-1.402 3.098a.75.75 0 0 1-1.5 0c0-1.101-.535-2.231-1.402-3.098-.867-.867-1.997-1.402-3.098-1.402a.75.75 0 0 1 0-1.5c1.101 0 2.231-.535 3.098-1.402.867-.867 1.402-1.997 1.402-3.098A.75.75 0 0 1 10 4Zm0 3.477A6.678 6.678 0 0 1 8.909 8.91 6.678 6.678 0 0 1 7.477 10 6.705 6.705 0 0 1 10 12.523a6.677 6.677 0 0 1 1.091-1.432A6.677 6.677 0 0 1 12.523 10a6.678 6.678 0 0 1-1.432-1.091A6.676 6.676 0 0 1 10 7.477Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M19 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM11.25 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17 14a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 17 14Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
