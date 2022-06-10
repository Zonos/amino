import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const MailDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M2 8.8C2 7.11984 2 6.27976 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V8.8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.17548 8.43431C6.4879 7.97889 7.11036 7.86296 7.56578 8.17538L11.4344 10.8293C11.7753 11.0631 12.2249 11.0631 12.5658 10.8293L16.4344 8.17538C16.8898 7.86296 17.5123 7.97889 17.8247 8.43431C18.1371 8.88974 18.0212 9.5122 17.5658 9.82462L13.6972 12.4785C12.6745 13.18 11.3257 13.18 10.303 12.4785L6.43441 9.82462C5.97898 9.5122 5.86305 8.88974 6.17548 8.43431Z"
        fill={secondaryColor || '#3D3D42'}
      />
    </IconBase>
  );
};
