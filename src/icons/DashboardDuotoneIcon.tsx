import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const DashboardDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M2.534 3.779a1 1 0 0 1 1.245-1.245l7.934 2.38a1 1 0 0 0 .574 0l7.934-2.38a1 1 0 0 1 1.245 1.245l-2.38 7.934a1 1 0 0 0 0 .574l2.38 7.934a1 1 0 0 1-1.245 1.245l-7.934-2.38a1 1 0 0 0-.574 0l-7.934 2.38a1 1 0 0 1-1.245-1.245l2.38-7.934a1 1 0 0 0 0-.574l-2.38-7.934Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M8.267 8.89a.5.5 0 0 1 .622-.623l3.082.924a.1.1 0 0 0 .058 0l3.082-.924a.5.5 0 0 1 .622.622l-.924 3.082a.1.1 0 0 0 0 .058l.924 3.082a.5.5 0 0 1-.622.622l-3.082-.924a.1.1 0 0 0-.058 0l-3.082.924a.5.5 0 0 1-.622-.622l.924-3.082a.1.1 0 0 0 0-.058L8.267 8.89Z"
      fill="currentColor"
    />
  </IconBase>
));
