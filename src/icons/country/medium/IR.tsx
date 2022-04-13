import React from 'react';

import { useStableUniqueId } from 'hooks';

export const IR = () => {
  const ids = useStableUniqueId(2);
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
          d="M0 0V15H20V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V5H20V0H0Z"
            fill="#5EAA22"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10V15H20V10H0Z"
            fill="#E31D1C"
          />
          <path
            d="M0.232927 10.8542H-1.18835"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M-1.203 11.4171V11.0908H-0.740336V11.4061H-0.272819V11.0912H-0.515374"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M0.211416 11.4036H-0.0241699V11.0975H0.471849V10.8467V11.4036H0.696309V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M0.94881 10.8799C0.94881 10.9107 0.94881 11.406 0.94881 11.406H0.71582"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M2.67189 10.8542H1.25061"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M1.23596 11.4171V11.0908H1.69863V11.4061H2.16615V11.0912H1.92359"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M2.69408 11.4036H2.4585V11.0975H2.95451V10.8467V11.4036H3.17897V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M3.43148 10.8799C3.43148 10.9107 3.43148 11.406 3.43148 11.406H3.19849"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M5.15456 10.8542H3.73328"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M3.71863 11.4171V11.0908H4.18129V11.4061H4.64881V11.0912H4.40626"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M5.13305 11.4036H4.89746V11.0975H5.39348V10.8467V11.4036H5.61794V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M5.87044 10.8799C5.87044 10.9107 5.87044 11.406 5.87044 11.406H5.63745"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M7.59352 10.8542H6.17224"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M6.15759 11.4171V11.0908H6.62026V11.4061H7.08778V11.0912H6.84522"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M7.57213 11.4036H7.33655V11.0975H7.83257V10.8467V11.4036H8.05703V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M8.30953 10.8799C8.30953 10.9107 8.30953 11.406 8.30953 11.406H8.07654"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M10.0326 10.8542H8.61133"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M8.59668 11.4171V11.0908H9.05935V11.4061H9.52686V11.0912H9.28431"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M10.0547 11.4036H9.81909V11.0975H10.3151V10.8467V11.4036H10.5396V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M10.7921 10.8799C10.7921 10.9107 10.7921 11.406 10.7921 11.406H10.5591"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M12.5152 10.8542H11.0939"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M11.0792 11.4171V11.0908H11.5419V11.4061H12.0094V11.0912H11.7669"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M12.5372 11.4036H12.3016V11.0975H12.7977V10.8467V11.4036H13.0221V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M13.2746 10.8799C13.2746 10.9107 13.2746 11.406 13.2746 11.406H13.0416"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M14.9977 10.8542H13.5764"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M13.5618 11.4171V11.0908H14.0244V11.4061H14.492V11.0912H14.2494"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M15.0199 11.4036H14.7843V11.0975H15.2803V10.8467V11.4036H15.5048V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M15.7573 10.8799C15.7573 10.9107 15.7573 11.406 15.7573 11.406H15.5243"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M17.4804 10.8542H16.0591"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M16.0444 11.4171V11.0908H16.5071V11.4061H16.9746V11.0912H16.7321"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M17.4589 11.4036H17.2233V11.0975H17.7193V10.8467V11.4036H17.9437V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M18.1962 10.8799C18.1962 10.9107 18.1962 11.406 18.1962 11.406H17.9633"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M19.9193 10.8542H18.498"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M18.4834 11.4171V11.0908H18.9461V11.4061H19.4136V11.0912H19.171"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M20.0286 11.4036H19.793V11.0975H20.289V10.8467V11.4036H20.5134V10.8467"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M0.232927 3.22925H-1.18835"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M-1.203 3.79207V3.46582H-0.740336V3.78112H-0.272819V3.46617H-0.515374"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M0.211416 3.77861H-0.0241699V3.47247H0.471849V3.22168V3.77861H0.696309V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M0.94881 3.25488C0.94881 3.28566 0.94881 3.78103 0.94881 3.78103H0.71582"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M2.67189 3.22925H1.25061"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M1.23596 3.79207V3.46582H1.69863V3.78112H2.16615V3.46617H1.92359"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M2.69408 3.77861H2.4585V3.47247H2.95451V3.22168V3.77861H3.17897V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M3.43148 3.25488C3.43148 3.28566 3.43148 3.78103 3.43148 3.78103H3.19849"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M5.15456 3.22925H3.73328"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M3.71863 3.79207V3.46582H4.18129V3.78112H4.64881V3.46617H4.40626"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M5.13305 3.77861H4.89746V3.47247H5.39348V3.22168V3.77861H5.61794V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M5.87044 3.25488C5.87044 3.28566 5.87044 3.78103 5.87044 3.78103H5.63745"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M7.59352 3.22925H6.17224"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M6.15759 3.79207V3.46582H6.62026V3.78112H7.08778V3.46617H6.84522"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M7.57213 3.77861H7.33655V3.47247H7.83257V3.22168V3.77861H8.05703V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M8.30953 3.25488C8.30953 3.28566 8.30953 3.78103 8.30953 3.78103H8.07654"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M10.0326 3.22925H8.61133"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M8.59668 3.79207V3.46582H9.05935V3.78112H9.52686V3.46617H9.28431"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M10.0547 3.77861H9.81909V3.47247H10.3151V3.22168V3.77861H10.5396V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M10.7921 3.25488C10.7921 3.28566 10.7921 3.78103 10.7921 3.78103H10.5591"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M12.5152 3.22925H11.0939"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M11.0792 3.79207V3.46582H11.5419V3.78112H12.0094V3.46617H11.7669"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M12.5372 3.77861H12.3016V3.47247H12.7977V3.22168V3.77861H13.0221V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M13.2746 3.25488C13.2746 3.28566 13.2746 3.78103 13.2746 3.78103H13.0416"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M14.9977 3.22925H13.5764"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M13.5618 3.79207V3.46582H14.0244V3.78112H14.492V3.46617H14.2494"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M15.0199 3.77861H14.7843V3.47247H15.2803V3.22168V3.77861H15.5048V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M15.7573 3.25488C15.7573 3.28566 15.7573 3.78103 15.7573 3.78103H15.5243"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M17.4804 3.22925H16.0591"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M16.0444 3.79207V3.46582H16.5071V3.78112H16.9746V3.46617H16.7321"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M17.4589 3.77861H17.2233V3.47247H17.7193V3.22168V3.77861H17.9437V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M18.1962 3.25488C18.1962 3.28566 18.1962 3.78103 18.1962 3.78103H17.9633"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M19.9193 3.22925H18.498"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M18.4834 3.79207V3.46582H18.9461V3.78112H19.4136V3.46617H19.171"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            d="M20.0286 3.77861H19.793V3.47247H20.289V3.22168V3.77861H20.5134V3.22168"
            stroke="#F7FCFF"
            strokeWidth="0.625"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.12896 5.15625C9.12896 5.15625 9.39604 5.29688 9.6694 5.29688C9.94276 5.29688 10.2178 5.15625 10.2178 5.15625V5.34375C10.2178 5.34375 9.91755 5.48438 9.65161 5.48438C9.38567 5.48438 9.12896 5.34375 9.12896 5.34375V5.15625ZM7.16028 7.36913C7.16028 6.25788 8.68652 5.53125 8.68652 5.53125C8.68652 5.53125 7.80438 6.00388 7.80438 7.32256C7.80438 8.64123 8.26232 9.21229 8.26232 9.21229C8.26232 9.21229 7.16028 8.48038 7.16028 7.36913ZM12.3088 7.3078C12.3088 6.19655 10.784 5.53125 10.784 5.53125C10.784 5.53125 11.6662 6.00388 11.6662 7.32256C11.6662 8.64123 11.2082 9.21229 11.2082 9.21229C11.2082 9.21229 12.3088 8.41905 12.3088 7.3078ZM8.20222 7.61099C8.14406 6.50126 9.06723 5.50658 9.06723 5.50658C9.06723 5.50658 8.73122 5.96365 8.80024 7.28052C8.82393 7.73267 9.00203 8.40538 9.22641 8.80199V5.57812H10.1639V8.82995C10.3886 8.45948 10.5617 7.82785 10.5858 7.36913C10.6548 6.05226 10.3349 5.50658 10.3349 5.50658C10.3349 5.50658 11.258 6.50126 11.1999 7.61099C11.1652 8.27191 10.6567 8.97089 10.251 9.42817C10.4481 9.47212 10.7124 9.52571 11.0756 9.59742C11.0833 9.6376 11.0024 9.63573 10.8416 9.63204C10.664 9.62795 10.389 9.62163 10.0285 9.66718C9.86281 9.83705 9.74746 9.93774 9.74746 9.93774C9.74746 9.93774 9.72922 9.9131 9.70105 9.87902C9.67288 9.9131 9.65465 9.93774 9.65465 9.93774C9.65465 9.93774 9.53929 9.83705 9.37356 9.66719C9.01307 9.62163 8.73812 9.62795 8.56055 9.63204C8.39973 9.63573 8.31879 9.6376 8.32655 9.59742C8.68976 9.52571 8.95398 9.47212 9.15111 9.42817C8.74542 8.97089 8.23686 8.27191 8.20222 7.61099Z"
            fill="#E31D1C"
          />
        </g>
      </g>
    </svg>
  );
};
