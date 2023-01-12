import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CoinsWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 7.967v1.596a4.99 4.99 0 0 0 1.658.935l.158.053a1 1 0 0 1-.632 1.898l-.159-.053A6.988 6.988 0 0 1 4 11.96v1.552c0 .047.019.092.052.126.321.32.712.563 1.143.706l.621.207a1 1 0 0 1-.632 1.898l-.621-.207a4.925 4.925 0 0 1-1.925-1.19A2.178 2.178 0 0 1 2 13.512V5.5c0-.724.385-1.301.838-1.713.453-.411 1.051-.736 1.707-.988C5.862 2.292 7.615 2 9.5 2c1.886 0 3.638.292 4.955.799.655.252 1.255.577 1.707.988.453.412.838.99.838 1.713V9h-2V7.967a7.506 7.506 0 0 1-.545.234C13.138 8.708 11.385 9 9.5 9c-1.886 0-3.638-.292-4.955-.799A7.514 7.514 0 0 1 4 7.967ZM15 5.5c-.007.023-.04.102-.184.233-.205.187-.558.401-1.079.601C12.702 6.733 11.204 7 9.5 7c-1.704 0-3.202-.267-4.237-.666-.521-.2-.874-.414-1.08-.6-.144-.132-.176-.21-.182-.234.006-.023.038-.102.183-.233.205-.187.558-.401 1.079-.601C6.298 4.267 7.796 4 9.5 4c1.704 0 3.202.267 4.237.666.521.2.874.414 1.08.6.144.132.176.21.182.234ZM16 9h-1a1 1 0 1 0 2 0h-1Zm-5.942 6.082c.016.022.036.048.06.077.139.16.39.367.798.574.814.412 2.15.767 4.084.767 1.934 0 3.27-.355 4.084-.767.408-.207.66-.414.797-.574a1.18 1.18 0 0 0 .061-.077 1.228 1.228 0 0 0-.027-.021c-.19-.146-.525-.322-1.015-.49-.97-.333-2.358-.571-3.9-.571-1.542 0-2.93.238-3.9.57-.49.17-.825.345-1.015.49l-.027.022ZM20 17.51l-.013.007c-1.163.588-2.827.983-4.987.983s-3.824-.395-4.987-.983L10 17.511v.75c0 .213.015.365.043.477.027.102.056.133.066.144C10.46 19.218 11.632 20 15 20c3.368 0 4.542-.782 4.89-1.118.011-.01.04-.042.067-.144.028-.112.043-.264.043-.477v-.75ZM22 15v3.261c0 .51-.045 1.407-.72 2.06C20.408 21.162 18.63 22 15 22c-3.631 0-5.408-.838-6.28-1.68-.675-.652-.72-1.55-.72-2.059V15c0-.722.48-1.23.872-1.53.424-.323.977-.584 1.579-.79C11.663 12.261 13.276 12 15 12c1.724 0 3.336.262 4.55.68.6.206 1.154.467 1.578.79.392.3.872.808.872 1.53Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);