import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

export const CubeIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.1115 0.324386C9.67131 0.0467947 10.3287 0.0467951 10.8885 0.324387L18.1385 3.91943C18.8193 4.25703 19.25 4.9513 19.25 5.71123V14.2888C19.25 15.0487 18.8193 15.743 18.1385 16.0806L10.8885 19.6756C10.3287 19.9532 9.67131 19.9532 9.1115 19.6756L1.8615 16.0806C1.18068 15.743 0.75 15.0487 0.75 14.2888V5.71123C0.75 4.9513 1.18068 4.25703 1.8615 3.91943L9.1115 0.324386ZM2.75 6.70297L9 9.80214V17.3879L2.75 14.2888V6.70297ZM11 17.3879L17.25 14.2888V6.70297L11 9.80214V17.3879ZM10 8.06563L15.999 5.09091L10 2.11619L4.00099 5.09091L10 8.06563Z"
      fill="currentColor"
    />
  </IconBase>
);

export const CubeSolidIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      d="M12.8885 2.45819C12.3287 2.1806 11.6713 2.1806 11.1115 2.45819L3.93484 6.01687L11.9991 10.1088L20.0411 6.00495L12.8885 2.45819Z"
      fill="currentColor"
    />
    <path
      d="M21.25 7.63328L21.2489 7.63381L12.9991 11.8453L12.9991 21.7546L20.1385 18.2144C20.8193 17.8768 21.25 17.1825 21.25 16.4226V7.63328Z"
      fill="currentColor"
    />
    <path
      d="M10.9991 21.7537L10.9991 11.8453L2.75 7.65831V16.4226C2.75 17.1825 3.18068 17.8768 3.8615 18.2144L10.9991 21.7537Z"
      fill="currentColor"
    />
  </IconBase>
);

export const CubeDuotoneIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      d="M20 7.08068V16.9193L12 21L4 16.9193V7.5L12.5 3L20 7.08068Z"
      fill="#3D3D40"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3615 2.44058C11.9213 2.16299 12.5787 2.16299 13.1385 2.44058L20.3885 6.03562C21.0693 6.37322 21.5 7.06749 21.5 7.82743V16.405C21.5 17.1649 21.0693 17.8592 20.3885 18.1968L13.1385 21.7918C12.5787 22.0694 11.9213 22.0694 11.3615 21.7918L4.1115 18.1968C3.43068 17.8592 3 17.1649 3 16.405V7.82743C3 7.0675 3.43068 6.37322 4.1115 6.03562L11.3615 2.44058ZM13.25 19.5041L19.5 16.405V8.81916L13.25 11.9183V19.5041ZM12.25 10.1818L18.249 7.2071L12.25 4.23238L6.25099 7.2071L12.25 10.1818Z"
      fill="currentColor"
    />
  </IconBase>
);
