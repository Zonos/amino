import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';
/** @deprecated Use CubeIcon instead */
export const BoxIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1115 2.32439C11.6713 2.04679 12.3287 2.0468 12.8885 2.32439L20.1385 5.91943C20.8193 6.25703 21.25 6.9513 21.25 7.71123V16.2888C21.25 17.0487 20.8193 17.743 20.1385 18.0806L12.8885 21.6756C12.3287 21.9532 11.6713 21.9532 11.1115 21.6756L3.8615 18.0806C3.18068 17.743 2.75 17.0487 2.75 16.2888V7.71123C2.75 6.9513 3.18068 6.25703 3.8615 5.91943L11.1115 2.32439ZM4.75 8.70297L11 11.8021V19.3879L4.75 16.2888V8.70297ZM13 19.3879L19.25 16.2888V8.70297L13 11.8021V19.3879ZM12 10.0656L17.999 7.09091L12 4.11619L6.00099 7.09091L12 10.0656Z"
      fill="currentColor"
    />
  </IconBase>
);
BoxIcon.deprecated = true;
