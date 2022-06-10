import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FilterIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9923 5H6.00235C5.15076 5 4.68888 5.99649 5.23928 6.64632L9.05212 11.1479C9.66403 11.8703 9.99985 12.7864 9.99985 13.7332V17.9978C9.99985 18.7271 10.7552 19.2111 11.4178 18.9063L13.4178 17.9863C13.7725 17.8231 13.9998 17.4683 13.9998 17.0778V13.7325C13.9998 12.7866 14.3351 11.8712 14.9461 11.149L18.7557 6.64587C19.3056 5.99594 18.8436 5 17.9923 5ZM6.00235 3H17.9923C20.5462 3 21.9322 5.98782 20.2826 7.93762L16.473 12.4408C16.1675 12.8019 15.9998 13.2595 15.9998 13.7325V17.0778C15.9998 18.2493 15.3179 19.3137 14.2536 19.8033L12.2536 20.7233C10.266 21.6376 7.99985 20.1855 7.99985 17.9978V13.7332C7.99985 13.2598 7.83194 12.8018 7.52598 12.4405L3.71315 7.93896C2.06195 5.98949 3.44757 3 6.00235 3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
