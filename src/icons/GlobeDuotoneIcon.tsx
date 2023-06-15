import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const GlobeDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M3.055 11h3.968c.103-2.204.545-4.218 1.235-5.77.309-.695.68-1.325 1.114-1.84A8.999 8.999 0 0 1 12 3a8.99 8.99 0 0 1 2.487.348c.423.543.761 1.212 1.03 1.943.567 1.543.89 3.538.966 5.709h4.462a9.098 9.098 0 0 1 0 2h-4.462c-.076 2.171-.399 4.166-.966 5.71-.269.73-.607 1.4-1.03 1.942A9.008 9.008 0 0 1 12 21a8.997 8.997 0 0 1-2.628-.39c-.435-.515-.805-1.145-1.114-1.84-.69-1.552-1.132-3.566-1.235-5.77H3.055a9.097 9.097 0 0 1 0-2Zm11.427 0H9.026c.101-1.967.498-3.695 1.06-4.958.327-.738.692-1.273 1.046-1.61.35-.333.641-.432.868-.432.214 0 .462.088.753.395.305.322.614.844.887 1.586.468 1.273.767 3.02.841 5.019Zm-5.456 2h5.456c-.075 2-.374 3.747-.842 5.019-.273.742-.582 1.264-.887 1.586-.291.307-.539.395-.753.395-.227 0-.518-.1-.868-.432-.354-.337-.719-.872-1.047-1.61-.561-1.263-.958-2.991-1.06-4.958Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
