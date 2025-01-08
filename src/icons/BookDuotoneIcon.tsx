import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BookDuotoneIcon = forwardRef<
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
      d="m12 5.935.006-.002a10.55 10.55 0 0 1 8.238 0c.459.194.756.644.756 1.141v10.499c0 .858-.876 1.438-1.666 1.103a8.22 8.22 0 0 0-6.418 0l-.916.389-.916-.389a8.22 8.22 0 0 0-6.418 0A1.198 1.198 0 0 1 3 17.573V7.074c0-.497.298-.947.756-1.141a10.55 10.55 0 0 1 8.238 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M11.994 5.933a10.55 10.55 0 0 0-8.238 0A1.24 1.24 0 0 0 3 7.074v10.499c0 .858.876 1.438 1.666 1.103a8.22 8.22 0 0 1 6.418 0 1.198 1.198 0 0 0 1.666-1.103V7.074a1.24 1.24 0 0 0-.756-1.141"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
