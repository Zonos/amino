import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RocketIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.864 4a8.75 8.75 0 0 0-5.915 2.302L10.009 9a1 1 0 0 0-.15.013l-5.25 1a.75.75 0 0 0-.42 1.235l1.97 2.215q.029.039.063.073l4.242 4.242.042.039 1.964 1.963a.75.75 0 0 0 1.26-.358l1.24-5.25a1 1 0 0 0 .02-.17l2.708-2.95A8.75 8.75 0 0 0 20 5.136V4.75a.75.75 0 0 0-.75-.75zm-4.901 3.408A7.25 7.25 0 0 1 18.49 5.51a7.25 7.25 0 0 1-1.899 4.527l-5.62 6.127-3.136-3.135 6.127-5.621Zm-1.903 9.841.52.52.321-1.364zm-5.278-5.342-.593-.668 1.558-.296z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M7.78 17.28a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 1 0 1.06 1.06zm2 .94a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 0 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 0m-4-2.94a.75.75 0 1 0-1.06-1.06l-.5.5a.75.75 0 1 0 1.06 1.06z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
