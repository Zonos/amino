import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CodeCircleDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: string }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        fill="currentColor"
      />
      <path
        d="M13.711 9.237a.75.75 0 0 0-1.422-.474l-2 6a.75.75 0 1 0 1.422.474l2-6ZM7 12a1 1 0 0 1 .293-.707l1-1a1 1 0 0 1 1.414 1.414L9.414 12l.293.293a1 1 0 0 1-1.414 1.414l-1-1A1 1 0 0 1 7 12Zm10 0a1 1 0 0 0-.293-.707l-1-1a1 1 0 0 0-1.414 1.414l.293.293-.293.293a1 1 0 0 0 1.414 1.414l1-1A1 1 0 0 0 17 12Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
});
