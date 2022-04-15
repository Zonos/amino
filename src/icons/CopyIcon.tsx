import React from 'react';

import { type IconProps } from '../types';
import { IconBase } from './IconBase';

export const CopyIcon = ({ size, color }: IconProps) => {
  return (
    <IconBase size={size} color={color}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4.03087V6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6V4.03087C7.96976 4.03295 7.94012 4.03518 7.91104 4.03755C7.4731 4.07333 7.24869 4.13816 7.09202 4.21799C6.7157 4.40974 6.40974 4.7157 6.21799 5.09202C6.13816 5.24869 6.07334 5.4731 6.03755 5.91104C6.00147 6.35274 5.99999 6.92417 6 7.75866V16.2413C5.99999 17.0758 6.00147 17.6473 6.03755 18.089C6.07334 18.5269 6.13816 18.7513 6.21799 18.908C6.40974 19.2843 6.7157 19.5903 7.09202 19.782C7.24869 19.8618 7.4731 19.9267 7.91104 19.9624C8.35273 19.9985 8.92416 20 9.75865 20H14.2413C15.0758 20 15.6473 19.9985 16.089 19.9624C16.5269 19.9267 16.7513 19.8618 16.908 19.782L17.816 21.564C17.3306 21.8113 16.8139 21.9099 16.2518 21.9558C15.7106 22 15.0463 22 14.2413 22H9.75868C8.95372 22 8.28937 22 7.74818 21.9558C7.18608 21.9099 6.66938 21.8113 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43598 19.816C4.18868 19.3306 4.09012 18.8139 4.0442 18.2518C3.99998 17.7106 3.99999 17.0463 4 16.2413V7.75869C3.99999 6.95372 3.99998 6.28937 4.0442 5.74818C4.09012 5.18608 4.18868 4.66938 4.43598 4.18404C4.81947 3.43139 5.43139 2.81947 6.18404 2.43598C6.66938 2.18869 7.18608 2.09012 7.74818 2.0442C8.09226 2.01608 8.48614 2.00585 8.93429 2.00212C8.95601 2.00072 8.97792 2 9 2H9.69158C9.71383 2 9.73619 2 9.75866 2H14.2413C14.2638 2 14.2862 2 14.3084 2H15C15.0221 2 15.044 2.00072 15.0657 2.00212C15.5139 2.00585 15.9077 2.01608 16.2518 2.0442C16.8139 2.09012 17.3306 2.18869 17.816 2.43598C18.5686 2.81947 19.1805 3.43139 19.564 4.18404C19.8113 4.66938 19.9099 5.18608 19.9558 5.74818C20 6.28936 20 6.95373 20 7.75868V16.2413C20 17.0463 20 17.7106 19.9558 18.2518C19.9099 18.8139 19.8113 19.3306 19.564 19.816C19.1805 20.5686 18.5686 21.1805 17.816 21.564L16.908 19.782C17.2843 19.5903 17.5903 19.2843 17.782 18.908C17.8618 18.7513 17.9267 18.5269 17.9624 18.089C17.9985 17.6473 18 17.0759 18 16.2414V7.75868C18 6.9242 17.9985 6.35273 17.9624 5.91104C17.9267 5.4731 17.8618 5.24869 17.782 5.09202C17.5903 4.7157 17.2843 4.40973 16.908 4.21799C16.7513 4.13816 16.5269 4.07333 16.089 4.03755C16.0599 4.03518 16.0302 4.03295 16 4.03087ZM10 4V6H14V4H10Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export const CopySolidIcon = ({ size, color }: IconProps) => {
  return (
    <IconBase size={size} color={color}>
      <path
        d="M16 2.02713V5.99999C16 7.10456 15.1046 7.99999 14 7.99999H10C8.89543 7.99999 8 7.10456 8 5.99999V2.02713C7.91325 2.03192 7.82933 2.03756 7.74818 2.04419C7.18608 2.09011 6.66937 2.18868 6.18404 2.43597C5.43139 2.81946 4.81947 3.43138 4.43597 4.18403C4.18868 4.66937 4.09012 5.18607 4.0442 5.74817C3.99998 6.28936 3.99999 6.95371 4 7.75868V16.2413C3.99999 17.0463 3.99998 17.7106 4.0442 18.2518C4.09012 18.8139 4.18868 19.3306 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.66937 21.8113 7.18608 21.9099 7.74818 21.9558C8.28937 22 8.95372 22 9.75868 22H14.2413C15.0463 22 15.7106 22 16.2518 21.9558C16.8139 21.9099 17.3306 21.8113 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C19.8113 19.3306 19.9099 18.8139 19.9558 18.2518C20 17.7106 20 17.0463 20 16.2413V7.75867C20 6.95372 20 6.28935 19.9558 5.74817C19.9099 5.18607 19.8113 4.66937 19.564 4.18403C19.1805 3.43138 18.5686 2.81946 17.816 2.43597C17.3306 2.18868 16.8139 2.09011 16.2518 2.04419C16.1707 2.03756 16.0868 2.03192 16 2.02713Z"
        fill="currentColor"
      />
      <path
        d="M10 2H14V5C14 5.55228 13.5523 6 13 6H11C10.4477 6 10 5.55228 10 5V2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export const CopyDuotoneIcon = ({ size, color }: IconProps) => {
  return (
    <IconBase size={size} color={color}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2413 2H9.7587C8.95374 1.99999 8.28937 1.99998 7.74818 2.04419C7.18608 2.09012 6.66937 2.18868 6.18404 2.43598C5.43139 2.81947 4.81947 3.43139 4.43597 4.18404C4.18868 4.66937 4.09012 5.18608 4.0442 5.74818C3.99998 6.28937 3.99999 6.95372 4 7.75869V16.2413C3.99999 17.0463 3.99998 17.7106 4.0442 18.2518C4.09012 18.8139 4.18868 19.3306 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.66937 21.8113 7.18608 21.9099 7.74818 21.9558C8.28936 22 8.95372 22 9.75868 22H14.2413C15.0463 22 15.7106 22 16.2518 21.9558C16.8139 21.9099 17.3306 21.8113 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C19.8113 19.3306 19.9099 18.8139 19.9558 18.2518C20 17.7106 20 17.0463 20 16.2413V7.75868C20 6.95373 20 6.28936 19.9558 5.74818C19.9099 5.18608 19.8113 4.66937 19.564 4.18404C19.1805 3.43139 18.5686 2.81947 17.816 2.43598C17.3306 2.18868 16.8139 2.09012 16.2518 2.04419C15.7106 1.99998 15.0463 1.99999 14.2413 2Z"
        fill="currentColor"
      />
      <mask id="path-2-inside-1_778_742" fill="white">
        <path d="M8 4H16V6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6V4Z" />
      </mask>
      <path
        d="M8 4H16V6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6V4Z"
        fill="#3D3D40"
      />
      <path
        d="M8 4V3H7V4H8ZM16 4H17V3H16V4ZM8 5H16V3H8V5ZM15 4V6H17V4H15ZM14 7H10V9H14V7ZM9 6V4H7V6H9ZM10 7C9.44772 7 9 6.55228 9 6H7C7 7.65685 8.34315 9 10 9V7ZM15 6C15 6.55228 14.5523 7 14 7V9C15.6569 9 17 7.65685 17 6H15Z"
        fill="#3D3D40"
        mask="url(#path-2-inside-1_778_742)"
      />
    </IconBase>
  );
};
