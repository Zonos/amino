import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ImageDuotoneIcon = forwardRef<
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
      d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m4.966 2.682a1.25 1.25 0 0 1 1.618-.024l1.346 1.108a.75.75 0 0 0 .953-1.158L16.788 12a2.75 2.75 0 0 0-3.56.054l-1.86 1.627a1.25 1.25 0 0 1-1.218.245l-1.16-.386a2.75 2.75 0 0 0-2.022.112l-.906.418a.75.75 0 0 0 .628 1.362l.906-.418a1.25 1.25 0 0 1 .92-.051l1.16.387a2.75 2.75 0 0 0 2.681-.54l1.86-1.627Z"
      fill="currentColor"
    />
  </IconBase>
));
