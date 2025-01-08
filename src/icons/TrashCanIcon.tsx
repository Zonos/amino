import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TrashCanIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.5 13a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m3.75.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M15.489 6.75h3.761a.75.75 0 0 1 0 1.5h-.561l-.786 9.233A2.75 2.75 0 0 1 15.163 20H8.837a2.75 2.75 0 0 1-2.74-2.517L5.31 8.25h-.56a.75.75 0 0 1 0-1.5h3.761a2.75 2.75 0 0 1 2.739-2.5h1.5a2.75 2.75 0 0 1 2.739 2.5m-8.672 1.5.775 9.106A1.25 1.25 0 0 0 8.837 18.5h6.326c.65 0 1.19-.497 1.245-1.144l.775-9.106zm7.158-1.5c-.116-.57-.62-1-1.225-1h-1.5c-.605 0-1.11.43-1.225 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
