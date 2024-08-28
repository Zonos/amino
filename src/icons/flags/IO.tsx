import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const IO = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        ref={ref}
        borderRadius={borderRadius}
        height={height}
        viewBox="0 0 24 25"
        width={width}
      >
        <g clipPath={`url(#${ids[0]})`}>
          <path
            d="M24 18.444a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18.444v-12a2.667 2.667 0 0 1 2.667-2.666h18.666A2.667 2.667 0 0 1 24 6.444v12Z"
            fill="#EEE"
          />
          <path
            d="M22.909 19.194c-1.211 0-1.211-.708-2.424-.708-1.212 0-1.212.667-2.462.667-1.175 0-1.175-.667-2.405-.667-1.193 0-1.193.667-2.405.667-1.212 0-1.212-.667-2.425-.667-1.212 0-1.212.667-2.424.667s-1.212-.667-2.424-.667-1.212.667-2.424.667-1.212-.667-2.424-.667c-.508 0-.801.12-1.061.256.047.425.185.822.409 1.162.175-.05.383-.084.652-.084 1.212 0 1.212.666 2.425.666 1.212 0 1.212-.666 2.424-.666s1.212.666 2.424.666 1.212-.666 2.424-.666 1.212.666 2.425.666c1.212 0 1.212-.666 2.419-.666 1.217 0 1.217.666 2.427.666 1.214 0 1.214-.666 2.426-.666 1.213 0 1.213.646 2.425.646.059 0 .105-.007.157-.01.45-.388.772-.915.884-1.522a1.99 1.99 0 0 1-1.043.26ZM24 17.366V16.07a1.995 1.995 0 0 1-1.091.287c-1.211 0-1.211-.708-2.424-.708-1.212 0-1.212.667-2.462.667-1.175 0-1.175-.667-2.405-.667-1.193 0-1.193.667-2.405.667-1.212 0-1.212-.667-2.425-.667-1.212 0-1.212.667-2.424.667s-1.212-.667-2.424-.667-1.212.667-2.424.667-1.212-.667-2.424-.667c-.528 0-.823.127-1.091.27v1.333c.268-.143.564-.27 1.09-.27 1.213 0 1.213.667 2.425.667 1.212 0 1.212-.667 2.424-.667s1.212.667 2.424.667 1.212-.667 2.424-.667 1.212.667 2.425.667c1.212 0 1.212-.667 2.42-.667 1.216 0 1.216.667 2.426.667 1.215 0 1.215-.667 2.426-.667 1.213 0 1.213.646 2.425.646a2.16 2.16 0 0 0 1.09-.262Zm0-2.838v-1.296a1.995 1.995 0 0 1-1.091.287c-1.211 0-1.211-.709-2.424-.709-1.212 0-1.212.667-2.462.667-1.175 0-1.175-.667-2.405-.667-1.193 0-1.193.667-2.405.667-1.212 0-1.212-.667-2.425-.667-1.212 0-1.212.667-2.424.667s-1.212-.667-2.424-.667-1.212.667-2.424.667-1.212-.667-2.424-.667c-.528 0-.823.128-1.091.27v1.333c.268-.143.564-.27 1.09-.27 1.213 0 1.213.667 2.425.667 1.212 0 1.212-.666 2.424-.666s1.212.666 2.424.666 1.212-.666 2.424-.666 1.212.666 2.425.666c1.212 0 1.212-.666 2.42-.666 1.216 0 1.216.666 2.426.666 1.215 0 1.215-.666 2.426-.666 1.213 0 1.213.646 2.425.646.526 0 .822-.124 1.09-.262Zm0-2.838v-1.296a1.995 1.995 0 0 1-1.091.287c-1.211 0-1.211-.708-2.424-.708-1.212 0-1.212.667-2.462.667-1.175 0-1.175-.667-2.405-.667-1.193 0-1.193.667-2.405.667-1.212 0-1.212-.667-2.425-.667-1.212 0-1.212.667-2.424.667s-1.212-.667-2.424-.667-1.212.667-2.424.667-1.212-.667-2.424-.667c-.528 0-.823.127-1.091.27v1.333c.268-.143.564-.27 1.09-.27 1.213 0 1.213.667 2.425.667 1.212 0 1.212-.667 2.424-.667s1.212.667 2.424.667 1.212-.667 2.424-.667 1.212.667 2.425.667c1.212 0 1.212-.667 2.42-.667 1.216 0 1.216.667 2.426.667 1.215 0 1.215-.667 2.426-.667 1.213 0 1.213.646 2.425.646A2.16 2.16 0 0 0 24 11.69Zm0-2.838V7.556a2.001 2.001 0 0 1-1.091.286c-1.211 0-1.211-.708-2.424-.708-1.212 0-1.212.667-2.462.667-1.175 0-1.175-.667-2.405-.667-1.193 0-1.193.667-2.405.667-1.212 0-1.212-.667-2.425-.667-1.212 0-1.212.667-2.424.667s-1.212-.667-2.424-.667-1.212.667-2.424.667-1.212-.667-2.424-.667c-.528 0-.823.127-1.091.27v1.333c.268-.143.564-.27 1.09-.27 1.213 0 1.213.667 2.425.667 1.212 0 1.212-.666 2.424-.666s1.212.666 2.424.666 1.212-.666 2.424-.666 1.212.666 2.425.666c1.212 0 1.212-.666 2.42-.666 1.216 0 1.216.666 2.426.666 1.215 0 1.215-.666 2.426-.666 1.213 0 1.213.646 2.425.646A2.156 2.156 0 0 0 24 8.852Zm-.041-2.818a2.636 2.636 0 0 0-.437-1.109 2.21 2.21 0 0 1-.613.08c-1.211 0-1.211-.709-2.424-.709-1.212 0-1.212.667-2.462.667-1.175 0-1.175-.667-2.405-.667-1.193 0-1.193.667-2.405.667-1.212 0-1.212-.667-2.425-.667-1.212 0-1.212.667-2.424.667s-1.212-.667-2.424-.667-1.212.667-2.424.667c-1.21 0-1.213-.663-2.416-.666a2.65 2.65 0 0 0-1.032 1.57 2.06 2.06 0 0 1 1.023-.238c1.212 0 1.212.667 2.425.667 1.212 0 1.212-.667 2.424-.667s1.212.667 2.424.667 1.212-.667 2.424-.667 1.212.667 2.424.667 1.212-.667 2.42-.667c1.216 0 1.216.667 2.426.667 1.215 0 1.215-.667 2.426-.667 1.214 0 1.214.646 2.426.646.5 0 .79-.112 1.049-.241Z"
            fill="#00247D"
          />
          <path
            d="M18.165 19.562c0 .12-.095.215-.214.215a.216.216 0 0 1-.216-.215V8.988a.215.215 0 1 1 .43 0v10.574Z"
            fill="#C1694F"
          />
          <path
            d="M16.437 14.02s.093-.222.418-.222c.327 0 .405.17.601.248.196.078.444.118.444.118v1.63h-1.75s-.065-.612-.17-.912c-.104-.3-.195-.706.027-.836s.43-.026.43-.026Z"
            fill="#DD2E44"
          />
          <path
            d="M17.893 13.596v.235s-.45-.04-.842-.313c-.238-.167-.744-.373-1.135-.039-.255.215-.235.764-.077.979.155.215.312.705-.021.372-.333-.333-.431-.842-.333-1.175.098-.333.314-.665.822-.665.51 0 .843.274 1.078.411.204.118.529.155.508.195Z"
            fill="#FFCC4D"
          />
          <path
            d="m15.93 14.777.273-.013-.078.418s.274-.208.288-.157c.012.053.052.43.052.43l-.354-.077.209.3-.273.13s-.105-.352-.131-.521c-.027-.17.014-.51.014-.51Zm.573.223.261-.026s-.225-.51.105-.497c.366.014.117.484.117.484h.275l.039.378-.26-.157v.223l.286.274-.757.077.195-.326-.012-.234-.183.209-.066-.405Z"
            fill="#FFCC4D"
          />
          <path
            d="M19.47 14.02s-.092-.222-.418-.222c-.326 0-.404.17-.6.248a2.421 2.421 0 0 1-.444.118v1.63h1.75s.065-.612.17-.912c.104-.3.195-.706-.027-.836s-.431-.026-.431-.026Z"
            fill="#DD2E44"
          />
          <path
            d="M18.014 13.596v.235s.45-.04.842-.313c.239-.167.744-.373 1.136-.039.255.215.234.764.077.979-.156.215-.312.705.02.372.333-.333.432-.842.333-1.175-.097-.333-.313-.665-.822-.665-.51 0-.843.274-1.077.411-.203.118-.528.155-.509.195Z"
            fill="#FFCC4D"
          />
          <path
            d="m19.98 14.777-.275-.013.078.418s-.274-.208-.287-.157c-.013.053-.052.43-.052.43l.351-.077-.208.3.274.13s.104-.352.131-.52c.025-.17-.013-.51-.013-.51Zm-.576.223-.261-.026s.226-.51-.105-.497c-.365.014-.117.484-.117.484h-.274l-.04.378.262-.157v.223l-.288.274.758.077-.196-.326.014-.234.182.21.065-.406Zm-.997-2.064c0 .26-.205.47-.456.47a.463.463 0 0 1-.458-.47c0-.259.205-.47.458-.47a.464.464 0 0 1 .456.47Zm-.867-1.03h.821v.326h-.821v-.326Z"
            fill="#FFCC4D"
          />
          <path d="M17.755 11.684h.391v3.015h-.39v-3.015Z" fill="#FFCC4D" />
          <path
            d="M17.627 14.57h.612l-.17.43.392-.209v.573l-.379-.13.327.496h-.848l.26-.496-.378.091v-.509l.353.17-.17-.417Z"
            fill="#FFCC4D"
          />
          <path
            d="M17.952 15.534c.81 0 1.319.067 1.893.274 0 0 .04.341-.039.51-.077.17-1.867-.118-1.867-.118l.013-.666Z"
            fill="#FFCC4D"
          />
          <path
            d="M17.975 15.534c-.809 0-1.318.067-1.892.274 0 0-.04.341.038.51.079.17 1.867-.118 1.867-.118l-.013-.666Z"
            fill="#FFCC4D"
          />
          <path
            d="M20.052 16.664c0 .256-.941.462-2.101.462-1.16 0-2.102-.206-2.102-.462s.942-.464 2.102-.464 2.101.208 2.101.464Z"
            fill="#EEE"
          />
          <path
            d="M19.362 16.833c0 .141-.632.256-1.411.256-.78 0-1.413-.115-1.413-.256 0-.14.633-.255 1.413-.255.779 0 1.411.115 1.411.255Z"
            fill="#99AAB5"
          />
          <path
            d="m17.103 5.026.431.536s.3-.183.314-.144c.013.04-.026.444-.026.444l.209.052-.17.536s.262-.144.248-.092c-.013.052-.078.51-.078.51l.104.065-.013.51s.105.181.105.143c0-.039.104-.666.104-.666l.144.118.05-.326.118-.562.131.209.274-.927.144.326.326-.378.222-.014.326-.091.066.195h.3s-.156.131-.143.17c.012.039.286.182.247.196-.04.013-.705-.053-.705-.053l-.378.379.235.078-.353.209.3.091-.274.209.236-.026-.379.287.379.079-.51.26.118.131-.509.301-.066.209.483-.379s.392-.261.588-.379c.196-.117.352-.339.68-.43.327-.092.952.013.952.013l-.588.313.118.183-.378.117.052.222-.627.092.013.234-.535.092-.065.222-.366.131.17.143s-.314.105-.274.118c.04.013.457.052.457.052s-.21.182-.17.182c.04 0 .56.026.56.026l-.221.157.523.026-.236.183s.43.039.43.078-.181.235-.181.235l.378.04s-.182.195-.144.209c.04.012.536.352.536.352l-.588-.078s-.144.195-.157.156a3.74 3.74 0 0 0-.155-.274l-.144.156-.156-.313s-.183.104-.171.065c.013-.039-.209-.287-.209-.287l-.052.118-.143-.353-.13.183-.249-.34-.091.143-.34-.3s-.013.196 0 .236c.013.039.249.208.249.208s-.157.066-.157.104c0 .04.314.288.314.288l-.144.104.34.288s-.314.065-.275.091c.04.026.196.235.196.235l-.13.313-.261-.405-.144.04-.027-.34-.142-.013.077-.378-.156.026-.013-.313-.066-.314-.13-.209s-.092.157-.079.195c.013.04.119.288.119.288s-.144.078-.119.117c.027.04.17.326.17.326s-.313.065-.274.065c.04 0 .144.183.144.183l-.17.065-.078.196s-.195-.222-.183-.182c.014.039-.117.404-.117.404l-.195-.222.195-.77-.236-.065-.17.353s-.143-.17-.156-.131c-.013.04-.157.3-.157.3s-.168-.287-.155-.247c.013.038-.197.457-.197.457s-.182-.366-.182-.313c0 .052-.13.509-.13.509s-.208-.353-.196-.287c.014.065-.144.366-.144.366l-.04-.327-.286.17.326-.47.548-.51.418-.313-.276-.038s.398-.138.444-.144c.118-.013-.182-.117-.182-.117l.731-.222s-.326-.17-.365-.13c-.04.039-.432.117-.432.117l-.052-.3-.404.169s-.066-.275-.078-.235c-.013.039-.327.208-.327.208l-.155-.169-.184.287-.209-.156-.377.117.182-.274-.209-.117.43-.274.092-.183.588.04s-.157-.21-.13-.17c.026.039.6.13.6.13l.17-.026.574.209-.47-.379-.405-.079.262-.208-.614-.222.131-.208-.81-.209.497-.13-.34-.575.704.418.314-.105.157.405.287.17.052.3.144-.066.13.352.17-.052.091.248.25.013-.067-.327.104-.156-.288-.236.25-.117-.367-.3.313-.04-.444-.43.354.013-.354-.405.288-.065-.054-.522Z"
            fill="#77B255"
          />
          <path
            d="M12.667 12.444V3.778h-10c-.214 0-.403.03-.403.03l-.003 1.169-1.82-.003s-.028.04-.084.137A2.659 2.659 0 0 0 0 6.444v6h12.667Z"
            fill="#00247D"
          />
          <path
            d="M12.667 3.778h-1.554L8 5.957v-2.18H4.667V5.49L2.264 3.808c-.41.062-.793.216-1.115.443l3.135 2.193H3.127L.645 4.704a2.94 2.94 0 0 0-.204.27l2.101 1.47H0v3.334h2.59L0 11.622v.822h2.221l2.446-1.712v1.712H8v-2.18l3.112 2.18h1.555v-1.352L10.79 9.778h1.877V6.444H10.79l1.876-1.314V3.778Z"
            fill="#EEE"
          />
          <path
            d="M7.333 3.778h-2V7.11H0v2h5.333v3.333h2V9.111h5.334v-2H7.333V3.778Z"
            fill="#CF1B2B"
          />
          <path
            d="M12.667 3.778h-.974L8 6.364v.08h1.047l3.62-2.534v-.132ZM1.149 4.25c-.187.13-.356.282-.504.454l2.482 1.74h1.156L1.15 4.25Zm3.142 5.527L.49 12.444h1.152l3.026-2.118v-.548H4.29Zm8.376 2.534V11.5l-2.458-1.721H9.047l3.62 2.534Z"
            fill="#CF1B2B"
          />
        </g>
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M0 .444h24v24H0z" fill="#fff" />
          </clipPath>
        </defs>
      </FlagIconBase>
    );
  },
);