import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 2a1 1 0 0 1 1 1v1.083c2.838.476 5 2.944 5 5.917v1.099c0 .595.247 1.164.682 1.57A4.178 4.178 0 0 1 20 15.715C20 18.05 18.109 20 15.747 20H14a2 2 0 1 1-4 0H8.253C5.891 20 4 18.05 4 15.715c0-1.145.474-2.258 1.318-3.046.435-.406.682-.975.682-1.57V10a6.002 6.002 0 0 1 5-5.917V3a1 1 0 0 1 1-1Zm0 4a4 4 0 0 0-4 4v1.099c0 1.15-.477 2.248-1.318 3.032A2.178 2.178 0 0 0 6 15.715C6 16.972 7.021 18 8.253 18h7.494C16.979 18 18 16.972 18 15.715c0-.6-.25-1.18-.682-1.584A4.148 4.148 0 0 1 16 11.1V10a4 4 0 0 0-4-4Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
