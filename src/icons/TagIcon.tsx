import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TagIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.45 10.8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12.803 4a2.75 2.75 0 0 0-1.901.763l-6.043 5.782a2.75 2.75 0 0 0-.043 3.931l4.708 4.708a2.75 2.75 0 0 0 3.932-.043l5.781-6.042A2.75 2.75 0 0 0 20 11.197V5.75A1.75 1.75 0 0 0 18.25 4zm-.864 1.847a1.25 1.25 0 0 1 .864-.347h5.447a.25.25 0 0 1 .25.25v5.447c0 .322-.124.632-.347.865l-5.781 6.042a1.25 1.25 0 0 1-1.787.02l-4.709-4.708a1.25 1.25 0 0 1 .02-1.788z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
