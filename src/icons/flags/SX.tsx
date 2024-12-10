import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const SX = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.111a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18.11v-12a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6.111v12Z"
        fill="#032A87"
      />
      <path
        d="M21.333 3.444H2.667A2.667 2.667 0 0 0 0 6.111v6h24v-6a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#DC181E"
      />
      <path
        d="m.875 20.074 10.479-7.92L.887 4.138A2.65 2.65 0 0 0 0 6.111v12c0 .78.341 1.476.875 1.963Z"
        fill="#EEE"
      />
      <path
        d="M5.75 9.937c0 .61-.641 1.105-1.432 1.105-.791 0-1.432-.495-1.432-1.105s.641-1.104 1.432-1.104c.79 0 1.432.495 1.432 1.104Z"
        fill="#FADA10"
      />
      <path
        d="M2.57 9.472c.306-.306 1.412-.292 1.747-.097-.373-.503.142-.264.544-.264.403 0 .514.124.25.152-.264.029-.486-.013-.416.07.069.083.472.013.833-.07s.777.223.805.279c.028.056-.638-.084-.874 0-.236.083-.612.07-.584.152.028.084-.392.14-.557.098-.165-.042-.846-.028-.735-.098a5.92 5.92 0 0 1 .306-.18c.056-.028-.834-.056-1.32-.042Z"
        fill="#BD725F"
      />
      <path
        d="M6.77 9.82s-.625.317-1.26.166c-.698-.167-1.208-.093-1.208.094 0-.187-.51-.26-1.208-.094-.634.151-1.26-.167-1.26-.167s.462.74.187 2.219c-.282 1.51-.198 2.198.993 2.242 1.007.038 1.288.341 1.288.341s.28-.303 1.288-.34c1.191-.045 1.275-.733.993-2.243-.275-1.479.188-2.219.188-2.219Z"
        fill="#DC181E"
      />
      <path
        d="M6.313 12.496c-.354-1.218.02-2.218.02-2.218s-.552.166-1.166-.01c-.615-.178-.865.124-.865.124s-.25-.301-.865-.125c-.614.178-1.166.01-1.166.01s.374 1 .02 2.22c-.354 1.218.511 1.396 1.094 1.385.584-.01.917.322.917.322s.333-.333.917-.322c.583.01 1.448-.167 1.094-1.386Z"
        fill="#63B0E2"
      />
      <path
        d="M5.698 13.372v-.605h.135v-.24h-.146v-.645h.136l-1.115-.74v-.301h.167l-.573-.386-.573.386h.167v.302l-1.115.739h.136v.646H2.77v.24h.135v.604h-.167v.302h3.126v-.302h-.167Zm.11-2.516c0 .239-.05.328-.11.328s-.11-.09-.11-.328c0-.239.11-.432.11-.432s.11.193.11.432Z"
        fill="#fff"
      />
      <path
        d="M6.12 11.215h-.844c0-.115.189-.208.422-.208.233 0 .422.093.422.208Z"
        fill="#fff"
      />
      <path
        d="M3.25 10.903s-.156.281-.187.448c-.032.167-.126-.104-.126-.104s-.166.167-.208.23c-.041.062-.052-.48 0-.553.052-.072-.125-.052-.187-.083-.063-.031.135-.23.135-.23s-.27-.125-.177-.155c.094-.032.437-.01.552.083.115.094.385-.063.49-.083.103-.02 0 .104-.084.177-.083.073-.041.26-.041.354 0 .093-.167-.084-.167-.084Z"
        fill="#018830"
      />
      <path
        d="M3.719 12.246h1.229v.354h-1.23v-.354Zm-.594-.29H3.5v.489h-.375v-.49Zm0 .822H3.5v.49h-.375v-.49Zm2.01-.823h.375v.49h-.375v-.49Zm0 .823h.375v.49h-.375v-.49Zm-1.104-1.854h.563v.26h-.563v-.26Z"
        fill="#B6B6B6"
      />
      <path
        d="m7.667 12.622-.104-.594-.552.177.166.802.126.032s.01.646-.48 1.146c-.49.5-1.354.5-1.354.5s-.448.322-1.166.322c-.719 0-1.167-.322-1.167-.322s-.865 0-1.354-.5c-.49-.5-.48-1.146-.48-1.146l.126-.032.167-.802-.552-.177-.104.594-.198.02s.01 1.167.416 1.782c.406.615 1.313.802 1.313.802s.01.072.031.146c.594.344 1.802.364 1.802.364s1.208-.02 1.802-.364c.021-.073.032-.146.032-.146s.906-.188 1.312-.802c.406-.615.417-1.781.417-1.781l-.2-.021Z"
        fill="#FADA10"
      />
    </FlagIconBase>
  ),
);
