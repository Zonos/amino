import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GI = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <rect width="32" height="24" fill="#F7FCFF" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 16H32V24H0V16Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.3889 5H13.6111V9.61538H12.6667V6.84615H8.88889V9.61538H7V10.5385H7.94444V15.1538H7V16.0769H24V15.1538H23.0556V10.5385H24V9.61538H22.1111V6.84615H18.3333V9.61538H17.3889V5Z"
          fill="#DB000B"
        />
        <path
          d="M9.83325 8.58946C9.83325 8.13649 10.2005 7.76929 10.6534 7.76929V7.76929C11.1064 7.76929 11.4736 8.13649 11.4736 8.58946V9.80006H9.83325V8.58946Z"
          fill="#272727"
        />
        <path
          d="M19.2778 8.58946C19.2778 8.13649 19.645 7.76929 20.098 7.76929V7.76929C20.551 7.76929 20.9182 8.13649 20.9182 8.58946V9.80006H19.2778V8.58946Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.56738 13.4706C9.56738 12.8708 10.0537 12.3845 10.6535 12.3845V12.3845C11.2533 12.3845 11.7396 12.8708 11.7396 13.4706V15.3384H9.56738V13.4706Z"
          fill="#272727"
        />
        <path
          d="M19.012 13.4706C19.012 12.8708 19.4982 12.3845 20.0981 12.3845V12.3845C20.6979 12.3845 21.1842 12.8708 21.1842 13.4706V15.3384H19.012V13.4706Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8945 13.6396C13.8945 12.8709 14.5177 12.2478 15.2863 12.2478V12.2478C16.055 12.2478 16.6782 12.8709 16.6782 13.6396V16.3093H13.8945V13.6396Z"
          fill="#272727"
        />
        <path
          d="M14.5557 7.66637C14.5557 7.2134 14.9229 6.84619 15.3758 6.84619V6.84619C15.8288 6.84619 16.196 7.2134 16.196 7.66637V9.80004H14.5557V7.66637Z"
          fill="#272727"
        />
        <rect
          x="7"
          y="8.69238"
          width="0.944444"
          height="0.923077"
          fill="#DE1A23"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 6H9.5V7H8.5V6ZM12.3181 6H13.3181V7H12.3181V6ZM11.75 6H10.25V7H11.75V6Z"
          fill="#DE1A23"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.0906 6H19.0906V7H18.0906V6ZM21.8181 6H22.8181V7H21.8181V6ZM21.2041 6H19.7041V7H21.2041V6Z"
          fill="#DE1A23"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7998 4.02271H12.7998V5.02271H13.7998V4.02271ZM15.2998 4.02271H14.2998V5.02271H15.2998V4.02271ZM15.7998 4.02271H16.7998V5.02271H15.7998V4.02271ZM18.2998 4.02271H17.2998V5.02271H18.2998V4.02271Z"
          fill="#DE1A23"
        />
        <rect
          x="22.9995"
          y="8.77466"
          width="1"
          height="0.838696"
          fill="#DE1A23"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4397 18.4533L18.1524 16.6794L15.2581 15.3259L12.3638 16.9895L15.4397 18.4533ZM14.3804 16.8418L15.2679 16.247L16.2055 16.7577L15.3623 17.3091L14.3804 16.8418Z"
          fill="#E8AA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4758 21.0068H14.9495V22.1139V21.7402H14.0337V22.1139H13.4758V21.0068Z"
          fill="#E8AA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8159 18.1138H16.0667V22.1138H14.8159V18.1138Z"
          fill="#E8AA00"
        />
      </g>
    </svg>
  );
};
