import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarOffWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0L18.2 16.786l.015.015 3.492 3.492a1 1 0 0 1-1.414 1.414l-1.429-1.429c-.096 1.006-1.196 1.674-2.165 1.19L12 19.118l-4.7 2.35c-1.082.54-2.326-.356-2.155-1.554l.8-5.596L2.8 10.78a1.5 1.5 0 0 1 .757-2.451l2.686-.672-3.951-3.95a1 1 0 0 1 0-1.415Zm5.591 7.005a1.007 1.007 0 0 1-.141.047l-2.899.725 2.75 3.092a1.5 1.5 0 0 1 .363 1.209l-.697 4.881 4.07-2.035a1.5 1.5 0 0 1 1.34 0l4.07 2.035-.183-1.28-8.673-8.674Zm2.83-6.098a1.5 1.5 0 0 1 2.572 0l2.358 3.93 4.798 1.2a1.5 1.5 0 0 1 .757 2.451l-2.118 2.383a1 1 0 0 1-1.495-1.328l1.57-1.766-4.198-1.05a1.5 1.5 0 0 1-.922-.683L12 4.944l-.643 1.07a1 1 0 0 1-1.714-1.029l1.07-1.785Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);