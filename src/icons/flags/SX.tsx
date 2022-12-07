import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SX = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
            fill="#E31D1C"
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
              fill="#2E42A5"
              fillRule="evenodd"
              d="M0 6v6h16V6H0Z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M0-1v14l10-7L0-1Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[2]}`}
            width="10"
            height="14"
            x="0"
            y="-1"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0-1v14l10-7L0-1Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              fill="#FBCD17"
              fillRule="evenodd"
              d="M4.063 4.594c.718 0 1.3-.357 1.3-.797 0-.44-.582-.797-1.3-.797-.718 0-1.3.357-1.3.797 0 .44.582.797 1.3.797Z"
              clipRule="evenodd"
            />
            <path
              fill="#DA610A"
              fillRule="evenodd"
              d="M4.177 3.193c-.106 0-.182.068-.182.171v.011a.199.199 0 0 0-.01.058c0 .055.02.1.062.142a.117.117 0 0 1 .004.028c-.003-.009-.013-.016-.033-.03a1.06 1.06 0 0 1-.145-.126c-.101-.103-.178-.143-.273-.127a.444.444 0 0 0-.09.029.335.335 0 0 1-.196.006c-.255-.049-.535 0-.838.14l.105.226c.259-.12.487-.158.686-.12a.58.58 0 0 0 .375-.034c-.003 0-.001.002.011.014l.042.042a.925.925 0 0 0 .09.079c-.06.015-.056.026-.046.065.005.015.01.035.014.062.007.06-.005.09.005.105.012.017.052.013.178.008a4.963 4.963 0 0 0 .426-.046c.07-.012.09-.016.119-.037l.026-.033a11.757 11.757 0 0 1 .818-.092c.007 0 .007 0 .037-.006l.021-.01c.001 0 .002 0 0 0l.062-.144-.064-.077a.208.208 0 0 0-.046-.013h-.01a.21.21 0 0 0-.004 0l-.057-.001a.638.638 0 0 1-.122-.012l-.044-.008c-.195-.036-.375-.036-.759.021l-.021-.016a1.9 1.9 0 0 1 .216-.022l.075-.003h.012l-.002-.25h-.442Zm-.207.723.024-.005.023-.005-.047.01Z"
              clipRule="evenodd"
            />
            <path
              fill="#56C6F5"
              stroke="#E31D1C"
              strokeWidth=".5"
              d="m3.962 4.29.041.007.04-.007c.497-.08.824-.071 1.013-.008.218.073.46.053.713-.033-.08.36-.121.698-.121 1.017 0 .363.07.657.134.915l.005.02c.062.252.114.461.114.701 0 .216-.071.329-.171.4-.116.081-.308.133-.594.133-.403 0-.78.109-1.127.321l-.006-.004-.006.004a2.127 2.127 0 0 0-1.127-.32c-.286 0-.478-.053-.594-.135-.1-.07-.171-.183-.171-.399 0-.24.052-.449.114-.7l.005-.021c.064-.258.134-.552.134-.915 0-.319-.041-.658-.121-1.017.253.086.494.106.713.033.189-.063.516-.073 1.012.008Z"
            />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m4.392 5.112-.385-.343-.386.343h.114v.198l-.6.374v.914h-.114v.171h2v-.171h-.143v-.914l-.628-.392v-.18h.142Z"
              clipRule="evenodd"
            />
            <path
              fill="#FBCD17"
              d="M3.976 8.51c.53 0 .896-.058 1.084-.156a.253.253 0 0 1 .228-.128c.413.015.733-.159.984-.542.272-.413.327-1 .15-1.771l.45-.103c.203.883.136 1.595-.214 2.128-.314.477-.742.732-1.264.75-.266.197-.734.284-1.418.284-.662 0-1.153-.129-1.468-.402-.715-.169-1.169-.454-1.348-.877-.19-.45-.19-1.076-.012-1.881l.45.099c-.159.72-.159 1.257-.013 1.603.102.241.399.438.9.574l.467.1-.022.118c.227.133.575.204 1.046.204Z"
            />
            <path
              stroke="#73BE4A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth=".5"
              d="m2.357 4.412.256.103-.128.266.357-.185-.027.137-.077.376.147-.429v.38l.089-.38.266.08-.266-.164.266-.081"
            />
            <path
              fill="#FBCD17"
              fillRule="evenodd"
              d="M2.844 4.969a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5Z"
              clipRule="evenodd"
            />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M5.32 4.937c-.004-.169-.022-.552-.108-.552-.085 0-.098.388-.1.554-.148.049-.259.176-.259.176h.736s-.116-.133-.268-.178Z"
              clipRule="evenodd"
            />
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
