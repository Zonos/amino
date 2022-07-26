import React, { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const CopyDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.241 2H9.76c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C4 6.29 4 6.954 4 7.758v8.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C8.29 22 8.954 22 9.758 22h4.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V7.758c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C15.71 2 15.046 2 14.242 2Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <mask id={`${ids[0]}`} fill="#fff">
        <path d="M8 4h8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4Z" />
      </mask>
      <path
        d="M8 4h8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4Z"
        fill="currentColor"
      />
      <path
        d="M8 4V3H7v1h1Zm8 0h1V3h-1v1ZM8 5h8V3H8v2Zm7-1v2h2V4h-2Zm-1 3h-4v2h4V7ZM9 6V4H7v2h2Zm1 1a1 1 0 0 1-1-1H7a3 3 0 0 0 3 3V7Zm5-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Z"
        fill="currentColor"
        mask={`url(#${ids[0]})`}
      />
    </IconBase>
  );
});
