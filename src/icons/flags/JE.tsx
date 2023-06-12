import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const JE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[1]})`}>
        <mask
          height="12"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          width="16"
          x="0"
          y="0"
        >
          <path d="M0 0h16v12H0z" fill="#fff" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            clipRule="evenodd"
            d="M0 0h16v12H0V0Z"
            fill="#F7FCFF"
            fillRule="evenodd"
          />
          <path
            d="M-1.35.622-2.376.003v12.394l1.024-.62 8.27-5 .954-.577-.955-.578-8.269-5Z"
            fill="#F7FCFF"
            stroke="#E31D1C"
            strokeWidth="1.35"
          />
          <path
            d="m17.46.616 1.014-.589v12.346l-1.014-.59-8.609-5L7.846 6.2l1.005-.584 8.61-5Z"
            fill="#F7FCFF"
            stroke="#E31D1C"
            strokeWidth="1.35"
          />
          <path
            clipRule="evenodd"
            d="M6.837 2.351s-.429 1.9 1.053 2.629c0 0 1.423-.776 1.104-2.629 0 0-.611-.204-1.097-.204s-1.06.204-1.06.204Z"
            fill="#E31D1C"
            fillRule="evenodd"
          />
          <path
            d="m6.71 2.548-.324-.946c.605-.208 1.128-.314 1.574-.314.458 0 .935.111 1.43.329l-.401.915c-.375-.164-.718-.244-1.029-.244-.322 0-.74.085-1.25.26ZM7.925 3.95a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Z"
            fill="#FECA00"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
