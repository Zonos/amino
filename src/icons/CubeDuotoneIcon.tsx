import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const CubeDuotoneIcon = forwardRef<
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
      d="M12.41 4.112a1 1 0 0 0-.82 0l-7 3.154a1 1 0 0 0-.59.912v7.644a1 1 0 0 0 .59.912l7 3.153a1 1 0 0 0 .82 0l7-3.153a1 1 0 0 0 .59-.912V8.178a1 1 0 0 0-.59-.912z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M5.32 8.148a.75.75 0 0 1 .996-.364L12 10.424l5.684-2.64a.75.75 0 0 1 .632 1.36L12.75 11.73V18a.75.75 0 0 1-1.5 0v-6.271L5.684 9.145a.75.75 0 0 1-.364-.997"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
