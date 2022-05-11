import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './IconBase';

/** @deprecated Use SettingIcon instead */
export const CogIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 2C13.1894 2 13.8136 2.27905 14.2659 2.73036C14.2834 2.74784 14.3007 2.76559 14.3177 2.78358C14.7174 3.20678 14.971 3.76953 14.9977 4.39107L14.9985 4.41205C14.9995 4.44124 15 4.47056 15 4.5V4.51426C15 4.55491 15.0247 4.59145 15.0623 4.60702C15.0998 4.62261 15.1431 4.61423 15.1719 4.58546L15.182 4.57538C15.2028 4.55456 15.2239 4.53419 15.2452 4.51426L15.2607 4.5C15.719 4.07934 16.2962 3.86073 16.8782 3.84417C16.9029 3.84346 16.9277 3.84312 16.9524 3.84315C17.5913 3.84382 18.23 4.0879 18.7175 4.57538L19.4246 5.28249C19.9121 5.76997 20.1562 6.40868 20.1569 7.0476C20.1569 7.07234 20.1565 7.09709 20.1558 7.12182C20.1393 7.70375 19.9207 8.281 19.5 8.73935L19.4857 8.75476C19.4658 8.77611 19.4454 8.7972 19.4246 8.81802L19.4145 8.82811C19.3858 8.85687 19.3774 8.90017 19.393 8.93775C19.4085 8.97529 19.4451 9 19.4857 9H19.5C19.5294 9 19.5588 9.00051 19.5879 9.00152L19.6089 9.00233C20.2305 9.02898 20.7932 9.28257 21.2164 9.68233C21.2344 9.69933 21.2522 9.71659 21.2696 9.73411C21.721 10.1864 22 10.8106 22 11.5V12.5C22 13.1894 21.721 13.8136 21.2696 14.2659C21.2522 14.2834 21.2344 14.3007 21.2164 14.3177C20.7932 14.7174 20.2305 14.971 19.6089 14.9977L19.5879 14.9985C19.5588 14.9995 19.5294 15 19.5 15H19.4857C19.4451 15 19.4085 15.0247 19.393 15.0623C19.3774 15.0998 19.3858 15.1431 19.4145 15.1719L19.4246 15.182C19.4454 15.2028 19.4658 15.2239 19.4857 15.2452L19.5 15.2607C19.9207 15.719 20.1393 16.2962 20.1558 16.8782C20.1565 16.9029 20.1569 16.9277 20.1569 16.9524C20.1562 17.5913 19.9121 18.23 19.4246 18.7175L18.7175 19.4246C18.23 19.9121 17.5913 20.1562 16.9524 20.1568C16.9277 20.1569 16.9029 20.1565 16.8782 20.1558C16.2963 20.1393 15.719 19.9207 15.2607 19.5L15.2452 19.4857C15.2239 19.4658 15.2028 19.4454 15.182 19.4246L15.1719 19.4145C15.1431 19.3858 15.0998 19.3774 15.0623 19.393C15.0247 19.4085 15 19.4451 15 19.4857V19.5C15 19.5294 14.9995 19.5588 14.9985 19.5879L14.9977 19.6089C14.971 20.2305 14.7174 20.7932 14.3177 21.2164C14.3007 21.2344 14.2834 21.2522 14.2659 21.2696C13.8136 21.7209 13.1894 22 12.5 22H11.5C10.8106 22 10.1864 21.7209 9.73411 21.2696C9.71659 21.2522 9.69933 21.2344 9.68233 21.2164C9.28257 20.7932 9.02898 20.2305 9.00233 19.6089L9.00152 19.5879C9.00051 19.5588 9 19.5294 9 19.5V19.4857C9 19.4451 8.97529 19.4085 8.93774 19.393C8.90017 19.3774 8.85687 19.3858 8.8281 19.4145L8.81802 19.4246C8.7972 19.4454 8.77611 19.4658 8.75475 19.4857L8.73934 19.5C8.281 19.9207 7.70375 20.1393 7.12182 20.1558C7.09708 20.1565 7.07234 20.1569 7.0476 20.1568C6.40868 20.1562 5.76997 19.9121 5.28249 19.4246L4.57538 18.7175C4.0879 18.23 3.84382 17.5913 3.84315 16.9524C3.84312 16.9277 3.84346 16.9029 3.84417 16.8782C3.86073 16.2962 4.07934 15.719 4.5 15.2607L4.51426 15.2452C4.53419 15.2239 4.55456 15.2028 4.57538 15.182L4.58546 15.1719C4.61423 15.1431 4.62261 15.0998 4.60702 15.0623C4.59145 15.0247 4.55491 15 4.51426 15H4.5C4.47056 15 4.44125 14.9995 4.41205 14.9985L4.39107 14.9977C3.76953 14.971 3.20678 14.7174 2.78358 14.3177C2.76558 14.3007 2.74784 14.2834 2.73036 14.2659C2.27905 13.8136 2 13.1894 2 12.5V11.5C2 10.8106 2.27905 10.1864 2.73036 9.73411C2.74784 9.71659 2.76558 9.69933 2.78358 9.68233C3.20678 9.28257 3.76953 9.02898 4.39107 9.00233L4.41205 9.00152C4.44125 9.00051 4.47056 9 4.5 9H4.51426C4.55491 9 4.59145 8.97529 4.60702 8.93775C4.62261 8.90017 4.61423 8.85687 4.58546 8.82811L4.57538 8.81802C4.55456 8.7972 4.53419 8.77611 4.51426 8.75476L4.5 8.73935C4.07934 8.281 3.86073 7.70375 3.84417 7.12182C3.84346 7.09709 3.84312 7.07234 3.84315 7.0476C3.84382 6.40868 4.0879 5.76997 4.57538 5.28249L5.28249 4.57538C5.76997 4.0879 6.40868 3.84382 7.0476 3.84315C7.07234 3.84312 7.09709 3.84346 7.12182 3.84417C7.70375 3.86073 8.281 4.07934 8.73934 4.5L8.75476 4.51426C8.77611 4.53419 8.7972 4.55456 8.81802 4.57538L8.8281 4.58546C8.85687 4.61423 8.90017 4.62261 8.93775 4.60702C8.97529 4.59145 9 4.55491 9 4.51426V4.5C9 4.47056 9.00051 4.44124 9.00152 4.41205L9.00233 4.39107C9.02898 3.76953 9.28257 3.20678 9.68233 2.78358C9.69933 2.76559 9.71659 2.74784 9.73411 2.73036C10.1864 2.27905 10.8106 2 11.5 2H12.5ZM11 19.5C11 19.7761 11.2239 20 11.5 20H12.5C12.7761 20 13 19.7761 13 19.5V19.4857C13 18.6262 13.5212 17.8669 14.2962 17.5455C15.0727 17.2235 15.9787 17.3929 16.5861 18.0003L16.5962 18.0104C16.7915 18.2057 17.108 18.2057 17.3033 18.0104L18.0104 17.3033C18.2057 17.108 18.2057 16.7915 18.0104 16.5962L18.0003 16.5861C17.3929 15.9787 17.2235 15.0727 17.5455 14.2961C17.8669 13.5212 18.6262 13 19.4857 13H19.5C19.7761 13 20 12.7761 20 12.5V11.5C20 11.2239 19.7761 11 19.5 11H19.4857C18.6262 11 17.8669 10.4788 17.5455 9.70385C17.2235 8.92727 17.3929 8.02132 18.0003 7.41389L18.0104 7.40381C18.2057 7.20854 18.2057 6.89196 18.0104 6.6967L17.3033 5.98959C17.108 5.79433 16.7915 5.79433 16.5962 5.98959L16.5861 5.99968C15.9787 6.60711 15.0727 6.77651 14.2962 6.45448C13.5212 6.13311 13 5.37381 13 4.51426V4.5C13 4.22386 12.7761 4 12.5 4H11.5C11.2239 4 11 4.22386 11 4.5V4.51426C11 5.37381 10.4788 6.13311 9.70384 6.45448C8.92725 6.77651 8.02132 6.60711 7.41389 5.99968L7.40381 5.98959C7.20854 5.79433 6.89196 5.79433 6.6967 5.98959L5.98959 6.6967C5.79433 6.89196 5.79433 7.20854 5.98959 7.40381L5.99967 7.41389C6.60711 8.02132 6.77651 8.92727 6.45448 9.70385C6.13311 10.4788 5.37382 11 4.51426 11H4.5C4.22386 11 4 11.2239 4 11.5V12.5C4 12.7761 4.22386 13 4.5 13H4.51426C5.37382 13 6.13311 13.5212 6.45447 14.2961C6.77651 15.0727 6.60711 15.9787 5.99968 16.5861L5.98959 16.5962C5.79433 16.7915 5.79433 17.108 5.98959 17.3033L6.6967 18.0104C6.89196 18.2057 7.20854 18.2057 7.4038 18.0104L7.41389 18.0003C8.02132 17.3929 8.92726 17.2235 9.70384 17.5455C10.4788 17.8669 11 18.6262 11 19.4857V19.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="currentColor"
    />
  </IconBase>
);
CogIcon.deprecated = true;
