import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a.75.75 0 0 1 .646.37l2.344 3.983 4.45 1.172a.75.75 0 0 1 .36 1.235l-2.98 3.21 1.161 5.114a.75.75 0 0 1-1.053.843L12 17.581l-4.928 2.346a.75.75 0 0 1-1.053-.843L7.18 13.97 4.2 10.76a.75.75 0 0 1 .358-1.235L9.01 8.353l2.344-3.983A.75.75 0 0 1 12 4m0 2.23-1.801 3.06a1 1 0 0 1-.608.46l-3.44.906 2.309 2.486a1 1 0 0 1 .242.902l-.878 3.863 3.746-1.784a1 1 0 0 1 .86 0l3.746 1.784-.878-3.863a1 1 0 0 1 .242-.902l2.309-2.486-3.44-.905a1 1 0 0 1-.608-.46L12 6.228Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
