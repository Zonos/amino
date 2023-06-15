import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ScreenIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.783 5a8 8 0 0 0-5.58.005 1 1 0 1 1-.7-1.873 10 10 0 0 1 6.976-.008A1 1 0 1 1 14.783 5Zm4.657-1.854c.943-.943 2.56-.278 2.56 1.06V11.5c0 5.523-4.477 10-10 10s-10-4.477-10-10V4.206c0-1.342 1.62-2 2.56-1.06l4.391 4.391a4.981 4.981 0 0 1 3.05-1.037c1.147 0 2.205.387 3.048 1.037l4.39-4.39ZM20 5.414l-4.032 4.032c-.53.531-1.345.453-1.803-.024A2.988 2.988 0 0 0 12 8.5c-.85 0-1.617.353-2.164.922-.46.478-1.273.556-1.804.025L4 5.414V11.5a8 8 0 1 0 16 0V5.414Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
