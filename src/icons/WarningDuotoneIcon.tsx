import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const WarningDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M14.46 5.492c-1.014-2.027-3.906-2.027-4.92 0L4.276 16.02c-.914 1.83.416 3.98 2.46 3.98h10.528c2.044 0 3.374-2.151 2.46-3.98z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M12.75 10a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm0 5.5a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"
      fill="currentColor"
    />
  </IconBase>
));
