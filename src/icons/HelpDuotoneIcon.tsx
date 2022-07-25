import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HelpDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: string }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        fill={secondaryColor || '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.133 9.5a1 1 0 1 1-1.73-1A3 3 0 0 1 15 10c0 1.098-.673 1.994-1.5 2.5-.664.406-.25 1.5-1.502 1.5a1 1 0 0 1-.995-1.104c.028-.529.264-.96.52-1.272.271-.33.628-.6.9-.762 1.517-.902-.333-2.747-1.29-1.361Zm.865 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
