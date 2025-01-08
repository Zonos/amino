import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BufferDuotoneIcon = forwardRef<
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
      clipRule="evenodd"
      d="M6.703 9.986a.75.75 0 0 1 .38-.103h9.834a.75.75 0 0 1 .38.103l2.332 1.367a.75.75 0 0 1 0 1.294l-1.455.853 1.455.853a.75.75 0 0 1 0 1.294l-7.25 4.25a.75.75 0 0 1-.758 0l-7.25-4.25a.75.75 0 0 1 0-1.294l1.455-.853-1.455-.853a.75.75 0 0 1 0-1.294zm.606 4.383L6.233 15 12 18.38 17.767 15l-1.076-.63-4.312 2.527a.75.75 0 0 1-.758 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M12.38 4.103a.75.75 0 0 0-.76 0l-7.25 4.25a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .76 0l7.25-4.25a.75.75 0 0 0 0-1.294z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
