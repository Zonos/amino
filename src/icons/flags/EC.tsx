import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const EC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[3]})`}>
        <mask
          id={`${ids[0]}`}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#2E42A5"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="M0 0v6h16V0H0Z"
              clipRule="evenodd"
            />
            <path
              fill="#E31D1C"
              fillRule="evenodd"
              d="M0 9v3h16V9H0Z"
              clipRule="evenodd"
            />
            <path
              fill="#7B2900"
              fillRule="evenodd"
              d="M4.606 2.896c-.06-.136 2.256-.823 2.43-.823.173 0 .392.412.392.412l1.408.113s-.166-.525 0-.525c.167 0 2.716.886 2.716.886s-3.187.384-3.187.47c0 .087.209.562.209.562l-.59.193s.035-.573-.061-.573-.381.685-.381.685l-.28-.867s-2.595-.397-2.656-.533Z"
              clipRule="evenodd"
            />
            <path
              fill="#FECA00"
              d="m4.616 5.009.63.15c-.659 2.759-.05 4.082 1.828 4.205l-.042.646c-2.353-.154-3.157-1.9-2.416-5.001Z"
            />
            <path
              fill="#07138E"
              d="m5 4.637.64.1c-.451 2.887-.09 4.192.924 4.156l.023.648C4.967 9.598 4.492 7.883 5 4.637Z"
            />
            <path
              fill="#E10001"
              d="m5.648 4.373.64.1c-.451 2.886-.09 4.191.925 4.156l.022.647c-1.62.057-2.095-1.657-1.587-4.903Z"
            />
            <path
              fill="#07138E"
              d="m6.851 9.637.645-.063c.053.546.013 1.017-.125 1.413l-.612-.214c.104-.299.137-.678.092-1.136Z"
            />
            <path
              stroke="#FECA00"
              strokeWidth=".648"
              d="M10.75 5.084S11.783 9.731 8.6 9.65"
            />
            <path
              fill="#07138E"
              d="m10.681 4.637-.64.1c.452 2.887.09 4.192-.924 4.156l-.023.648c1.62.057 2.095-1.658 1.587-4.904Z"
            />
            <path
              fill="#E10001"
              d="m10.033 4.373-.64.1c.451 2.886.09 4.191-.924 4.156l-.023.647c1.62.057 2.095-1.657 1.587-4.903Z"
            />
            <path
              fill="#07138E"
              d="m8.704 9.64-.644-.07c-.054.5-.013.931.13 1.295l.603-.236c-.1-.258-.132-.587-.089-.989Z"
            />
            <path
              fill="#908F89"
              fillRule="evenodd"
              d="M6.933 8.75h1.945v.926H6.933V8.75Z"
              clipRule="evenodd"
            />
            <path
              stroke="#FEE901"
              strokeWidth=".5"
              d="M7.906 9c.548 0 1.021-.309 1.348-.763.327-.454.522-1.07.522-1.737 0-.668-.195-1.283-.522-1.737C8.927 4.309 8.454 4 7.906 4c-.549 0-1.022.309-1.35.763-.326.454-.52 1.07-.52 1.737 0 .668.194 1.283.52 1.737.328.454.801.763 1.35.763Z"
            />
            <mask
              id={`${ids[2]}`}
              width="6"
              height="7"
              x="5"
              y="3"
              maskUnits="userSpaceOnUse"
            >
              <path
                fill="#fff"
                stroke="#fff"
                strokeWidth=".5"
                d="M7.906 9c.548 0 1.021-.309 1.348-.763.327-.454.522-1.07.522-1.737 0-.668-.195-1.283-.522-1.737C8.927 4.309 8.454 4 7.906 4c-.549 0-1.022.309-1.35.763-.326.454-.52 1.07-.52 1.737 0 .668.194 1.283.52 1.737.328.454.801.763 1.35.763Z"
              />
            </mask>
            <g fillRule="evenodd" clipRule="evenodd" mask={`url(#${ids[2]})`}>
              <path
                fill="#8DDD61"
                d="M9.08 7.702s-.789-.428-1.015-.581c-.226-.153-.095-.494-.485-.403-.39.092-.702.25-.702.685 0 .435-.306.693-.41.396-.104-.297-.594-1.687 0-1.687s1.983.312 2.392.312c.409 0 .647.212.647.596a.73.73 0 0 1-.428.682Z"
              />
              <path
                fill="#FEE901"
                d="M7.906 5.441a.328.328 0 0 0 .324-.33.328.328 0 0 0-.324-.332.328.328 0 0 0-.325.331c0 .183.146.331.325.331Z"
              />
              <path
                fill="#F7FCFF"
                d="M6.835 5.47s.377-.091.898.26c.52.351 1.783.55 1.783.275v.537s-2.802-.174-2.952 0c-.15.174-.165-.974 0-1.072.165-.097.27 0 .27 0Z"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
