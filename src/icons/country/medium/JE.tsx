import React from 'react';

import { useStableUniqueId } from 'hooks';

export const JE = () => {
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
          d="M0 0H20V15H0V0Z"
          fill="#F7FCFF"
        />
        <path
          d="M-1.68841 0.777984L-2.96875 0.00379562V1.5V14V15.4962L-1.68841 14.722L8.6477 8.47202L9.84175 7.75L8.6477 7.02798L-1.68841 0.777984Z"
          fill="#F7FCFF"
          stroke="#E31D1C"
          strokeWidth="1.6875"
        />
        <path
          d="M21.8255 0.77037L23.093 0.0342646V1.5V14V15.4657L21.8255 14.7296L11.0638 8.47963L9.80742 7.75L11.0638 7.02037L21.8255 0.77037Z"
          fill="#F7FCFF"
          stroke="#E31D1C"
          strokeWidth="1.6875"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.54667 2.93939C8.54667 2.93939 8.01002 5.31334 9.86298 6.22509C9.86298 6.22509 11.6418 5.25551 11.2423 2.93939C11.2423 2.93939 10.4783 2.68384 9.87087 2.68384C9.2634 2.68384 8.54667 2.93939 8.54667 2.93939Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.73906 3.43655C8.73906 3.43655 8.93724 3.34881 9.03534 3.43655C9.13344 3.52429 9.21382 3.42928 9.21382 3.37635C9.21382 3.32343 9.36959 3.14174 9.36959 3.28915C9.36959 3.43655 9.3211 3.51977 9.45802 3.51977C9.59494 3.51977 10.2115 3.31616 10.3593 3.37635C10.5072 3.43655 10.6203 3.42158 10.5827 3.33521C10.5451 3.24884 10.4486 3.19486 10.2626 3.242C10.0766 3.28915 10.1205 3.33521 9.95971 3.33521C9.79897 3.33521 9.62005 3.28915 9.62005 3.28915C9.62005 3.28915 9.67031 3.21169 9.85383 3.26679C10.0374 3.32188 10.2905 3.19855 10.3593 3.19855C10.4282 3.19855 10.6176 3.19486 10.6364 3.242C10.6552 3.28915 10.7696 3.33241 10.6824 3.37635C10.5952 3.4203 10.4514 3.44783 10.5503 3.50414C10.6493 3.56045 10.8768 3.5496 10.8878 3.60817C10.8987 3.66674 11.0066 3.7542 10.9633 3.7542C10.92 3.7542 10.8418 3.83669 10.769 3.81158C10.6961 3.78646 10.6876 3.76441 10.7574 3.74406C10.8272 3.72371 10.8266 3.63815 10.769 3.63815C10.7114 3.63815 10.7395 3.66813 10.6083 3.63815C10.4772 3.60817 10.3036 3.57484 10.314 3.63815C10.3245 3.70145 10.4099 3.79863 10.2523 3.81158C10.0948 3.82453 10.021 3.87652 9.99038 3.83465C9.95971 3.79278 9.85011 3.73698 9.9363 3.71909C10.0225 3.7012 10.1048 3.77991 10.1359 3.76706C10.1669 3.7542 10.2373 3.74705 10.1783 3.6926C10.1194 3.63815 10.0223 3.60609 10.1123 3.56533C10.2024 3.52458 10.1313 3.52374 9.95971 3.60817C9.7881 3.6926 9.69265 3.76435 9.54199 3.7542C9.39133 3.74406 9.3349 3.75775 9.28647 3.74406C9.23805 3.73037 9.00221 3.89528 8.93429 3.85343C8.86638 3.81158 8.64713 3.79552 8.6866 3.74406C8.72607 3.6926 8.77906 3.6661 8.83808 3.6926C8.8971 3.71909 8.95574 3.74559 8.99554 3.71909C9.03534 3.6926 9.15028 3.60169 9.12137 3.58351C9.09246 3.56533 9.12042 3.50414 8.95673 3.50414C8.79304 3.50414 8.73549 3.57234 8.69663 3.52937C8.65777 3.4864 8.73906 3.43655 8.73906 3.43655Z"
          fill="#FFD100"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.90256 4.21662C8.90256 4.21662 9.07679 4.13948 9.16304 4.21662C9.24929 4.29375 9.31995 4.21023 9.31995 4.1637C9.31995 4.11717 9.4569 3.95744 9.4569 4.08703C9.4569 4.21662 9.41427 4.28979 9.53464 4.28979C9.65502 4.28979 10.1971 4.11078 10.327 4.1637C10.457 4.21662 10.5565 4.20346 10.5234 4.12753C10.4904 4.05159 10.4055 4.00414 10.242 4.04558C10.0784 4.08703 10.117 4.12753 9.97571 4.12753C9.83439 4.12753 9.6771 4.08703 9.6771 4.08703C9.6771 4.08703 9.72128 4.01893 9.88263 4.06737C10.044 4.11581 10.2665 4.00738 10.327 4.00738C10.3876 4.00738 10.5541 4.00414 10.5707 4.04558C10.5872 4.08703 10.6877 4.12506 10.6111 4.1637C10.5344 4.20234 10.408 4.22654 10.495 4.27604C10.582 4.32555 10.782 4.31601 10.7916 4.3675C10.8013 4.419 10.8961 4.49589 10.858 4.49589C10.82 4.49589 10.7512 4.56841 10.6872 4.54633C10.6231 4.52425 10.6156 4.50486 10.677 4.48697C10.7384 4.46908 10.7378 4.39386 10.6872 4.39386C10.6365 4.39386 10.6613 4.42021 10.546 4.39386C10.4307 4.3675 10.278 4.3382 10.2872 4.39386C10.2964 4.44951 10.3715 4.53494 10.233 4.54633C10.0945 4.55772 10.0296 4.60343 10.0027 4.56662C9.97571 4.5298 9.87936 4.48075 9.95513 4.46502C10.0309 4.44929 10.1033 4.51849 10.1306 4.50719C10.1579 4.49589 10.2197 4.4896 10.1679 4.44173C10.1161 4.39386 10.0307 4.36567 10.1099 4.32984C10.1891 4.29401 10.1266 4.29327 9.97571 4.3675C9.82484 4.44173 9.74092 4.50481 9.60847 4.49589C9.47601 4.48697 9.4264 4.499 9.38383 4.48697C9.34125 4.47494 9.13391 4.61992 9.0742 4.58312C9.0145 4.54633 8.82174 4.53221 8.85644 4.48697C8.89114 4.44173 8.93773 4.41844 8.98962 4.44173C9.0415 4.46502 9.09306 4.48831 9.12805 4.46502C9.16304 4.44173 9.26409 4.3618 9.23867 4.34582C9.21326 4.32984 9.23784 4.27604 9.09393 4.27604C8.95002 4.27604 8.89942 4.336 8.86526 4.29822C8.8311 4.26045 8.90256 4.21662 8.90256 4.21662Z"
          fill="#FFD100"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.13382 5.00856C9.13382 5.00856 9.26594 4.95007 9.33134 5.00856C9.39674 5.06705 9.45033 5.00372 9.45033 4.96843C9.45033 4.93315 9.55417 4.81202 9.55417 4.91029C9.55417 5.00856 9.52185 5.06405 9.61313 5.06405C9.7044 5.06405 10.1154 4.9283 10.214 4.96843C10.3126 5.00856 10.388 4.99858 10.3629 4.941C10.3379 4.88342 10.2735 4.84744 10.1495 4.87886C10.0255 4.91029 10.0548 4.941 9.94759 4.941C9.84042 4.941 9.72115 4.91029 9.72115 4.91029C9.72115 4.91029 9.75466 4.85866 9.877 4.89539C9.99935 4.93212 10.1681 4.8499 10.214 4.8499C10.2599 4.8499 10.3862 4.84744 10.3987 4.87886C10.4113 4.91029 10.4875 4.93913 10.4294 4.96843C10.3713 4.99773 10.2754 5.01608 10.3413 5.05362C10.4073 5.09116 10.559 5.08393 10.5663 5.12298C10.5736 5.16202 10.6455 5.22033 10.6166 5.22033C10.5878 5.22033 10.5356 5.27532 10.4871 5.25858C10.4385 5.24184 10.4328 5.22713 10.4794 5.21357C10.5259 5.2 10.5255 5.14296 10.4871 5.14296C10.4487 5.14296 10.4674 5.16295 10.38 5.14296C10.2926 5.12298 10.1768 5.10076 10.1838 5.14296C10.1908 5.18516 10.2477 5.24995 10.1427 5.25858C10.0376 5.26721 9.98847 5.30188 9.96803 5.27396C9.94759 5.24605 9.87452 5.20885 9.93198 5.19692C9.98943 5.185 10.0443 5.23747 10.065 5.2289C10.0857 5.22033 10.1326 5.21556 10.0933 5.17926C10.0541 5.14296 9.98929 5.12159 10.0493 5.09442C10.1094 5.06725 10.062 5.06669 9.94759 5.12298C9.83318 5.17926 9.76955 5.2271 9.66911 5.22033C9.56867 5.21357 9.53105 5.22269 9.49876 5.21357C9.46648 5.20444 9.30925 5.31438 9.26398 5.28648C9.2187 5.25858 9.07254 5.24788 9.09885 5.21357C9.12516 5.17926 9.16049 5.1616 9.19983 5.17926C9.23918 5.19692 9.27828 5.21459 9.30481 5.19692C9.33134 5.17926 9.40797 5.11865 9.38869 5.10654C9.36942 5.09442 9.38806 5.05362 9.27893 5.05362C9.1698 5.05362 9.13144 5.09909 9.10554 5.07044C9.07963 5.0418 9.13382 5.00856 9.13382 5.00856Z"
          fill="#FFD100"
        />
      </g>
    </svg>
  );
};
