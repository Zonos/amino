import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LikeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12.556 5a2.75 2.75 0 0 0-1.906.768L8.343 7.985A2.75 2.75 0 0 0 7.5 9.967v6.283A2.75 2.75 0 0 0 10.25 19h5.89c1.293 0 2.41-.9 2.687-2.162l1.124-5.134a2.75 2.75 0 0 0-2.686-3.339H15.75a.25.25 0 0 1-.25-.25V6.75A1.75 1.75 0 0 0 13.75 5zm-.867 1.849a1.25 1.25 0 0 1 .867-.349h1.194a.25.25 0 0 1 .25.25v1.365c0 .967.784 1.75 1.75 1.75h1.515a1.25 1.25 0 0 1 1.22 1.518l-1.123 5.134a1.25 1.25 0 0 1-1.221.983H10.25c-.69 0-1.25-.56-1.25-1.25V9.967c0-.34.139-.665.384-.901z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M5.5 10.25a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
