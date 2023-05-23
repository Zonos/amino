import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const HelpDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray300}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.25 9a.734.734 0 0 0-.697.502l-.105.314a1 1 0 0 1-1.897-.632l.105-.314a2.734 2.734 0 0 1 5.188 0l.023.069c.088.264.133.54.133.82v.21a2.32 2.32 0 0 1-1.758 2.251.32.32 0 0 0-.242.31V13a1 1 0 1 1-2 0v-.47a2.32 2.32 0 0 1 1.757-2.25.32.32 0 0 0 .243-.31v-.212a.593.593 0 0 0-.03-.187l-.024-.069A.734.734 0 0 0 12.25 9ZM12 15a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V16a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
