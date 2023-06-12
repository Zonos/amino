import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
            d="M0 0h16v12H0V0Z"
            fill="#3D58DB"
            fillRule="evenodd"
          />
          <path d="M0 2.5h-.5v7h17v-7H0Z" fill="#C51918" stroke="#FFD018" />
          <path
            d="M3.575 4.666c-.06 0-.109-.136-.109-.303 0-.168.049-.303.109-.303h8.705c.06 0 .109.135.109.303 0 .167-.049.303-.109.303H3.575Z"
            fill="#FFD018"
          />
          <path
            clipRule="evenodd"
            d="m12.048 4.301.505-.645.895.645-.895.662-.505-.662Z"
            fill="#F7FCFF"
            fillRule="evenodd"
          />
          <path
            d="M3.575 6.666c-.06 0-.109-.136-.109-.303 0-.168.049-.303.109-.303h8.705c.06 0 .109.135.109.303 0 .167-.049.303-.109.303H3.575Z"
            fill="#FFD018"
          />
          <path
            clipRule="evenodd"
            d="m12.048 6.301.505-.645.895.645-.895.662-.505-.662Z"
            fill="#F7FCFF"
            fillRule="evenodd"
          />
          <path
            d="M2.173 7.91c-.08 0-.146-.153-.146-.343 0-.19.065-.344.146-.344h11.672c.08 0 .146.154.146.344 0 .19-.066.344-.146.344H2.173Z"
            fill="#FFD018"
          />
          <path
            clipRule="evenodd"
            d="M4.409 6.026s1.42-2.99 3.452-2.99 3.5 2.99 3.5 2.99S9.57 8.977 7.886 8.977c-1.683 0-3.476-2.95-3.476-2.95Z"
            fill="#F7FCFF"
            fillRule="evenodd"
          />
          <mask
            height="6"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="8"
            x="4"
            y="3"
          >
            <path
              clipRule="evenodd"
              d="M4.409 6.026s1.42-2.99 3.452-2.99 3.5 2.99 3.5 2.99S9.57 8.977 7.886 8.977c-1.683 0-3.476-2.95-3.476-2.95Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g clipRule="evenodd" fillRule="evenodd" mask={`url(#${ids[1]})`}>
            <path
              d="M7.962 2.84s-.463.563-.309 1.1c.155.537.515.48.515.953s-.167.955 0 .955c.166 0 .224.327.072.548-.152.221-.287.228-.278.588.01.36.796.714.415.714-.381 0-.884.37-.724.37.16 0 .996.288.996.666v.682H4.286V2.84h3.676Z"
              fill="#272727"
            />
            <path
              d="M5.91 4.962h-.218v.884h.218v-.884Zm.64 0h-.217v.884h.217v-.884Zm-.537 0h.217v.884h-.217v-.884Zm.858 0h-.218v.884h.218v-.884Zm.103 0h.217v.884h-.217v-.884Zm.537 0h-.217v.884h.217v-.884ZM5.692 6.23h.218v.885h-.218V6.23Zm.858 0h-.217v.885h.217V6.23Zm-.537 0h.217v.885h-.217V6.23Zm.858 0h-.218v.885h.218V6.23Zm.103 0h.217v.885h-.217V6.23Zm.537 0h-.217v.885h.217V6.23Z"
              fill="#F7FCFF"
            />
            <path
              d="M8.489 4.962H8.27v.884h.218v-.884Zm.64 0h-.217v.884h.217v-.884Zm-.537 0h.217v.884h-.217v-.884Zm.858 0h-.217v.884h.217v-.884Zm.103 0h.217v.884h-.217v-.884Zm.537 0h-.217v.884h.218v-.884ZM8.271 6.23h.218v.885H8.27V6.23Zm.858 0h-.217v.885h.217V6.23Zm-.537 0h.217v.885h-.217V6.23Zm.858 0h-.217v.885h.217V6.23Zm.103 0h.217v.885h-.217V6.23Zm.537 0h-.217v.885h.218V6.23Z"
              fill="#272727"
            />
            <path
              d="M6.616 3.536c-.304.094-.444.892-.41 1.085.034.193.138-.024.138-.024s.21.457.232.58c.022.123.132-.186.132-.186s.366.252.415.532c.05.28.124-.32.124-.32l.082-.015-.052-.297.158.135-.049-.276s.119.155.089-.016l-.047-.266-.041-.234.156-.027s-.623-.766-.927-.671Z"
              fill="#3D58DB"
            />
          </g>
          <path
            clipRule="evenodd"
            d="M13.044 6.848c-.316.04-.591.802-.591.997 0 .196.139 0 .139 0s.128.488.128.613.163-.16.163-.16.316.31.316.595.177-.294.177-.294h.084v-.302l.132.16v-.28s.09.174.09 0V7.67h.159s-.48-.862-.797-.822ZM2.796 6.732c.316.04.592.802.592.998 0 .196-.14 0-.14 0s-.127.487-.127.612-.163-.16-.163-.16-.316.311-.316.596c0 .284-.177-.295-.177-.295H2.38v-.301l-.132.16v-.28s-.09.173-.09 0v-.508H2s.48-.862.796-.822Z"
            fill="#3D58DB"
            fillRule="evenodd"
          />
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
