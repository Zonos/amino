import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DislikeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M11.445 19a2.75 2.75 0 0 0 1.906-.768l2.305-2.217a2.75 2.75 0 0 0 .844-1.982V7.75A2.75 2.75 0 0 0 13.75 5H7.86c-1.292 0-2.41.9-2.687 2.162L4.05 12.296a2.75 2.75 0 0 0 2.686 3.339H8.25a.25.25 0 0 1 .25.25v1.365c0 .966.784 1.75 1.75 1.75zm.866-1.849a1.25 1.25 0 0 1-.866.349H10.25a.25.25 0 0 1-.25-.25v-1.365a1.75 1.75 0 0 0-1.75-1.75H6.735a1.25 1.25 0 0 1-1.22-1.518l1.124-5.134a1.25 1.25 0 0 1 1.22-.983h5.891c.69 0 1.25.56 1.25 1.25v6.283c0 .34-.138.665-.383.901z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M18.5 13.75a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-1.5 0z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
