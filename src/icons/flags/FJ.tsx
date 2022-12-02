import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const FJ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(6);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[5]})`}>
        <mask
          id={`${ids[0]}`}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#67BFE5"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <mask
              id={`${ids[2]}`}
              width="9"
              height="7"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M0 0h9v7H0z" />
            </mask>
            <g mask={`url(#${ids[2]})`}>
              <path
                fill="#F7FCFF"
                d="m-1.002 6.5 1.98.868L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865L-1.002 6.5Z"
              />
              <path
                fill="#F50100"
                d="m-.731 7.108 1.009.505 9.436-8.08H8.298L-.731 7.109Z"
              />
              <path
                fill="#F7FCFF"
                d="m10.002 6.5-1.98.868L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865L10.002 6.5Z"
              />
              <path
                fill="#F50100"
                d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463 3.502 2.972Z"
              />
              <mask
                id={`${ids[3]}`}
                width="11"
                height="9"
                x="-1"
                y="-1"
                fill="#000"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#fff" d="M-1-1h11v9H-1z" />
                <path
                  fillRule="evenodd"
                  d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
                  clipRule="evenodd"
                />
              </mask>
              <path
                fill="#F50100"
                fillRule="evenodd"
                d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
                clipRule="evenodd"
              />
              <path
                fill="#F7FCFF"
                d="M3.992 0v-.75h-.75V0h.75Zm1 0h.75v-.75h-.75V0Zm-1 3v.75h.75V3h-.75ZM0 3v-.75h-.75V3H0Zm0 1h-.75v.75H0V4Zm3.992 0h.75v-.75h-.75V4Zm0 3h-.75v.75h.75V7Zm1 0v.75h.75V7h-.75Zm0-3v-.75h-.75V4h.75ZM9 4v.75h.75V4H9Zm0-1h.75v-.75H9V3ZM4.992 3h-.75v.75h.75V3Zm-1-2.25h1v-1.5h-1v1.5ZM4.742 3V0h-1.5v3h1.5ZM0 3.75h3.992v-1.5H0v1.5ZM.75 4V3h-1.5v1h1.5Zm3.242-.75H0v1.5h3.992v-1.5ZM4.742 7V4h-1.5v3h1.5Zm.25-.75h-1v1.5h1v-1.5ZM4.242 4v3h1.5V4h-1.5ZM9 3.25H4.992v1.5H9v-1.5ZM8.25 3v1h1.5V3h-1.5Zm-3.258.75H9v-1.5H4.992v1.5ZM4.242 0v3h1.5V0h-1.5Z"
                mask={`url(#${ids[3]})`}
              />
            </g>
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M10 5h4.828v4.167S14.423 11 12.414 11C10.404 11 10 9.167 10 9.167V5Z"
              clipRule="evenodd"
            />
            <mask
              id={`${ids[4]}`}
              width="5"
              height="6"
              x="10"
              y="5"
              maskUnits="userSpaceOnUse"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M10 5h4.828v4.167S14.423 11 12.414 11C10.404 11 10 9.167 10 9.167V5Z"
                clipRule="evenodd"
              />
            </mask>
            <g mask={`url(#${ids[4]})`}>
              <path fill="#C3352C" d="M10 5h4.828v1.5H10z" />
              <path fill="#C3352C" d="M12.069 6.333h.69V11h-.69z" />
              <path
                fill="#C3352C"
                fillRule="evenodd"
                d="M10 8.167h4.828v.666H10v-.666Z"
                clipRule="evenodd"
              />
              <path
                fill="#979797"
                fillRule="evenodd"
                d="M11.27 10.368c.29.41.527.571.694.33.118-.17.13-.34-.037-.374a2.795 2.795 0 0 1-.205-.287l.005-.005c.047-.046.05-.107.04-.13-.004-.03.02-.073.17-.188.137-.104.198-.203.108-.311-.047-.057-.09-.068-.223-.089l-.04-.006a.716.716 0 0 1-.087-.018l-.093-.178a1.145 1.145 0 0 0-.51.098l-.152.064c-.05.021-.06.026-.061.025l.002-.002c.004-.003.01-.008.001-.008-.035 0-.073-.004-.178-.017l-.02-.003c-.302-.038-.378-.037-.427.104-.074.214.367.605.6.652.118.024.258.136.413.343Zm.328-.294c.029 0 .05 0 .07-.006l.006-.013a.132.132 0 0 1-.076.02Zm-1.1-.59c-.007-.007-.009-.017-.005-.029 0 .003.002.008.008.016a.347.347 0 0 0 .026.029.06.06 0 0 1-.03-.016Zm.409.296c-.084-.016-.297-.194-.38-.28.022.006.051.01.083.013.014 0 .028.002.043.004l.02.003c.118.015.159.019.209.019.029 0 .023.01.02.016-.002.002-.003.003-.002.004a.761.761 0 0 0 .138-.055l.15-.064a.941.941 0 0 1 .259-.072c.01.042.034.08.074.11a.443.443 0 0 0 .216.076c-.128.106-.193.194-.213.28-.116.037-.105.167-.036.298.048.09.14.219.276.39l.098.046c-.03 0-.045-.013-.058-.023-.015-.013-.024-.02-.045.01-.002.002-.093-.06-.287-.334-.19-.254-.376-.402-.565-.44Zm.61.15v-.005.005Zm.08-.106h-.008.007Zm.001 0h-.002.002Z"
                clipRule="evenodd"
              />
              <path
                stroke="#964C36"
                strokeWidth=".5"
                d="M10.828 8.055s-.239-.33-.239-.448"
              />
              <path
                stroke="#2A8E51"
                strokeWidth=".5"
                d="M10.68 7.771s-.306-.13-.306 0m.3-.137s-.214-.272-.375-.272c-.162 0-.158.136-.158.136m.411-.138s-.096-.445-.25-.445c-.152 0-.152.223-.152.223m.44.222s-.042-.382.155-.382"
              />
              <path
                stroke="#964C36"
                strokeWidth=".5"
                d="M11.13 7.99s-.11-.391-.07-.502"
              />
              <path
                stroke="#2A8E51"
                strokeWidth=".5"
                d="M11.088 7.673s-.242-.226-.286-.104m.328-.026s-.108-.33-.26-.385c-.15-.055-.194.074-.194.074m.433.012s.063-.452-.081-.505c-.144-.052-.22.158-.22.158m.338.36s.09-.374.276-.307"
              />
              <path
                stroke="#964C36"
                strokeWidth=".35"
                d="M11.376 8.13s.158-.375.132-.49"
              />
              <path
                stroke="#2A8E51"
                strokeWidth=".35"
                d="M11.457 7.82s.267-.195.297-.068m-.324-.066s.148-.314.305-.35c.158-.037.184.097.184.097m-.431-.041s-.007-.457.143-.491c.149-.035.2.183.2.183m-.381.316s-.044-.383-.236-.338m2.135.839s.121-.557.465-.557c.345 0 .499.588.499.588"
              />
              <path
                stroke="#2A8E51"
                strokeWidth=".35"
                d="M13.065 7.52s.185-.328.797-.301c.612.027.723.302.723.302m-1.644-.418s.336-.417.807-.064l.16.064s.16-.472.933 0"
              />
              <path
                stroke="#964C36"
                strokeWidth=".5"
                d="M13.87 8.018s.024-.52.106-.662m.574 1.801s-.31-.145-.402 0c-.093.145-1.207 1.48-1.207 1.48"
              />
              <path
                fill="#FFF203"
                fillRule="evenodd"
                d="m13.482 9.298.69.482s.318-.226.16-.354c-.16-.128-.592-.354-.592-.354l-.258.226Z"
                clipRule="evenodd"
              />
              <path
                fill="#00A651"
                fillRule="evenodd"
                d="M13.458 9.322s-.16.168-.16.296c0 .128-.149.47-.149.47s.417.257.503.094c.087-.164.648-.066.549-.315-.1-.25-.743-.545-.743-.545Z"
                clipRule="evenodd"
              />
              <path
                fill="#FFD100"
                fillRule="evenodd"
                d="M10.528 5.591s.369-.189.551 0c.183.19.332-.016.332-.13s.29-.505.29-.188c0 .318-.09.498.165.498.254 0 1.401-.44 1.676-.31.275.13.486.098.416-.088-.07-.187-.25-.303-.596-.201-.346.101-.264.2-.563.2-.3 0-.632-.099-.632-.099s.093-.167.435-.048c.341.119.812-.147.94-.147.128 0 .48-.008.516.094.034.101.247.195.085.29-.162.094-.43.153-.246.275.184.121.608.098.628.224.02.126.221.315.14.315-.08 0-.225.178-.36.124-.136-.054-.152-.102-.022-.146s.128-.228.021-.228-.055.064-.299 0c-.244-.065-.567-.137-.547 0 .02.136.178.346-.115.374-.293.028-.43.14-.487.05-.057-.09-.261-.211-.1-.25.16-.038.313.131.37.104.058-.028.19-.043.08-.16-.11-.118-.29-.187-.123-.275.167-.088.035-.09-.284.092-.32.182-.497.337-.777.315-.28-.022-.386.008-.476-.022-.09-.03-.528.326-.655.236-.126-.09-.534-.125-.46-.236.073-.11.172-.168.281-.11.11.056.22.113.293.056.074-.057.288-.253.234-.292-.054-.04-.002-.171-.306-.171s-.412.147-.484.054c-.072-.092.08-.2.08-.2Z"
                clipRule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[5]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
