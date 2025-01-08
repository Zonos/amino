import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CardIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.25 14a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M3 7.75A2.75 2.75 0 0 1 5.75 5h12.5A2.75 2.75 0 0 1 21 7.75v8.5A2.75 2.75 0 0 1 18.25 19H5.75A2.75 2.75 0 0 1 3 16.25zM5.75 6.5c-.69 0-1.25.56-1.25 1.25v.75h15v-.75c0-.69-.56-1.25-1.25-1.25zM4.5 16.25V10h15v6.25c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
