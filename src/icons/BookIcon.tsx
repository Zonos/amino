import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

export const BookIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.58083 20.1197L12 20.9994L14.4192 20.1197C16.4093 19.396 18.5907 19.396 20.5808 20.1197C21.7567 20.5473 23 19.6764 23 18.4252V6.40023C23 5.55922 22.4739 4.80806 21.6835 4.52065L20.9174 4.24208C18.7099 3.43933 16.2901 3.43933 14.0826 4.24208L12 4.99938L9.91743 4.24208C7.70986 3.43933 5.29015 3.43933 3.08257 4.24208L2.31651 4.52065C1.52614 4.80806 1 5.55922 1 6.40023V18.4252C1 19.6764 2.24328 20.5473 3.41917 20.1197C5.40931 19.396 7.59069 19.396 9.58083 20.1197ZM11 6.76387L9.23395 6.12167C7.46789 5.47946 5.53212 5.47946 3.76606 6.12167L3.65826 6.16087C3.26307 6.30457 3 6.68015 3 7.10066V16.758C3 17.4412 3.67212 17.9242 4.34212 17.7903C6.30975 17.3972 8.35878 17.5472 10.2643 18.2401L11 18.5076V6.76387ZM13 18.5076L13.7357 18.2401C15.6412 17.5472 17.6903 17.3972 19.6579 17.7903C20.3279 17.9242 21 17.4412 21 16.758L21 7.10066C21 6.68015 20.7369 6.30457 20.3417 6.16087L20.2339 6.12167C18.4679 5.47946 16.5321 5.47946 14.7661 6.12167L13 6.76387V18.5076Z"
      fill="currentColor"
    />
  </IconBase>
);

export const BookSolidIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.00023 18.4551C1.00008 18.4454 1 18.4356 1 18.4258V6.40085C1 5.55983 1.52614 4.80867 2.31651 4.52126L3.08257 4.24269C5.0142 3.54028 7.10824 3.45248 9.08048 3.97929C9.36222 4.05455 9.64149 4.14235 9.91743 4.24269L12 4.99999L14.0826 4.24269C16.2901 3.43994 18.7099 3.43994 20.9174 4.2427L21.6835 4.52126C22.4739 4.80867 23 5.55983 23 6.40085V18.4258C23 19.6771 21.7567 20.5479 20.5808 20.1203C18.5907 19.3966 16.4093 19.3966 14.4192 20.1203L12 21L9.58083 20.1203C7.59069 19.3966 5.40931 19.3966 3.41917 20.1203C3.27219 20.1737 3.12415 20.2069 2.97761 20.2216C2.06099 20.3133 1.20333 19.6813 1.03125 18.7646C1.01421 18.6738 1.00389 18.5802 1.00091 18.4842C1.0006 18.4745 1.00038 18.4648 1.00023 18.4551ZM12 18.8719L13.7357 18.2407C15.6412 17.5478 17.6903 17.3979 19.6579 17.7909C20.3279 17.9248 21 17.4418 21 16.7586L21 7.10127C21 6.68077 20.7369 6.30519 20.3417 6.16148L20.2339 6.12228C18.4679 5.48008 16.5321 5.48008 14.7661 6.12228L12 7.12812V18.8719Z"
      fill="currentColor"
    />
  </IconBase>
);

export const BookDuotoneIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      d="M2 6.60434V16.2655C2 17.4575 3.03613 18.3849 4.22086 18.2532L5.04609 18.1615C6.01023 18.0544 6.98483 18.0882 7.93926 18.2617L12 19V5L8.48684 4.36124C7.17551 4.12282 5.82976 4.14894 4.52868 4.43807L3.56614 4.65197C2.65106 4.85532 2 5.66695 2 6.60434Z"
      fill="#3D3D40"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.58083 19.4797L12 20.3594L14.4192 19.4797C16.4093 18.756 18.5907 18.756 20.5808 19.4797C21.7567 19.9073 23 19.0364 23 17.7852V5.76022C23 4.91921 22.4739 4.16804 21.6835 3.88063L20.9174 3.60207C18.7099 2.79931 16.2901 2.79931 14.0826 3.60207L12 4.35936L9.91743 3.60207C7.70986 2.79931 5.29015 2.79931 3.08257 3.60207L2.31651 3.88063C1.52614 4.16804 1 4.9192 1 5.76022V17.7852C1 19.0364 2.24328 19.9073 3.41917 19.4797C5.40931 18.756 7.59069 18.756 9.58083 19.4797ZM11 6.12385L9.23395 5.48165C7.46789 4.83945 5.53212 4.83945 3.76606 5.48165L3.65826 5.52085C3.26307 5.66456 3 6.04014 3 6.46065V16.118C3 16.8012 3.67212 17.2842 4.34212 17.1503C6.30975 16.7572 8.35878 16.9072 10.2643 17.6001L11 17.8676V6.12385Z"
      fill="currentColor"
    />
  </IconBase>
);
