import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.646 4.37a.75.75 0 0 0-1.292 0L9.01 8.353 4.56 9.525a.75.75 0 0 0-.36 1.235l2.438 2.625a.75.75 0 1 0 1.1-1.02L6.15 10.657l3.44-.905a1 1 0 0 0 .608-.46L12 6.228l.604 1.026a.75.75 0 1 0 1.293-.76l-1.25-2.125Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M19.78 4.22a.75.75 0 0 1 0 1.06l-3.43 3.431 3.09.814a.75.75 0 0 1 .36 1.235l-2.98 3.21 1.161 5.114a.75.75 0 0 1-1.053.843L12 17.581l-4.928 2.346a.75.75 0 0 1-1.053-.843l.012-.054-.75.75a.75.75 0 0 1-1.061-1.06l14.5-14.5a.75.75 0 0 1 1.06 0M7.964 17.097l7.158-7.158 2.727.718-2.309 2.486a1 1 0 0 0-.242.902l.878 3.863-3.746-1.784a1 1 0 0 0-.86 0l-3.746 1.784.126-.554a.8.8 0 0 0 .014-.257"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
