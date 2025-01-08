import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TruckIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.75 6.5c-.69 0-1.25.56-1.25 1.25V14c0 .498.302.934.736 1.134a2.75 2.75 0 0 1 5.076.116h3.376a2.75 2.75 0 0 1 5.076-.116c.434-.2.736-.636.736-1.134v-1.508a.25.25 0 0 0-.098-.198l-2.657-2.044H13.5a2.75 2.75 0 0 1-2.75-2.75v-1zm6.5 0v1c0 .69.56 1.25 1.25 1.25h2.585l-.41-2.049a.25.25 0 0 0-.245-.201zm5.43 2.577-.534-2.67A1.75 1.75 0 0 0 15.43 5H5.75A2.75 2.75 0 0 0 3 7.75V14c0 1.27.868 2.33 2.029 2.65a2.75 2.75 0 0 0 5.426.1h3.09a2.75 2.75 0 0 0 5.426-.1A2.76 2.76 0 0 0 21 14v-1.508a1.75 1.75 0 0 0-.683-1.387zm-.19 7.008.001.017a1.25 1.25 0 1 1-.002-.017Zm-10.981.017a1.25 1.25 0 1 0 2.483.296 1.25 1.25 0 0 0-2.483-.296"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
