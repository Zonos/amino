import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PaletteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 16 16"
    >
      <path
        d="M5 12.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M0 2.75A2.75 2.75 0 0 1 2.75 0h4.5c.857 0 1.623.392 2.127 1.007.193-.027.459-.053.754-.05.559.003 1.444.106 2.043.744l3.08 3.273a2.75 2.75 0 0 1-.038 3.809l-2.93 2.992a.75.75 0 1 1-1.072-1.05l2.93-2.992a1.25 1.25 0 0 0 .018-1.73l-3.08-3.275c-.156-.165-.49-.269-.961-.272-.046 0-.092 0-.136.002.01.096.015.193.015.292v10.5A2.75 2.75 0 0 1 7.25 16h-4.5A2.75 2.75 0 0 1 0 13.25V2.75ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-4.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
