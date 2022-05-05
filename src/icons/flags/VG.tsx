import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const VG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0Z"
          fill="#2E42A5"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12h16V0H0Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="9"
            height="7"
          >
            <path fill="#fff" d="M0 0h9v7H0z" />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="m-1.002 6.5 1.98.868L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865L-1.002 6.5Z"
              fill="#F7FCFF"
            />
            <path
              d="m-.731 7.108 1.009.505 9.437-8.08H8.298L-.731 7.109Z"
              fill="#F50100"
            />
            <path
              d="m10.002 6.5-1.98.868L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865L10.002 6.5Z"
              fill="#F7FCFF"
            />
            <path
              d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463 3.502 2.972Z"
              fill="#F50100"
            />
            <mask
              id={`${ids[3]}`}
              maskUnits="userSpaceOnUse"
              x="-1"
              y="-1"
              width="11"
              height="9"
              fill="#000"
            >
              <path fill="#fff" d="M-1-1h11v9H-1z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
              fill="#F50100"
            />
            <path
              d="M3.992 0v-.75h-.75V0h.75Zm1 0h.75v-.75h-.75V0Zm-1 3v.75h.75V3h-.75ZM0 3v-.75h-.75V3H0Zm0 1h-.75v.75H0V4Zm3.992 0h.75v-.75h-.75V4Zm0 3h-.75v.75h.75V7Zm1 0v.75h.75V7h-.75Zm0-3v-.75h-.75V4h.75ZM9 4v.75h.75V4H9Zm0-1h.75v-.75H9V3ZM4.992 3h-.75v.75h.75V3Zm-1-2.25h1v-1.5h-1v1.5ZM4.742 3V0h-1.5v3h1.5ZM0 3.75h3.992v-1.5H0v1.5ZM.75 4V3h-1.5v1h1.5Zm3.242-.75H0v1.5h3.992v-1.5ZM4.742 7V4h-1.5v3h1.5Zm.25-.75h-1v1.5h1v-1.5ZM4.242 4v3h1.5V4h-1.5ZM9 3.25H4.992v1.5H9v-1.5ZM8.25 3v1h1.5V3h-1.5Zm-3.258.75H9v-1.5H4.992v1.5ZM4.242 0v3h1.5V0h-1.5Z"
              fill="#F7FCFF"
              mask={`url(#${ids[3]})`}
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.123 5.016v3.265s-.048 2.701 2.441 2.701c2.49 0 2.49-2.701 2.49-2.701V5.016h-4.93Z"
            fill="#3B7E05"
            stroke="#F7FCFF"
            strokeWidth=".25"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m10.119 9.944.396-.398c.62.766 1.272 1.138 1.965 1.138.693 0 1.345-.372 1.963-1.138l.226.227.01-.015c.138.117.229.227.272.353a.422.422 0 0 1-.171.51.957.957 0 0 1-.104.058.26.26 0 0 1-.202.022.29.29 0 0 1-.187-.173c-.562.498-1.166.75-1.807.75-.636 0-1.235-.248-1.793-.737a.29.29 0 0 1-.19.168.26.26 0 0 1-.201-.026.96.96 0 0 1-.103-.06.422.422 0 0 1-.162-.512.528.528 0 0 1 .095-.158l-.007-.009Z"
            fill="#FFD018"
          />
          <path
            d="m10.515 9.546.058-.047-.052-.065-.059.06.053.052Zm-.396.398-.054-.053-.047.048.042.052.059-.047Zm4.324-.398.053-.053-.059-.059-.052.065.058.047Zm.226.227-.053.053.064.064.051-.075-.062-.042Zm.01-.015.048-.057-.064-.054-.047.07.063.041Zm.272.353.071-.024-.07.024Zm-.171.51-.04-.064.04.063Zm-.104.058-.031-.068.031.068Zm-.202.022.02-.072-.02.072Zm-.187-.173.07-.028-.04-.098-.08.07.05.056Zm-3.6.013.049-.056-.077-.068-.041.094.069.03Zm-.19.168-.018-.072.019.072Zm-.201-.026.032-.067-.032.067Zm-.103-.06-.04.063.04-.063Zm-.162-.512.07.025-.07-.025Zm.095-.158.057.048.04-.047-.04-.048-.057.047Zm.336-.46-.397.398.107.106.396-.398-.106-.106Zm2.018 1.116c-.663 0-1.295-.355-1.907-1.11l-.116.094c.628.776 1.3 1.166 2.023 1.166v-.15Zm1.905-1.11c-.61.755-1.242 1.11-1.905 1.11v.15c.724 0 1.394-.39 2.022-1.166l-.117-.094Zm.337.22-.226-.226-.106.106.226.227.106-.106Zm-.106-.003-.01.015.125.084.01-.015-.125-.084Zm.406.37c-.05-.144-.152-.264-.295-.385l-.097.115c.134.113.213.211.25.32l.142-.05Zm-.202.598a.497.497 0 0 0 .202-.597l-.142.049a.347.347 0 0 1-.14.421l.08.127Zm-.112.063c.033-.016.07-.036.112-.063l-.08-.127a.888.888 0 0 1-.095.054l.063.136Zm-.255.027a.327.327 0 0 0 .255-.027l-.063-.136a.266.266 0 0 1-.076.025.177.177 0 0 1-.075-.007l-.04.145Zm-.235-.217c.043.106.13.187.235.216l.041-.144a.215.215 0 0 1-.137-.13l-.14.058Zm-1.738.797c.663 0 1.283-.262 1.857-.77l-.1-.112c-.551.488-1.138.732-1.757.732v.15Zm-1.843-.757c.57.5 1.186.757 1.843.757v-.15c-.614 0-1.196-.24-1.744-.72l-.099.113Zm-.12.185a.365.365 0 0 0 .238-.211l-.137-.06a.215.215 0 0 1-.14.126l.039.145Zm-.254-.031a.326.326 0 0 0 .254.031l-.038-.145a.177.177 0 0 1-.076.005.268.268 0 0 1-.075-.026l-.065.135Zm-.11-.065c.041.027.077.049.11.065l.065-.135a.908.908 0 0 1-.094-.056l-.082.126Zm-.193-.6a.496.496 0 0 0 .192.6l.082-.126a.347.347 0 0 1-.133-.424l-.141-.05Zm.108-.181a.602.602 0 0 0-.108.18l.141.051a.454.454 0 0 1 .082-.135l-.115-.096Zm-.008.086.008.01.116-.095-.007-.009-.117.094Z"
            fill="#fff"
          />
          <path
            d="m11.066 7.324-.038-.164V5.771a.375.375 0 0 1 .75 0v1.303l.36.74a.375.375 0 0 1-.083.439l-.413.383v.72a.375.375 0 0 1-.75 0v-.884c0-.105.044-.204.12-.275l.33-.305-.276-.568Z"
            fill="#FFD018"
          />
          <path
            d="M13.626 5.75v3.702"
            stroke="#FFD018"
            strokeWidth=".75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.32 6.293-.168.546s-.282.365-.334.544c-.052.178-.08.297-.066.297.014 0 .13-.05.13-.174 0-.123.438-.52.438-.52l.13-.693h-.13Z"
            fill="#FFC6B5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.686 5.434a.058.058 0 0 0 .006-.026c0-.03-.022-.054-.05-.054-.027 0-.05.024-.05.054 0 .013.004.025.011.034l-.189.293.02.016.189-.293a.046.046 0 0 0 .046-.004l.199.297.02-.016-.202-.3Zm-.007.254a.057.057 0 0 0 .013-.037c0-.03-.022-.054-.05-.054-.027 0-.05.024-.05.054 0 .019.009.035.021.044l-.047.057h-.321s.035.08.145.102c.033.032.118.091.118.091l-.048.06h.346v-.06c.084 0 .116-.067.127-.09.005-.01.006-.013.006 0 0 .042.062 0 .062 0s.102-.103.102-.2c0-.097-.214.097-.214.097h-.145l-.065-.064Z"
            fill="#FFD018"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.73 6.074c.005.01.008.017.008.028 0 .031-.133.078-.23.078-.096 0-.058-.078 0-.121.059-.043-.004-.118-.058-.118-.051 0-.051-.072-.051-.13V5.576c0-.091.025-.08.072-.06.027.012.063.027.105.027.072 0 .076.017.087.061a.411.411 0 0 0 .044.116c.045.08.035.1.021.128a.182.182 0 0 0-.021.093.27.27 0 0 0 .023.133Zm.12.58.027-.307s-.028-.113.039-.113c.066 0 .17.538.207.754.023.138.001.163-.062.237a1.357 1.357 0 0 0-.145.2c-.102.168-.096.266-.09.341.003.05.005.09-.025.133-.072.1-.101.005-.13-.087l-.006-.02c-.027-.087.097-.348.182-.526l.03-.065c.08-.17.073-.23.039-.302-.035-.072-.067-.245-.067-.245Z"
            fill="#FFC6B5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.01 9.685c0 .078-.06.141-.134.141-.073 0-.133-.063-.133-.141 0-.078.06-.142.133-.142.074 0 .134.064.134.142Zm-.71.04c-.06.05-.133.061-.163.025s-.006-.106.054-.156.132-.062.163-.026c.03.036.006.106-.054.156Z"
            fill="#FFD018"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.476 5.392s-.14.028-.093.098c.046.07-.06.052.093.06.152.01.194.065.173.106-.02.041-.037.143 0 .205.038.061.05.168.116.115.066-.054.192-.127.153-.223-.038-.097.016-.209-.069-.263-.085-.054-.103-.021-.152-.098-.048-.076-.12-.097-.17-.049l-.051.05Z"
            fill="#A95601"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.448 6.089s-.279.336-.233.454c.045.118.114.125.08.293-.035.168.02.428-.08.76-.1.33-.167 1.107-.134 1.107s.079.429.04.621c-.04.193-.315.354-.04.354.276 0 .308.038.418 0 .11-.038.266.11.266 0s.012-.132.096-.132h.154c.074 0 .172.069.172-.095s.018-.517-.077-.79c-.095-.274-.063-.1-.156-.465-.055-.217-.098-.303-.131-.379-.023-.052-.089.04-.105-.042-.005-.028.04-.19.04-.21.004-.13.103-.153.103-.376 0-.26-.062-.544 0-.687.062-.143.215-.057.154-.195-.06-.14-.08-.218-.195-.218h-.372Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
