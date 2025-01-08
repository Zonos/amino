import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RestrictIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.252 18.993A1 1 0 0 0 12.277 20l3.38-.084a1 1 0 0 0 .702-.314l3.164-3.354c.306-.325.477-.755.477-1.202V8.722a1 1 0 0 0-.345-.756L15.58 4.428A1.75 1.75 0 0 0 14.433 4H8.358a1 1 0 0 0-.69.275L4.312 7.47A1 1 0 0 0 4 8.195v3.94a1 1 0 0 0 1 1h4.891c.229.648.743 1.16 1.392 1.387zm4.159-.572-2.656.066.03-4.33c.005-.58-.451-.948-.877-1.018a.77.77 0 0 1-.634-.629c-.07-.42-.433-.876-1.01-.876H5.5V8.41L8.558 5.5h5.875a.25.25 0 0 1 .164.062L18.5 8.95v6.096a.25.25 0 0 1-.068.172z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M8.35 18.848a.75.75 0 1 0 .72-1.316 5.53 5.53 0 0 1-2.187-2.188.75.75 0 1 0-1.315.722 7.03 7.03 0 0 0 2.782 2.782"
        fill="currentColor"
      />
    </IconBase>
  ),
);
