import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const SettingsDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C1C1C4'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.072a1 1 0 0 0 1.5.866l.928-.536a2 2 0 0 1 2.732.732l1 1.732a2 2 0 0 1-.732 2.732l-.928.536a1 1 0 0 0 0 1.732l.928.536a2 2 0 0 1 .732 2.732l-1 1.732a2 2 0 0 1-2.732.732l-.928-.536a1 1 0 0 0-1.5.866V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.072a1 1 0 0 0-1.5-.866l-.928.536a2 2 0 0 1-2.732-.732l-1-1.732a2 2 0 0 1 .732-2.732l.928-.536a1 1 0 0 0 0-1.732l-.928-.536a2 2 0 0 1-.732-2.732l1-1.732a2 2 0 0 1 2.732-.732l.928.536A1 1 0 0 0 9 5.072V4Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </IconBase>
));
