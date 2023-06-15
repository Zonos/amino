import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LandedCostIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 4.062A8.002 8.002 0 0 0 12 20a8.002 8.002 0 0 0 7.938-7H14.95c-.712 0-1.203-.565-1.257-1.158a1.7 1.7 0 0 0-1.535-1.535C11.565 10.253 11 9.762 11 9.05V4.062Zm.445-2.047C12.33 1.967 13 2.687 13 3.5v4.937A3.706 3.706 0 0 1 15.563 11H20.5c.814 0 1.533.67 1.485 1.555C21.697 17.82 17.337 22 12 22 6.477 22 2 17.523 2 12c0-5.337 4.18-9.696 9.445-9.985Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M14.514 4.863a1 1 0 0 1 1.345-.437 8.5 8.5 0 0 1 3.714 3.715 1 1 0 0 1-1.782.908 6.5 6.5 0 0 0-2.84-2.84 1 1 0 0 1-.437-1.346Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
