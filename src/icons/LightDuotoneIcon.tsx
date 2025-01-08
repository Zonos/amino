import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LightDuotoneIcon = forwardRef<
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
      d="M12 4c-4.005 0-6 3.183-6 6 0 2.235.856 3.533 1.699 4.446.193.21.385.398.553.563l.023.023c.18.176.323.319.443.455.241.275.282.413.282.513v2.25c0 .968.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 18.25V16c0-.1.04-.238.282-.513.12-.136.264-.279.443-.455l.024-.023c.167-.165.36-.354.552-.563C17.144 13.533 18 12.235 18 10c0-2.817-1.995-6-6-6"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M15 16.001H9v2.25c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 18.25V16Z"
      fill="currentColor"
    />
  </IconBase>
));
