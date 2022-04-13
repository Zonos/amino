import React from 'react';

import { useStableUniqueId } from 'hooks';

export const ER = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${ids[1]})`}>
        <mask
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="22"
          height="15"
        >
          <rect width="21.25" height="15" fill="white" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V7.5H20.25V0H0Z"
            fill="#43B764"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.5V15H20.25V7.5H0Z"
            fill="#B4D7F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L20.875 7.5L0 15V0Z"
            fill="#BE0027"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.06294 11.5724C5.14138 11.4933 5.24126 11.4223 5.3669 11.3796C5.37425 10.9815 5.36955 10.5472 5.34512 10.1345C5.31216 10.085 5.25469 10.0437 5.15471 10.0437C4.90482 10.0437 4.35595 9.83011 4.35595 9.52265C4.35595 9.52265 4.76536 9.70761 4.87963 9.61513C4.92831 9.57573 4.80137 9.45359 4.64795 9.30597C4.44124 9.10707 4.18644 8.8619 4.24826 8.71048C4.24826 8.71048 4.64968 9.06586 4.73537 9.06586C4.77449 9.06586 4.74783 8.9507 4.72101 8.83491C4.6891 8.69707 4.65697 8.55834 4.73537 8.61191C4.87963 8.71048 5.28031 9.39042 5.28031 9.61513C5.28031 9.73738 5.31245 9.92977 5.34175 10.0798L5.34148 10.0755C5.32487 9.81661 5.30093 9.5841 5.26907 9.38509C5.08898 8.26022 5.08255 7.1072 5.33306 6.49353C5.20821 6.41617 5.11712 6.31751 5.11712 6.20484C5.11712 6.20484 5.52653 6.37122 5.6408 6.28803C5.68948 6.25259 5.56254 6.14272 5.40911 6.00993C5.2024 5.83101 4.94761 5.61048 5.00942 5.47427C5.00942 5.47427 5.41084 5.79395 5.49654 5.79395C5.53566 5.79395 5.50899 5.69036 5.48218 5.5862C5.45026 5.46221 5.41814 5.33741 5.49654 5.3856C5.6408 5.47427 6.04148 6.0859 6.04148 6.28803L6.0415 6.29281C6.19673 6.10041 6.37769 5.92086 6.47285 5.87588C6.5748 5.8277 6.53302 5.95249 6.49152 6.07648C6.45665 6.18064 6.42197 6.28423 6.47285 6.28423C6.58428 6.28423 7.10629 5.96455 7.10629 5.96455C7.18667 6.10076 6.85534 6.3213 6.58653 6.50021C6.38702 6.63301 6.22195 6.74288 6.28526 6.77832C6.43384 6.8615 6.96624 6.69513 6.96624 6.69513C6.96624 6.9717 6.25249 7.16384 5.92754 7.16384C5.80672 7.16384 5.73364 7.1959 5.68951 7.23617C5.66791 7.42783 5.65798 7.64488 5.65911 7.87744C5.82153 7.66829 6.02434 7.4628 6.1271 7.41423C6.22905 7.36604 6.18728 7.49084 6.14577 7.61483C6.1109 7.71899 6.07623 7.82258 6.1271 7.82258C6.23854 7.82258 6.76054 7.5029 6.76054 7.5029C6.84093 7.63911 6.50959 7.85965 6.24079 8.03856C6.04127 8.17136 5.87621 8.28122 5.93951 8.31666C6.0881 8.39985 6.62049 8.23347 6.62049 8.23347C6.62049 8.47936 6.05638 8.6585 5.70284 8.69523C5.72258 8.89724 5.74884 9.10211 5.78131 9.30491C5.81597 9.52144 5.8415 9.76932 5.85906 10.043C5.86659 10.1605 5.87254 10.2796 5.87707 10.3992C5.89264 10.2997 5.90419 10.2012 5.90419 10.1279C5.90419 9.9032 6.30487 9.22326 6.44913 9.12469C6.52753 9.07112 6.49541 9.20985 6.46349 9.34769C6.43668 9.46348 6.41001 9.57865 6.44913 9.57865C6.53483 9.57865 6.93625 9.22326 6.93625 9.22326C6.99806 9.37469 6.74327 9.61985 6.53656 9.81875L6.53655 9.81875C6.38313 9.96638 6.25619 10.0885 6.30487 10.1279C6.41914 10.2204 6.82855 10.0354 6.82855 10.0354C6.82855 10.3429 6.27968 10.5565 6.02979 10.5565C5.96454 10.5565 5.9174 10.5741 5.88336 10.6C5.88995 10.8639 5.89011 11.1268 5.88566 11.3765C6.02193 11.4209 6.12836 11.4985 6.21033 11.5843C6.3708 11.5733 6.52874 11.5489 6.68418 11.5113C6.9843 11.3462 7.6486 10.8144 7.81679 10.6053C7.9442 10.4469 7.99286 10.135 8.03884 9.84037C8.06515 9.67177 8.09058 9.50879 8.12939 9.38337C8.23602 9.03875 8.4247 9.8022 8.4247 9.92105C8.4247 10.0399 8.58004 9.48022 8.58004 9.08756C8.58004 8.89085 8.54105 8.76458 8.50214 8.63857C8.46339 8.51304 8.4247 8.38776 8.4247 8.19335C8.4247 7.96363 8.55898 8.00439 8.68341 8.12346C8.62651 7.96747 8.58004 7.7745 8.58004 7.57549C8.58004 7.32078 8.54805 7.24431 8.53417 7.22532C8.54676 7.23091 8.58003 7.23408 8.65009 7.19602C8.7704 7.13066 8.82636 7.21085 8.87323 7.278C8.91417 7.33666 8.94817 7.38537 9.01204 7.31846C9.08194 7.24524 8.93113 7.16203 8.7071 7.03842C8.49202 6.91974 8.20944 6.76382 7.98987 6.54375C7.5416 6.09445 8.12939 5.94024 8.22963 6.0969C8.32988 6.25356 8.92724 6.42971 8.58004 5.90821C8.369 5.59123 8.10882 5.59516 7.87212 5.59875C7.71941 5.60106 7.57648 5.60322 7.46282 5.51896C7.26653 5.37345 7.53992 5.22308 7.68886 5.14116C7.75985 5.10211 7.80257 5.07862 7.75266 5.07862C7.68911 5.07862 7.60809 5.05605 7.51265 5.02946C7.37589 4.99137 7.20953 4.94503 7.02255 4.94503C6.70508 4.94503 6.07767 4.66097 6.29467 4.66097C6.37187 4.66097 6.48627 4.63356 6.61192 4.60346C6.74997 4.57039 6.9016 4.53407 7.03239 4.52726C6.65148 4.35116 6.21576 4.20267 5.72467 4.08172L5.80824 3.75C6.29372 3.86957 6.73058 4.01649 7.11836 4.1907C7.05151 4.08788 6.9792 3.97625 6.91906 3.8713C6.71133 3.50882 7.35976 4.07175 7.61649 4.44445L7.6172 4.44548C8.03484 4.68783 8.37941 4.97061 8.65009 5.29371V4.56015C8.89257 4.64319 9.03058 5.42659 9.10311 6.0168C9.15599 6.1354 9.20156 6.25795 9.23978 6.38445C9.33416 6.13251 9.51231 5.8655 9.67256 6.0969C9.86331 6.37235 9.52638 7.93495 9.40222 8.475C9.39684 8.53165 9.39062 8.58789 9.38356 8.64373C9.67914 8.45555 9.83238 8.02111 9.91092 7.79845C9.97867 7.60636 9.99083 7.57189 9.99083 7.98913C9.99083 8.52876 9.57079 9.06311 9.22664 9.41036C9.17733 9.58108 9.11896 9.74737 9.05152 9.90922C9.28859 9.83437 9.49179 9.70289 9.6492 9.60103C9.92493 9.42261 10.0602 9.33511 9.99083 9.8022C9.91523 10.3115 9.17632 10.4995 8.71188 10.5677C8.67814 10.6218 8.64321 10.6753 8.60709 10.7283L8.58743 10.7521C8.51549 10.8249 8.4428 10.8944 8.36937 10.9605C8.41626 10.9405 8.46134 10.9201 8.50546 10.9C8.68672 10.8177 8.85185 10.7427 9.0608 10.7427C9.18693 10.7427 9.01449 10.8086 8.7704 10.9018C8.48193 11.012 8.0934 11.1604 7.97945 11.2835C7.93177 11.335 7.90044 11.3767 7.87513 11.4104C7.80068 11.5095 7.77828 11.5393 7.54462 11.5456C7.18418 11.7371 6.8086 11.8579 6.41841 11.9074C6.44305 11.966 6.45337 12.0046 6.45337 12.0046H4.80834C4.80834 12.0046 4.82101 11.9572 4.85179 11.8877C4.50972 11.8296 4.17911 11.7158 3.86035 11.5467C3.85201 11.5469 3.84337 11.547 3.83441 11.547C3.47754 11.547 3.4612 11.5253 3.37487 11.4104C3.34956 11.3767 3.31824 11.335 3.27055 11.2835C3.1566 11.1604 2.76807 11.012 2.4796 10.9018C2.23551 10.8086 2.06307 10.7427 2.1892 10.7427C2.39815 10.7427 2.56328 10.8177 2.74454 10.9C2.80203 10.9261 2.86113 10.953 2.92378 10.9784C2.98288 11.0024 3.06214 11.0312 3.14933 11.0615C3.0363 10.9661 2.92499 10.863 2.81542 10.7521L2.79575 10.7283C2.76409 10.6819 2.73335 10.635 2.70353 10.5877C2.27348 10.5408 1.35281 10.3739 1.26795 9.8022C1.19862 9.33511 1.33385 9.42261 1.60958 9.60103C1.77566 9.7085 1.99271 9.84894 2.24674 9.92105C2.29295 9.93417 2.33391 9.94494 2.3701 9.95362C2.32121 9.83968 2.27686 9.72351 2.23704 9.60512C1.88611 9.29064 1.26795 8.64376 1.26795 7.98913C1.26795 7.57189 1.28011 7.60636 1.34786 7.79845C1.42855 8.0272 1.58807 8.47946 1.89978 8.6586C1.89978 8.6586 1.35487 6.43098 1.58622 6.0969C1.81758 5.76281 2.08626 6.46763 2.08626 6.66607C2.08626 6.70073 2.08963 6.66335 2.09738 6.57729C2.13402 6.17057 2.26863 4.67662 2.60869 4.56015V5.36766C2.60869 5.40531 2.62549 5.41999 2.65496 5.41644C2.88112 5.11773 3.16678 4.85142 3.51133 4.61759C3.56248 4.55433 3.60724 4.49534 3.6423 4.44445C3.89902 4.07175 4.54746 3.50882 4.33973 3.8713C4.27758 3.97974 4.20245 4.09529 4.13379 4.20091L4.13376 4.20095C4.11406 4.23125 4.09489 4.26074 4.07672 4.289C4.51414 4.07113 5.02036 3.89143 5.59461 3.75L5.67818 4.08172C5.17556 4.20551 4.73095 4.35814 4.34374 4.5397C4.44338 4.55472 4.54856 4.57991 4.64686 4.60346C4.77251 4.63356 4.88691 4.66097 4.96412 4.66097C5.18111 4.66097 4.5537 4.94503 4.23623 4.94503C4.04925 4.94503 3.88289 4.99137 3.74613 5.02946C3.65069 5.05605 3.56967 5.07862 3.50612 5.07862C3.45621 5.07862 3.49893 5.10211 3.56992 5.14116C3.71886 5.22308 3.99225 5.37345 3.79597 5.51896C3.6823 5.60322 3.53937 5.60106 3.38666 5.59875C3.21757 5.59619 3.03649 5.59345 2.86991 5.70766C2.75767 5.86848 2.6641 6.03891 2.58907 6.21898C2.66484 6.31823 2.9612 6.20309 3.02915 6.0969C3.12939 5.94024 3.71719 6.09445 3.26891 6.54375C3.04934 6.76382 2.76676 6.91974 2.55168 7.03842C2.48159 7.07709 2.41867 7.11181 2.36744 7.1435C2.36017 7.20503 2.35374 7.26612 2.34816 7.32677C2.36069 7.31362 2.37278 7.2963 2.38555 7.278C2.43242 7.21085 2.48838 7.13066 2.60869 7.19602C2.67875 7.23408 2.71202 7.23091 2.72461 7.22532C2.71073 7.24431 2.67874 7.32078 2.67874 7.57549C2.67874 7.7745 2.63227 7.96747 2.57538 8.12346C2.6998 8.00439 2.83408 7.96363 2.83408 8.19335C2.83408 8.38776 2.7954 8.51304 2.75664 8.63857C2.71773 8.76458 2.67874 8.89085 2.67874 9.08756C2.67874 9.48022 2.83408 10.0399 2.83408 9.92105C2.83408 9.8022 3.02276 9.03875 3.12939 9.38337C3.1682 9.50879 3.19363 9.67177 3.21994 9.84038C3.26592 10.135 3.31458 10.4469 3.44199 10.6053C3.5879 10.7867 4.10717 11.2109 4.43814 11.428C4.64197 11.5 4.8502 11.5481 5.06294 11.5724ZM2.73088 7.22004C2.73059 7.21934 2.72821 7.2204 2.72461 7.22532C2.72938 7.22321 2.73118 7.22074 2.73088 7.22004ZM8.53417 7.22532C8.53057 7.2204 8.52819 7.21934 8.5279 7.22004C8.52761 7.22074 8.52941 7.22321 8.53417 7.22532ZM8.6462 9.97082C8.66017 9.94149 8.6738 9.91199 8.6871 9.88232C8.65223 9.91628 8.62607 9.95224 8.6462 9.97082ZM5.7604 6.84336C5.75157 6.92748 5.72854 7.03055 5.70381 7.12478C5.7188 7.02146 5.73763 6.92705 5.7604 6.84336Z"
            fill="#F3E294"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <path
            d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V13C20 14.1046 19.1046 15 18 15H2C0.895431 15 0 14.1046 0 13V2Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
