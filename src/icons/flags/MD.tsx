import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
            d="M11 0h5v12h-5V0Z"
            fill="#D9071E"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M0 0h6v12H0V0Z"
            fill="#3D58DB"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M5 0h6v12H5V0Z"
            fill="#FBCD17"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="m10.86 9.807-.527.288L8.587 6.9l.527-.287 1.745 3.194Zm-5.603.077.526.288L7.53 6.977l-.527-.287-1.745 3.194Z"
            fill="#FD1900"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M5.689 4.695V7.47c0 .617-.53 1.42-.799 1.72-.267.298-.8.983-.8.983V2.704c0-.838.8-1.125.8-1.125s.664.131.799 1.125v.97c.206.161.892.657 1.335.448.526-.249.708-.962.708-.962s-.05-.72-.265-.72c-.216 0-.233-1.014.594-1.014s.924.39.924.702c0 .163-.131.426-.256.675-.113.226-.22.442-.22.565 0 .256.193.754.476.754.198 0 1.153-.371 1.706-.593v-.825c.134-.994.798-1.125.798-1.125s.8.287.8 1.125v7.47s-.532-.686-.8-.985c-.267-.299-.798-1.102-.798-1.719V4.695H5.689Zm.886 5.221c.54-.352 1.332-1.93 1.332-1.93l.263.06s.4 1.046 1.58 1.87c-1.257.336-1.58 1.01-1.58 1.01 0-.54-1.595-1.01-1.595-1.01Zm-.087-1c.365 0 .66-.28.66-.624 0-.345-.295-.625-.66-.625-.365 0-.66.28-.66.625s.295.625.66.625Zm3.872-.624c0 .345-.295.625-.66.625-.365 0-.66-.28-.66-.625s.295-.625.66-.625c.365 0 .66.28.66.625Z"
            fill="#A77B3B"
            fillRule="evenodd"
          />
          <path
            d="m12.57 5.204.459.198-1.87 4.326-.459-.198 1.87-4.326Z"
            fill="#FDFF00"
          />
          <path
            clipRule="evenodd"
            d="M5.52 3.917h5.28v3.82s-1.344.404-2.64 1.068c-.957-.71-2.64-1.069-2.64-1.069v-3.82Z"
            fill="#E1E5E8"
            fillRule="evenodd"
            opacity=".3"
          />
          <mask
            height="6"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="6"
            x="5"
            y="3"
          >
            <path
              clipRule="evenodd"
              d="M5.52 3.917h5.28v3.82s-1.344.404-2.64 1.068c-.957-.71-2.64-1.069-2.64-1.069v-3.82Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path d="M5.52 6.417h5.28v2.5H5.52z" fill="#3D58DB" />
            <path d="M5.52 3.917h5.28v2.5H5.52z" fill="#FD1900" />
            <path
              clipRule="evenodd"
              d="m7.893 5.041-.4.033.23-.311-.245-.323.402.052.154-.355.172.363.4-.033-.23.311.245.322-.402-.051-.154.355-.172-.363Z"
              fill="#FDFF00"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M7.175 4.336S6.1 4.99 6.458 5.459c.359.47.81.53.81.53s-1.1 1.65.835 2.592c2.072-.91.983-2.592.983-2.592s.638-.141.765-.649c.128-.507-.833-1.09-.833-1.09s.6.87.462 1.09c-.136.22-.87.445-1.377.445-.506 0-1.288-.142-1.415-.527-.126-.385.487-.922.487-.922Z"
              fill="#FDFF00"
              fillRule="evenodd"
            />
          </g>
          <path
            clipRule="evenodd"
            d="M2.368 5.765s.527.623 1.024.419c.496-.204.376-.934.376-.934l-.376.34h-.32v.175l-.25-.174v.174h-.454Zm.357.957s.642.56 1.075.402c.433-.158.324-.917.324-.917l-.376.341h-.32v.174l-.25-.174v.174h-.453Zm1.73 1.271c-.433.159-1.076-.401-1.076-.401h.454v-.174l.25.174v-.174h.32l.376-.341s.108.758-.324.916Z"
            fill="#048F02"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M6.99 1.124h-.5v.298h-.236v.5h.236v.872h.5v-.872h.286v-.5H6.99v-.298Z"
            fill="#FDFF00"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="m7.58 1.692-1.159.299 1.158.366v-.665Z"
            fill="#DB4400"
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
