import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UserIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M9.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m2.5 5.25c-4.586 0-6.753 1.9-7.733 3.64a1.9 1.9 0 0 0 .205 2.228c.477.562 1.236.882 2.035.882h10.986c.799 0 1.559-.32 2.035-.882a1.905 1.905 0 0 0 .206-2.228c-.98-1.74-3.148-3.64-7.734-3.64m-6.426 4.376c.693-1.23 2.338-2.876 6.426-2.876s5.733 1.645 6.426 2.876c.12.211.086.37-.041.521-.155.183-.473.353-.892.353H6.507c-.418 0-.736-.17-.891-.352-.128-.151-.16-.31-.042-.522"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
