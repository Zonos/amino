import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const PercentBadgeDuotoneIcon = forwardRef<
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
      d="M11.871 4a1.75 1.75 0 0 0-1.733 1.51l-.087.633c-.012.084-.087.208-.266.28l-.191.08c-.176.076-.317.042-.385-.009l-.308-.23a1.75 1.75 0 0 0-2.287.162l-.188.188A1.75 1.75 0 0 0 6.264 8.9l.23.308c.051.068.085.209.008.385l-.08.191c-.07.18-.195.254-.28.266l-.631.087A1.75 1.75 0 0 0 4 11.87v.258a1.75 1.75 0 0 0 1.51 1.733l.633.087c.084.012.208.087.28.266q.037.096.08.191c.076.176.042.317-.009.385l-.23.308a1.75 1.75 0 0 0 .162 2.287l.188.188a1.75 1.75 0 0 0 2.287.162l.308-.23c.068-.051.209-.085.385-.008q.095.041.191.08c.18.07.254.195.266.28l.087.631a1.75 1.75 0 0 0 1.733 1.511h.258a1.75 1.75 0 0 0 1.733-1.51l.087-.633c.012-.084.087-.208.266-.28q.096-.037.191-.08c.176-.076.317-.042.385.009l.308.23a1.75 1.75 0 0 0 2.287-.162l.188-.188a1.75 1.75 0 0 0 .162-2.287l-.23-.308c-.051-.068-.085-.209-.008-.385q.041-.095.08-.191c.07-.18.195-.254.28-.266l.631-.087A1.75 1.75 0 0 0 20 12.13v-.258a1.75 1.75 0 0 0-1.51-1.733l-.633-.087c-.084-.012-.208-.087-.28-.266l-.08-.191c-.076-.176-.042-.317.009-.385l.23-.308a1.75 1.75 0 0 0-.162-2.287l-.188-.188a1.75 1.75 0 0 0-2.287-.162l-.308.23c-.068.051-.209.085-.385.008l-.191-.08c-.18-.07-.254-.195-.266-.28l-.087-.631A1.75 1.75 0 0 0 12.13 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M11.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3.03-.28a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0M14 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      fill="currentColor"
    />
  </IconBase>
));
