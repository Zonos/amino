import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const TK = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#00247d" d="M0 0h640v480H0z" />
      <path
        fill="#fed100"
        d="M108.1 354.6c-6.7-.1 62.8-37 120.9-84.4 76.2-62.1 240.3-161.4 288.6-177.6 5-1.7-10.3 8.6-12.3 11.9-51.5 61-10.4 176 54 233.9 19.4 14.8 18.4 15.6 54.3 17v3.4l-505.5-4.2zm-4.2 6.7s-4.9 3.5-4.9 6.1c0 2.9 5.5 6.7 5.5 6.7l498.5 5.5 9.2-6.1-12.8-7.9-495.5-4.3z"
      />
      <path
        fill="#fff"
        d="m106.8 109.1-4 12.2 10.4-7.5 10.3 7.5-3.9-12.2 10.3-7.5h-12.8l-3.9-12.2-4 12.2H96.4zm78.1 57.4 8.6-6.3h-10.7l-3.3-10.1-3.3 10.1h-10.6l8.6 6.3-3.3 10.1 8.6-6.3 8.7 6.3zm-145.2 13-4-12.2-3.9 12.2H19l10.3 7.5-3.9 12.2 10.3-7.5 10.4 7.5-4-12.2 10.4-7.5zm78.1 122.3-4.6-14.2-4.6 14.2h-15l12.1 8.7-4.6 14.3 12.1-8.8 12.1 8.8-4.7-14.3 12.1-8.7z"
      />
    </FlagIconBase>
  );
});
