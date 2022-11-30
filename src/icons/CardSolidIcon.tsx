import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CardSolidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.807 8c-.283 0-.424 0-.534-.057a.511.511 0 0 1-.22-.23c-.052-.111-.046-.247-.034-.519.03-.692.107-1.162.308-1.556a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.2.394.278.864.308 1.556.012.272.018.408-.035.52a.511.511 0 0 1-.22.229c-.109.057-.25.057-.533.057H2.807ZM2 10.8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218C2.38 10 2.52 10 2.8 10h18.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2v-4.4ZM7 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
