import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const AW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 24 24" width={width}>
    <path
      d="M21.333 3.333H2.667A2.667 2.667 0 0 0 0 6v8.703h24V6a2.667 2.667 0 0 0-2.667-2.667ZM4.184 7.517l-.629 2.038-.628-2.038L.889 6.89l2.038-.629.628-2.038.629 2.038 2.038.629-2.038.628Zm-1.517 13.15h18.666a2.66 2.66 0 0 0 2.578-2.019H.09a2.66 2.66 0 0 0 2.578 2.019ZM0 16.019h24v1.314H0V16.02Z"
      fill="#4189DD"
    />
    <path
      d="m3.555 4.222-.628 2.039-2.038.628 2.038.629.629 2.038.629-2.038 2.038-.629-2.039-.628-.629-2.039Zm.485 3.151-.484 1.57-.485-1.57-1.57-.484 1.57-.484.484-1.57.485 1.57 1.57.484-1.57.484Z"
      fill="#fff"
    />
    <path
      d="m3.555 4.835-.484 1.57-1.57.484 1.57.484.484 1.57.485-1.57 1.57-.484-1.57-.484-.485-1.57Z"
      fill="#D21034"
    />
    <path
      d="M0 14.703h24v1.315H0v-1.315ZM0 18c0 .225.036.44.089.648H23.91c.053-.209.089-.423.089-.648v-.667H0V18Z"
      fill="#F9D616"
    />
  </FlagIconBase>
));
