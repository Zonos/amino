import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MP = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H21.25V15H0V0Z"
          fill="#2993EC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.88293 7.23958C3.88293 10.5475 6.62162 13.2292 9.99996 13.2292C13.3783 13.2292 16.117 10.5475 16.117 7.23958C16.117 3.93163 13.3783 1.25 9.99996 1.25C6.62162 1.25 3.88293 3.93163 3.88293 7.23958ZM14.7872 7.23958C14.7872 9.82842 12.6439 11.9271 9.99996 11.9271C7.35604 11.9271 5.21272 9.82842 5.21272 7.23958C5.21272 4.65075 7.35604 2.55208 9.99996 2.55208C12.6439 2.55208 14.7872 4.65075 14.7872 7.23958Z"
          fill="#F1F9FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.41492 7.2395C4.41492 10.2598 6.91545 12.7083 10 12.7083C13.0846 12.7083 15.5851 10.2598 15.5851 7.2395C15.5851 4.21919 13.0846 1.77075 10 1.77075C6.91545 1.77075 4.41492 4.21919 4.41492 7.2395ZM15.3192 7.2395C15.3192 10.116 12.9377 12.4478 10 12.4478C7.06234 12.4478 4.68087 10.116 4.68087 7.2395C4.68087 4.36302 7.06234 2.03117 10 2.03117C12.9377 2.03117 15.3192 4.36302 15.3192 7.2395Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99998 1.38013C9.93256 1.5193 9.89885 1.71706 9.89885 1.97342C9.89885 2.22978 9.79958 2.4864 9.60105 2.74327C9.56417 2.46046 9.54573 2.20384 9.54573 1.97342C9.54573 1.743 9.69715 1.54524 9.99998 1.38013ZM11.3976 1.59177C11.3006 1.7122 11.2233 1.89732 11.1656 2.1471C11.108 2.39689 10.9535 2.6246 10.7023 2.83023C10.73 2.54637 10.7697 2.29218 10.8216 2.06767C10.8734 1.84315 11.0654 1.68452 11.3976 1.59177ZM12.3581 2.60484C12.4745 2.37642 12.5943 2.21552 12.7176 2.12213C12.3728 2.13176 12.1481 2.23922 12.0435 2.44453C11.9389 2.64983 11.8388 2.88685 11.7433 3.15558C12.0368 3.01684 12.2417 2.83326 12.3581 2.60484ZM13.8695 2.92742C13.7284 2.99069 13.5754 3.12052 13.4106 3.3169C13.2459 3.51328 13.0049 3.64605 12.6877 3.71521C12.8412 3.47486 12.992 3.26643 13.1401 3.08992C13.2882 2.91341 13.5314 2.85924 13.8695 2.92742ZM14.2675 4.24748C14.4722 4.0932 14.6504 4.0011 14.8021 3.97119C14.488 3.82871 14.239 3.8268 14.0549 3.96547C13.8709 4.10414 13.6771 4.2733 13.4734 4.47295C13.798 4.47692 14.0627 4.40176 14.2675 4.24748ZM15.4666 5.21007C15.3121 5.20239 15.1169 5.24863 14.8809 5.3488C14.645 5.44896 14.37 5.45786 14.0559 5.37547C14.3019 5.23102 14.5309 5.11378 14.743 5.02375C14.9551 4.93372 15.1963 4.99583 15.4666 5.21007ZM15.2203 6.55673C15.4727 6.51221 15.6733 6.51107 15.8221 6.5533C15.6069 6.28374 15.3859 6.16897 15.1589 6.20898C14.932 6.24899 14.6825 6.31171 14.4104 6.39714C14.6978 6.54805 14.9678 6.60125 15.2203 6.55673ZM3.80249 6.10596C3.92784 6.19652 4.11675 6.26406 4.36921 6.30858C4.62167 6.35309 4.85715 6.49541 5.07565 6.73554C4.79073 6.72274 4.53481 6.69634 4.30789 6.65633C4.08097 6.61632 3.9125 6.43286 3.80249 6.10596ZM4.76323 5.11685C4.52725 5.01668 4.35838 4.90838 4.25661 4.79193C4.29027 5.13521 4.41315 5.35186 4.62525 5.44189C4.83736 5.53192 5.08078 5.61522 5.35552 5.69178C5.19663 5.40866 4.9992 5.21701 4.76323 5.11685ZM5.01695 3.60842C5.08752 3.74602 5.22518 3.89196 5.42991 4.04624C5.63465 4.20052 5.77985 4.43423 5.86552 4.74738C5.61746 4.60663 5.40142 4.46692 5.2174 4.32825C5.03338 4.18958 4.96656 3.94963 5.01695 3.60842ZM6.32811 3.15493C6.16333 2.95855 6.06203 2.78538 6.02422 2.63543C5.89837 2.95657 5.9095 3.20539 6.05761 3.38191C6.20572 3.55842 6.3848 3.74315 6.59483 3.93609C6.5818 3.6117 6.49289 3.35131 6.32811 3.15493ZM7.23288 1.9159C7.23599 2.07051 7.29574 2.26203 7.41212 2.49044C7.52851 2.71886 7.55656 2.99257 7.49628 3.31159C7.33503 3.07634 7.2021 2.85606 7.0975 2.65075C6.99289 2.44545 7.03802 2.2005 7.23288 1.9159ZM8.62561 2.09042C8.56794 1.84063 8.5563 1.64035 8.59069 1.48958C8.33276 1.71858 8.22971 1.94534 8.28154 2.16985C8.33337 2.39437 8.40907 2.64026 8.50861 2.90753C8.64428 2.61258 8.68327 2.34021 8.62561 2.09042Z"
          fill="#FDDA33"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.11627 3.59375C8.88705 3.59375 8.71653 3.80563 8.76553 4.02955L9.00732 5.13438C9.02856 5.23145 9.08792 5.31209 9.16759 5.36199C9.09411 5.41912 9.04312 5.50442 9.03137 5.60302L8.16415 12.8815C8.14824 13.015 8.20798 13.1459 8.32473 13.2126C8.65113 13.3992 9.35878 13.75 10.0664 13.75C10.7741 13.75 11.4817 13.3992 11.8081 13.2126C11.9249 13.1459 11.9846 13.015 11.9687 12.8815L11.1015 5.60302C11.0897 5.50442 11.0388 5.41912 10.9653 5.36199C11.045 5.31209 11.1043 5.23145 11.1256 5.13438L11.3673 4.02955C11.4163 3.80563 11.2458 3.59375 11.0166 3.59375H9.11627Z"
          fill="#A7A7A7"
        />
        <path
          d="M4.07458 7.50809C4.10682 7.40494 4.21834 7.34691 4.32369 7.37847C4.42903 7.41004 4.48829 7.51924 4.45606 7.62239C4.40029 7.80085 4.40029 8.06444 4.46181 8.40931C4.48541 8.54159 4.51347 8.64373 4.54798 8.73396C4.56172 8.7699 4.57594 8.8028 4.59494 8.84362C4.58648 8.82544 4.63284 8.92391 4.64411 8.94944C4.70373 9.08437 4.7301 9.20262 4.7301 9.37587C4.7301 9.48374 4.64079 9.57118 4.53063 9.57118C4.42046 9.57118 4.33116 9.48374 4.33116 9.37587C4.33116 9.25748 4.3165 9.19175 4.27797 9.10453C4.26889 9.08399 4.22559 8.992 4.2319 9.00556C4.20939 8.95718 4.19176 8.91639 4.17438 8.87095C4.13108 8.75774 4.09661 8.63225 4.06883 8.47653C3.99745 8.07644 3.99745 7.75491 4.07458 7.50809Z"
          fill="#73BE4A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1329 10.1119L7.56137 11.8641L8.46859 8.92787L5.97206 7.07457L9.10431 7.01207L10.1329 4.1145L11.1616 7.01207L14.2938 7.07457L11.7973 8.92787L12.7045 11.8641L10.1329 10.1119Z"
          fill="#F7FCFF"
        />
        <path
          d="M15.9746 7.76834C15.9424 7.66519 15.8309 7.60716 15.7255 7.63873C15.6202 7.67029 15.5609 7.77949 15.5931 7.88264C15.6489 8.0611 15.6489 8.3247 15.5874 8.66956C15.5638 8.80185 15.5357 8.90398 15.5012 8.99421C15.4875 9.03015 15.4733 9.06305 15.4543 9.10388C15.4627 9.0857 15.4164 9.18417 15.4051 9.20969C15.3455 9.34462 15.3191 9.46287 15.3191 9.63612C15.3191 9.74399 15.4084 9.83143 15.5186 9.83143C15.6287 9.83143 15.718 9.74399 15.718 9.63612C15.718 9.51773 15.7327 9.452 15.7712 9.36479C15.7803 9.34424 15.8236 9.25226 15.8173 9.26582C15.8398 9.21744 15.8574 9.17664 15.8748 9.1312C15.9181 9.01799 15.9526 8.89251 15.9804 8.73678C16.0517 8.33669 16.0517 8.01516 15.9746 7.76834Z"
          fill="#73BE4A"
        />
        <path
          d="M10.038 1.96729C10.038 1.96729 10.7657 2.29149 10.4514 2.80197"
          stroke="#73BE4A"
          strokeWidth="0.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5699 1.96729C10.5699 1.96729 11.2977 2.29149 10.9834 2.80197"
          stroke="#73BE4A"
          strokeWidth="0.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.78736 3.97299C5.84012 3.88167 5.95094 3.85417 6.03488 3.91157C6.11883 3.96897 6.1441 4.08954 6.09134 4.18087C5.99011 4.35609 5.93741 4.59649 5.93741 4.90474C5.93741 5.01261 5.85704 5.10005 5.75789 5.10005C5.65874 5.10005 5.57837 5.01261 5.57837 4.90474C5.57837 4.52802 5.64664 4.21655 5.78736 3.97299Z"
          fill="#73BE4A"
        />
        <path
          d="M5.50528 5.75786C5.50528 5.86573 5.42491 5.95317 5.32576 5.95317C5.22661 5.95317 5.14624 5.86573 5.14624 5.75786V5.20151C5.14624 4.80784 5.20799 4.49782 5.33819 4.27143C5.39078 4.17998 5.50155 4.15224 5.5856 4.20945C5.66965 4.26667 5.69515 4.38718 5.64256 4.47863C5.55328 4.63387 5.50528 4.87484 5.50528 5.20151V5.75786Z"
          fill="#73BE4A"
        />
        <path
          d="M14.6776 5.49736C14.6776 5.60523 14.758 5.69268 14.8571 5.69268C14.9562 5.69268 15.0366 5.60523 15.0366 5.49736V4.94101C15.0366 4.54734 14.9749 4.23732 14.8447 4.01093C14.7921 3.91949 14.6813 3.89174 14.5973 3.94896C14.5132 4.00617 14.4877 4.12669 14.5403 4.21813C14.6296 4.37338 14.6776 4.61434 14.6776 4.94101V5.49736Z"
          fill="#73BE4A"
        />
        <path
          d="M15.2096 6.40898C15.2096 6.51685 15.2899 6.6043 15.3891 6.6043C15.4882 6.6043 15.5686 6.51685 15.5686 6.40898V5.85263C15.5686 5.45896 15.5069 5.14894 15.3766 4.92255C15.3241 4.83111 15.2133 4.80336 15.1292 4.86058C15.0452 4.91779 15.0197 5.03831 15.0723 5.12975C15.1616 5.285 15.2096 5.52596 15.2096 5.85263V6.40898Z"
          fill="#73BE4A"
        />
      </g>
    </svg>
  );
};
