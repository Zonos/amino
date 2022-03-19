import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const LockIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 5.55556C8 3.59188 9.79086 2 12 2C14.2091 2 16 3.59188 16 5.55556V10H14V5.55556C14 4.57372 13.1046 3.77778 12 3.77778C10.8954 3.77778 10 4.57372 10 5.55556V10H8V5.55556Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.47854 8H14.5215C15.4271 7.99999 16.1745 7.99998 16.7833 8.04759C17.4157 8.09705 17.997 8.2032 18.543 8.46951C19.3897 8.8825 20.0781 9.5415 20.5095 10.352C20.7877 10.8747 20.8986 11.4312 20.9503 12.0365C21 12.6193 21 13.3348 21 14.2017V15.7983C21 16.6652 21 17.3807 20.9503 17.9635C20.8986 18.5688 20.7877 19.1253 20.5095 19.648C20.0781 20.4585 19.3897 21.1175 18.543 21.5305C17.997 21.7968 17.4157 21.9029 16.7833 21.9524C16.1745 22 15.427 22 14.5214 22H9.47857C8.57296 22 7.82555 22 7.2167 21.9524C6.58434 21.9029 6.00305 21.7968 5.45704 21.5305C4.61031 21.1175 3.9219 20.4585 3.49047 19.648C3.21227 19.1253 3.10138 18.5688 3.04972 17.9635C2.99997 17.3807 2.99999 16.6652 3 15.7983V14.2017C2.99999 13.3348 2.99997 12.6193 3.04972 12.0365C3.10138 11.4312 3.21227 10.8747 3.49047 10.352C3.9219 9.5415 4.61031 8.8825 5.45704 8.46951C6.00305 8.2032 6.58434 8.09705 7.2167 8.04759C7.82554 7.99998 8.57295 7.99999 9.47854 8ZM7.39992 10.1943C6.9067 10.2329 6.65447 10.3028 6.47852 10.3886C6.05516 10.5951 5.71095 10.9246 5.49524 11.3299C5.40559 11.4983 5.33254 11.7397 5.29225 12.2119C5.25088 12.6966 5.25 13.3237 5.25 14.2462V15.7538C5.25 16.6763 5.25088 17.3034 5.29225 17.7881C5.33254 18.2603 5.40559 18.5017 5.49524 18.6701C5.71095 19.0754 6.05516 19.4049 6.47852 19.6114C6.65447 19.6972 6.9067 19.7671 7.39992 19.8057C7.90627 19.8453 8.56135 19.8462 9.525 19.8462H14.475C15.4387 19.8462 16.0937 19.8453 16.6001 19.8057C17.0933 19.7671 17.3455 19.6972 17.5215 19.6114C17.9448 19.4049 18.289 19.0754 18.5048 18.6701C18.5944 18.5017 18.6675 18.2603 18.7078 17.7881C18.7491 17.3034 18.75 16.6763 18.75 15.7538V14.2462C18.75 13.3237 18.7491 12.6966 18.7078 12.2119C18.6675 11.7397 18.5944 11.4983 18.5048 11.3299C18.289 10.9246 17.9448 10.5951 17.5215 10.3886C17.3455 10.3028 17.0933 10.2329 16.6001 10.1943C16.0937 10.1547 15.4387 10.1538 14.475 10.1538H9.525C8.56135 10.1538 7.90627 10.1547 7.39992 10.1943Z"
      fill="currentColor"
    />
    <path
      d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V16Z"
      fill="currentColor"
    />
  </IconBase>
);

export const LockSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.68164 8H16.3184C16.9114 7.99998 17.423 7.99997 17.8444 8.03292C18.2892 8.06771 18.7315 8.14451 19.1572 8.35214C19.7923 8.66188 20.3086 9.15613 20.6321 9.76403C20.849 10.1715 20.9293 10.595 20.9656 11.0207C21 11.4241 21 11.9139 21 12.4816V17.5185C21 18.0862 21 18.5759 20.9656 18.9793C20.9293 19.405 20.849 19.8285 20.6321 20.236C20.3086 20.8439 19.7923 21.3381 19.1572 21.6479C18.7315 21.8555 18.2892 21.9323 17.8444 21.9671C17.423 22 16.9114 22 16.3183 22H7.68163C7.08859 22 6.57699 22 6.1556 21.9671C5.71083 21.9323 5.26846 21.8555 4.84279 21.6479C4.20774 21.3381 3.69143 20.8439 3.36786 20.236C3.15096 19.8285 3.07073 19.405 3.03439 18.9793C2.99997 18.5759 2.99998 18.0861 3 17.5185V12.4815C2.99998 11.9139 2.99997 11.4241 3.03439 11.0207C3.07073 10.595 3.15096 10.1715 3.36786 9.76403C3.69143 9.15613 4.20774 8.66188 4.84279 8.35214C5.26846 8.14451 5.71083 8.06771 6.1556 8.03292C6.57697 7.99997 7.08863 7.99998 7.68164 8ZM12 14.4615C11.3787 14.4615 10.875 14.9437 10.875 15.5385V16.6154C10.875 17.2101 11.3787 17.6923 12 17.6923C12.6213 17.6923 13.125 17.2101 13.125 16.6154V15.5385C13.125 14.9437 12.6213 14.4615 12 14.4615Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9H14V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V9H8V6Z"
      fill="currentColor"
    />
  </IconBase>
);

export const LockDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9H14V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V9H8V6Z"
      fill="#3D3D40"
    />
    <path
      d="M16.3184 8H7.68164C7.08862 7.99998 6.57698 7.99997 6.1556 8.03292C5.71083 8.06771 5.26846 8.14451 4.84278 8.35214C4.20774 8.66188 3.69143 9.15612 3.36786 9.76403C3.15096 10.1715 3.07073 10.595 3.03439 11.0207C2.99997 11.4241 2.99998 11.9138 3 12.4815V17.5184C2.99998 18.0861 2.99997 18.5759 3.03439 18.9793C3.07073 19.405 3.15096 19.8285 3.36786 20.236C3.69143 20.8439 4.20774 21.3381 4.84278 21.6479C5.26846 21.8555 5.71083 21.9323 6.1556 21.9671C6.57699 22 7.08859 22 7.68163 22H16.3183C16.9114 22 17.423 22 17.8444 21.9671C18.2892 21.9323 18.7315 21.8555 19.1572 21.6479C19.7923 21.3381 20.3086 20.8439 20.6321 20.236C20.849 19.8285 20.9293 19.405 20.9656 18.9793C21 18.5759 21 18.0862 21 17.5185V12.4816C21 11.9139 21 11.4241 20.9656 11.0207C20.9293 10.595 20.849 10.1715 20.6321 9.76403C20.3086 9.15612 19.7923 8.66188 19.1572 8.35214C18.7315 8.14451 18.2892 8.06771 17.8444 8.03292C17.423 7.99997 16.9114 7.99998 16.3184 8Z"
      fill="currentColor"
    />
    <path
      d="M11 16C11 15.4477 11.4477 15 12 15V15C12.5523 15 13 15.4477 13 16V17C13 17.5523 12.5523 18 12 18V18C11.4477 18 11 17.5523 11 17V16Z"
      fill="#3D3D40"
    />
  </IconBase>
);
