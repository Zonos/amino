import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const WarningDuotoneIcon = forwardRef<
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
      d="M9.377 4.661c1.143-2.057 4.102-2.057 5.245 0l6.601 11.882c1.111 2-.335 4.457-2.622 4.457H5.399c-2.288 0-3.734-2.457-2.623-4.457L9.377 4.661Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm0 6.99a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
