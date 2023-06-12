import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const DO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[2]})`}>
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
            d="M0 0v12h16V0H0Z"
            fill="#C51918"
            fillRule="evenodd"
          />
          <mask
            height="12"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="16"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0v12h16V0H0Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              clipRule="evenodd"
              d="M7 0h2v5h7v2H9v5H7V7H0V5h7V0Z"
              fill="#F7FCFF"
              fillRule="evenodd"
            />
            <path d="M0 0h7v5H0zm9 7h7v5H9z" fill="#4257BF" />
            <path
              d="m6.818 5.555.498.048c-.085.89.026 1.265.206 1.265v.5c-.623 0-.815-.65-.704-1.813Zm2.395 0-.497.048c.085.89-.026 1.265-.206 1.265v.5c.622 0 .815-.65.703-1.813Z"
              fill="#309404"
            />
            <path
              d="M7.364 5.346h.473v.738h-.473zm.726.877h.474v.375c0 .2-.163.364-.364.364h-.11v-.739Z"
              fill="#003994"
            />
            <path
              d="M8.055 5.3h.473v.738h-.473zm-.691.923h.472v.739h-.109a.364.364 0 0 1-.363-.364v-.375Z"
              fill="#DE2110"
            />
            <path
              d="m7.167 5.305-.334-.372c.353-.318.721-.483 1.1-.483.38 0 .747.165 1.1.483l-.334.372c-.267-.241-.521-.355-.766-.355-.244 0-.498.114-.766.355Z"
              fill="#00319C"
            />
            <path
              d="m7.204 7.797-.335-.372c.353-.318.721-.483 1.1-.483.38 0 .748.165 1.1.483l-.334.372c-.267-.24-.521-.355-.766-.355-.244 0-.498.114-.765.355Z"
              fill="#DE2110"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[2]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
