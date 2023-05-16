import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const RocketDuotoneIcon = forwardRef<
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
      d="M18.612 12.93a11.964 11.964 0 0 0 3.152-8.093v-.548a1.71 1.71 0 0 0-1.71-1.709h-.547c-3.003 0-5.89 1.13-8.092 3.152l-4.367-.29a2.1 2.1 0 0 0-1.625.61l-1.8 1.8a2.1 2.1 0 0 0 0 2.97l9.9 9.9a2.1 2.1 0 0 0 2.97 0l1.8-1.801a2.1 2.1 0 0 0 .61-1.625l-.291-4.366Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.179 13.509a1.1 1.1 0 0 1 0 1.556l-1.061 1.06a1.1 1.1 0 1 1-1.556-1.555l1.061-1.061a1.1 1.1 0 0 1 1.556 0ZM7.3 17.044a1.1 1.1 0 0 1 0 1.556l-1.414 1.414A1.1 1.1 0 1 1 4.33 18.46l1.414-1.415a1.1 1.1 0 0 1 1.556 0Zm3.536 2.122a1.1 1.1 0 0 1 0 1.555l-1.061 1.061a1.1 1.1 0 1 1-1.556-1.555l1.06-1.061a1.1 1.1 0 0 1 1.557 0Z"
      clipRule="evenodd"
    />
  </IconBase>
));
