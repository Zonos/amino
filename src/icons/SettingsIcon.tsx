import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SettingsIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      ref={ref}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M11.871 4a1.75 1.75 0 0 0-1.733 1.51l-.087.633c-.012.084-.087.208-.266.28a5.95 5.95 0 0 0-.191.08c-.176.076-.317.042-.385-.009l-.308-.23a1.75 1.75 0 0 0-2.287.162l-.188.188A1.75 1.75 0 0 0 6.264 8.9l.23.308c.051.068.085.209.008.385a5.95 5.95 0 0 0-.08.191c-.07.18-.195.254-.28.266l-.631.087A1.75 1.75 0 0 0 4 11.87v.258a1.75 1.75 0 0 0 1.51 1.733l.633.087c.084.012.208.087.28.266.025.064.051.128.08.191.076.176.042.317-.009.385l-.23.308a1.75 1.75 0 0 0 .162 2.287l.188.188a1.75 1.75 0 0 0 2.287.162l.308-.23c.068-.051.209-.085.385-.008.063.028.127.054.191.08.18.07.254.195.266.28l.087.631a1.75 1.75 0 0 0 1.733 1.511h.258a1.75 1.75 0 0 0 1.733-1.51l.087-.633c.012-.084.087-.208.266-.28.064-.025.128-.051.191-.08.176-.076.317-.042.385.009l.308.23a1.75 1.75 0 0 0 2.287-.162l.188-.188a1.75 1.75 0 0 0 .162-2.287l-.23-.308c-.051-.068-.085-.209-.008-.385.028-.063.054-.127.08-.191.07-.18.195-.254.28-.266l.631-.087A1.75 1.75 0 0 0 20 12.13v-.258a1.75 1.75 0 0 0-1.51-1.733l-.633-.087c-.084-.012-.208-.087-.28-.266a6.034 6.034 0 0 0-.08-.191c-.076-.176-.042-.317.009-.385l.23-.308a1.75 1.75 0 0 0-.162-2.287l-.188-.188a1.75 1.75 0 0 0-2.287-.162l-.308.23c-.068.051-.209.085-.385.008a5.895 5.895 0 0 0-.191-.08c-.18-.07-.254-.195-.266-.28l-.087-.631A1.75 1.75 0 0 0 12.13 4h-.258Zm-.247 1.716a.25.25 0 0 1 .247-.216h.258a.25.25 0 0 1 .247.216l.087.632c.1.721.62 1.239 1.198 1.468l.143.06c.57.25 1.304.255 1.887-.182l.308-.23a.25.25 0 0 1 .327.023l.187.187a.25.25 0 0 1 .023.327l-.23.308c-.438.583-.432 1.317-.182 1.887l.06.143c.23.577.747 1.098 1.468 1.198l.632.087a.25.25 0 0 1 .216.247v.258a.25.25 0 0 1-.216.247l-.632.087c-.721.1-1.239.62-1.468 1.198l-.06.143c-.25.57-.255 1.304.182 1.887l.23.308a.25.25 0 0 1-.023.327l-.187.187a.25.25 0 0 1-.327.023l-.308-.23c-.583-.438-1.317-.432-1.887-.182l-.143.06c-.577.23-1.098.747-1.198 1.468l-.087.632a.25.25 0 0 1-.247.216h-.258a.25.25 0 0 1-.247-.216l-.087-.632c-.1-.721-.62-1.239-1.198-1.468a4.493 4.493 0 0 1-.143-.06c-.57-.25-1.304-.255-1.887.182l-.308.23a.25.25 0 0 1-.327-.023l-.187-.187a.25.25 0 0 1-.023-.327l.23-.308c.437-.583.432-1.317.182-1.887a4.47 4.47 0 0 1-.06-.143c-.23-.577-.747-1.098-1.468-1.198l-.632-.087a.25.25 0 0 1-.216-.247v-.258a.25.25 0 0 1 .216-.247l.632-.087c.721-.1 1.239-.62 1.468-1.198l.06-.143c.25-.57.255-1.304-.182-1.887L7.464 8a.25.25 0 0 1 .023-.327l.187-.187a.25.25 0 0 1 .327-.023l.308.23c.583.437 1.317.432 1.887.182l.143-.06c.577-.23 1.098-.747 1.198-1.468l.087-.632Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
