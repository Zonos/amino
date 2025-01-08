import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LeftPanelClosedIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.25 5A2.75 2.75 0 0 1 21 7.75v8.5A2.75 2.75 0 0 1 18.25 19H5.75A2.75 2.75 0 0 1 3 16.25v-8.5A2.75 2.75 0 0 1 5.75 5zm1.25 2.75c0-.69-.56-1.25-1.25-1.25H10v11h8.25c.69 0 1.25-.56 1.25-1.25zm-11 9.75H5.75c-.69 0-1.25-.56-1.25-1.25v-8.5c0-.69.56-1.25 1.25-1.25H8.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
