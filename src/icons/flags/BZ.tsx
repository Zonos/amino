import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const BZ = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 24"
      width={width}
    >
      <path
        d="M24 18a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18V6a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6v12Z"
        fill="#CE1B26"
      />
      <path
        d="M.37 4.667C.14 5.06 0 5.512 0 6v12c0 .488.14.94.37 1.333h23.26c.23-.394.37-.845.37-1.333V6c0-.488-.14-.94-.37-1.333H.37Z"
        fill="#003E87"
      />
      <path
        d="M12 18.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334Z"
        fill="#fff"
      />
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="#730900" />
      <path
        d="M12 17.829A5.829 5.829 0 1 0 12 6.17a5.829 5.829 0 0 0 0 11.658Z"
        fill="#fff"
      />
      <path
        d="M12 6.438c.188 0 .34-.196.34-.438s-.152-.438-.34-.438c-.188 0-.34.196-.34.438s.152.438.34.438Zm0 12c.188 0 .34-.196.34-.438s-.152-.438-.34-.438c-.188 0-.34.196-.34.438s.152.438.34.438Zm-1.88-.73c.062-.234.26-.383.44-.335.183.048.279.277.216.511-.063.234-.26.383-.442.335-.181-.049-.277-.278-.215-.511Zm3.32-11.082c.181.049.379-.1.441-.334.063-.234-.033-.462-.214-.511-.182-.048-.379.101-.442.334-.062.235.034.463.215.511Zm-4.734 10.4c.12-.21.35-.303.513-.21.163.095.196.34.076.55-.121.21-.351.303-.513.21-.163-.095-.197-.34-.076-.55Zm6.075-9.844c.163.094.392 0 .514-.209.121-.209.087-.455-.076-.548-.162-.094-.392-.001-.513.208-.121.21-.087.456.075.549Zm-7.264 8.82c.171-.171.417-.203.55-.07.133.133.102.38-.069.55-.171.172-.417.203-.55.07-.133-.133-.102-.379.07-.55Zm8.416-7.935c.133.132.378.101.55-.069.171-.172.202-.417.069-.55-.133-.133-.378-.102-.55.07-.17.17-.201.415-.069.549Zm-9.299 6.638c.21-.12.455-.086.55.076.093.162 0 .392-.21.514-.21.121-.455.087-.55-.076-.093-.163 0-.393.21-.514ZM16.818 9.22c.094.162.339.196.548.075.21-.121.303-.35.21-.513-.095-.162-.34-.197-.55-.076-.21.121-.303.351-.208.514ZM6.117 13.225c.234-.063.462.033.51.214.049.182-.101.379-.334.442-.234.063-.462-.034-.511-.215-.049-.181.1-.379.335-.441Zm11.256-2.665c.048.182.276.278.511.215.234-.063.383-.26.335-.442-.049-.18-.278-.277-.511-.214-.234.062-.383.26-.335.441ZM6 12.34c.242 0 .438-.152.438-.34 0-.188-.196-.34-.438-.34s-.438.152-.438.34c0 .188.196.34.438.34ZM17.563 12c0 .188.195.34.437.34s.437-.152.437-.34c0-.188-.195-.34-.437-.34s-.437.152-.437.34ZM6.292 10.12c.234.062.383.26.335.44-.048.183-.277.279-.511.216-.234-.063-.383-.26-.335-.442.049-.181.278-.277.511-.215Zm11.081 3.32c-.048.181.1.379.334.441.234.063.462-.033.512-.214.048-.182-.102-.379-.335-.442-.234-.062-.462.034-.51.215ZM6.974 8.705c.21.121.303.351.21.514-.095.162-.34.196-.55.075-.21-.12-.303-.35-.21-.513.095-.163.34-.197.55-.076Zm9.844 6.076c-.094.162 0 .392.209.514.209.121.455.086.548-.076.094-.162.001-.392-.208-.514-.21-.121-.456-.086-.549.076Zm-8.82-7.264c.171.17.203.416.07.55-.133.132-.38.101-.55-.07-.172-.17-.203-.417-.07-.55.133-.132.379-.101.55.07Zm7.935 8.416c-.132.133-.101.378.07.55.172.17.417.202.55.069.132-.133.102-.379-.07-.55-.17-.171-.416-.201-.55-.069Zm-6.638-9.3c.12.21.086.456-.076.55-.162.094-.392 0-.513-.21-.121-.209-.087-.455.075-.549.163-.094.393 0 .514.21Zm5.486 10.184c-.162.094-.196.34-.075.549.121.21.35.303.513.21.163-.095.198-.34.076-.55-.121-.21-.351-.303-.514-.209Zm-4.006-10.7c.063.233-.033.461-.214.51-.182.048-.379-.102-.442-.335-.063-.234.034-.462.215-.51.181-.05.379.1.441.334Zm2.665 11.256c-.182.049-.278.277-.215.512.063.233.26.382.442.334.18-.049.277-.277.214-.511-.062-.234-.26-.384-.441-.335Z"
        fill="#007F00"
      />
      <path
        d="m9.973 8.132.662 1.129h.724l.325.26.2.69-.717-.314.669.548-.161.55h.551v-.976l.9-.551-.149-.11-.746.417-.087-.61-.135-.144.459-.566-.237-.096-.346.513-.049-.417.049-.516s-.231-.183-.21-.123c.022.06 0 .453 0 .453l-.433-.465-.2.08.435.386-.506.377-.614-.168.118-.626h-.126l-.109.59-.109-.503-.157.278v-.086Zm2.326-.605h.144v.542H12.3v-.542Zm.758.108h.181v.289h-.18v-.289Z"
        fill="#B34B00"
      />
      <path
        d="M10.773 8.773c.022.054.12.32.12.32l.696.071.296.303-.116-.348-.18-.402-.816.056Z"
        fill="#fff"
      />
      <path
        d="M9.987 7.539c.42-.252.693.168.693.168s.173-.53.691-.566c.518-.036.514.193.514.193s.114-.333.806-.197c.692.136.67.366.554.462-.116.096-1.163.036-1.163.036s.108.204.12.288c.012.085.385-.156.975 0 0 0 .29-.505.735-.24.446.265.737.77.627.915-.109.145-.904.048-.994-.048 0 0-.162.265-.536.217-.374-.048-1-.446-1-.446l-.125-.193s-.29-.229-.643-.24c-.352-.012-.597 0-.597 0s-.237.277-.514.313c-.277.036-.565.024-.565.024s-.058-.397.422-.686Z"
        fill="#289400"
      />
      <path
        d="M10.474 8.31c.693-.11 1.15 0 1.198.337.048.337-.517.277-.631.289-.116.012-.778.24-.994.229-.217-.012-.663-.229-.338-.542.326-.314.765-.314.765-.314Zm2.653.613c.681.159 1.002.53.845.687-.156.156-.558.133-.923 0-.366-.133-.872-.036-.986-.29-.114-.252.29-.577 1.064-.397Zm-.232.868c.517.084.536.541.452.626-.085.084-.88-.024-1.06-.241-.181-.217.096-.47.608-.385Zm-1.924-.23c.645-.244.922.037.914.29-.008.252-.549.24-.76.337-.211.097-.596.217-.728.072-.134-.145.064-.506.574-.699Z"
        fill="#289400"
      />
      <path
        d="M10.528 16.224c-.18.177-.451.547.131.66.584.113.356-.46.234-.555-.124-.096-.365-.105-.365-.105Z"
        fill="#ADADAD"
      />
      <path
        d="M10.818 16.39c.012.035.084.204 0 .3a.452.452 0 0 1-.361.156s.566.097.686.157c.12.059.228-.121.168-.374-.06-.252-.493-.24-.493-.24Z"
        fill="#69F"
      />
      <path
        d="M14.502 15.221c-.313 0-.735.253-.735.253s-.192-.193-.506-.025c-.313.17-.493.218-.469.53 0 0-.17.088-.337.133-.265.073-.446.011-.446.011s-.18.062-.445-.01a2.014 2.014 0 0 1-.337-.134c.024-.312-.156-.36-.47-.53-.313-.168-.506.025-.506.025s-.421-.253-.734-.253c-.314 0-.59.301-.578.386.012.084.156.372.24.516.084.145.157.23.386.23.228 0 .71-.145.71-.145s.108.108.674.325c.566.216 1.06.205 1.06.205s.493.012 1.059-.205.675-.325.675-.325.482.145.71.145c.229 0 .301-.085.386-.23.084-.144.229-.432.24-.516.013-.085-.264-.386-.577-.386Z"
        fill="#EEE"
      />
      <path
        d="M10.305 15.513c.231.156.712.376.922.466 0 0 .075-.203-.111-.32-.186-.118-.456-.225-.587-.277-.133-.053-.224.131-.224.131Zm.091.711c-.325-.292-.53-.4-.77-.45-.241-.047-.523.041-.515.226.008.185.239.377.454.353.214-.024.831-.129.831-.129Z"
        fill="#ADADAD"
      />
      <path
        d="M10.396 15.582s.012-.228.169-.133c.156.098.108.271.108.271l-.277-.138Zm-.217.567s-.409-.301-.59-.301-.361.012-.349.15c.012.14.253.2.386.223.132.024.553-.072.553-.072Z"
        fill="#69F"
      />
      <path
        d="M13.49 16.224c.181.177.453.547-.13.66-.584.113-.356-.46-.234-.555.124-.096.365-.105.365-.105Z"
        fill="#ADADAD"
      />
      <path
        d="M13.202 16.39c-.012.035-.085.204 0 .3.084.097.229.17.36.156 0 0-.565.097-.685.157-.121.059-.229-.121-.168-.374.059-.252.493-.24.493-.24Z"
        fill="#69F"
      />
      <path
        d="M13.714 15.513c-.232.156-.712.376-.922.466 0 0-.075-.203.111-.32.186-.118.457-.225.588-.277.132-.053.223.131.223.131Zm-.09.711c.324-.292.529-.4.77-.45.24-.047.522.041.514.226-.009.185-.239.377-.454.353-.215-.024-.83-.129-.83-.129Z"
        fill="#ADADAD"
      />
      <path
        d="M13.623 15.582s-.012-.228-.168-.133c-.157.098-.108.271-.108.271l.276-.138Zm.217.567s.41-.301.59-.301.361.012.35.15c-.013.14-.254.2-.386.223-.133.024-.554-.072-.554-.072Z"
        fill="#69F"
      />
      <path
        d="M10.011 15.51c.282.11.735.602 0 .29-.735-.314-.434-.459 0-.29Zm.975.579c.32.087.855.18 1.156.18.3 0 .493.314.12.277-.373-.037-1.144-.117-1.409-.227-.264-.111-.129-.304.133-.23Zm1.903.034c.336-.18.975-.576 1.192-.626.216-.048.482-.023.458.085-.024.11-.157.168-.362.193-.205.024-.867.578-1.288.638-.421.06 0-.29 0-.29Z"
        fill="#D3D3D3"
      />
      <path
        d="M8.698 14.185c.664-.133 3.66-.216 4.515-.108.856.108 2.722.626 2.481.927-.24.3-1.276.277-1.866.18-.59-.096-.82.423-1.819.434-1 .012-1.505-.314-1.926-.47-.422-.156-1.024-.072-1.385.037-.361.108-1.553-.686 0-1Z"
        fill="#289400"
      />
      <path
        d="M10.24 10.85v2.276c0 .83.625 1.505.884 1.746.26.24.885.59.885.59s.626-.35.885-.59c.26-.24.885-.915.885-1.746V10.85h-3.54Z"
        fill="#000"
      />
      <path
        d="M10.42 10.995v2.134c0 .746.562 1.424.795 1.64.232.216.794.53.794.53s.562-.314.794-.53c.233-.216.795-.894.795-1.64v-2.134H10.42Z"
        fill="#9ED7FF"
      />
      <path
        d="M10.97 14.499h2.08c.08-.103.166-.224.245-.361h-2.57c.078.137.164.258.246.36Z"
        fill="#006AC8"
      />
      <path
        d="M10.97 14.498a2.5 2.5 0 0 0 .245.271c.043.04.098.082.157.126h1.277a1.63 1.63 0 0 0 .156-.126c.063-.059.15-.152.244-.27h-2.078Z"
        fill="#5AC800"
      />
      <path
        d="M12.01 15.3s.374-.21.638-.404h-1.277c.264.194.639.403.639.403Z"
        fill="#FFD801"
      />
      <path
        d="m10.55 13.776 1.46-1.3v-1.481h-1.59v2.134c0 .225.052.445.13.647Z"
        fill="#fff"
      />
      <path
        d="M13.469 13.776c.078-.202.13-.422.13-.647v-2.134h-1.59v1.48l1.46 1.301Z"
        fill="#FFD83C"
      />
      <path
        d="m11.802 12.218-.007-.007a.054.054 0 0 0-.077 0l-.045.046-.316-.316c.038-.05.042-.11.008-.145l-.639-.627c-.039-.039-.112-.027-.164.026-.051.052-.062.125-.023.163l.638.628c.027.026.07.028.11.01l.322.323-.066.066a.055.055 0 0 0 0 .078l.008.006c.02.021.055.021.076 0l.174-.174a.053.053 0 0 0 .001-.077Z"
        fill="#B34B00"
      />
      <path
        d="M10.778 12.545a.074.074 0 0 1-.104.014.073.073 0 0 1-.014-.104l.683-.892a.074.074 0 0 1 .104-.014.074.074 0 0 1 .014.104l-.683.892Z"
        fill="#782121"
      />
      <path d="m11.224 11.44.19-.3.4.253-.19.3-.4-.253Z" fill="#D3D3D3" />
      <path
        d="M13.334 12.437a.074.074 0 0 0 .11-.099l-.759-.83a.075.075 0 0 0-.104-.005.074.074 0 0 0-.005.104l.758.83Z"
        fill="#782121"
      />
      <path
        d="m12.144 11.56.343-.325.245.258-.343.325-.245-.258Zm.143.533.896-.861.226.235-.898.86-.224-.234Z"
        fill="#fff"
      />
      <path
        d="M11.125 13.732s.486.224.903.234c.417.01.52-.059.52-.059l-.118.23h-1.015l-.29-.405Z"
        fill="#B34B00"
      />
      <path
        d="m11.285 13.7.255.184h.945l-.128-.625-.817.039-.255.403Z"
        fill="#fff"
      />
      <path
        d="M9.48 9.161c.28-.135.813-.433.895-.478.081-.046.216.117.09.172-.126.054-.794.451-.984.541-.19.09 0-.235 0-.235Z"
        fill="#892614"
      />
      <path
        d="M8.505 14.439c-.036.264-.192.53.109.613.3.085.357-.195.275-.447-.082-.251-.384-.166-.384-.166Zm1.048-.014c-.048.11-.192.352.096.321.29-.031.47-.029.65 0 .182.03.29-.167.097-.159-.193.008-.337-.062-.41-.242-.072-.178-.433.08-.433.08Zm-.707-3.328-.086-.466s-.243.248-.327.369c-.084.12-.252-.054-.348-.133-.097-.078-.205-.318-.229-.523-.024-.205-.265-.325-.18-.47.083-.144.156-.216.3-.216.145 0 .181.193.181.193s.279.035.169.168c-.27.329-.057.384-.057.384l.164-.203s-.06-.385 0-.457c.061-.073.422-.205.543-.218.12-.012.265-.12.21-.192-.053-.072-.174-.205-.174-.362 0-.156-.055-.494.298-.445.353.048.473.277.377.47-.097.192-.144.252-.109.36.036.11.047.241.282.253.235.012.28.088.317.292.036.205.039.31.027.479a.92.92 0 0 0 0 .229s.217-.042.373-.018c.156.024.482.223.482.223h-.783l-.06.253s-.085.097-.12.084c-.037-.012-.236-.325-.236-.325l-.09.325-.924-.054Z"
        fill="#FBD44D"
      />
      <path
        d="M8.782 11.067c-.132.289-.253.915-.229 1.252.024.336.09.686-.003.998-.093.314-.225 1.205-.225 1.205l.337.23.373-.241.06-1.409.214-.697.208.504-.085 1.566.614-.012s-.049-1.445-.06-1.673a23.828 23.828 0 0 0-.127-1.144 7.694 7.694 0 0 0-.09-.493l-.987-.086Z"
        fill="#D3D3D3"
      />
      <path
        d="M8.807 11.007s.248.068.502.06c.266-.008.54-.09.545-.06.013.06 0 .265 0 .265s-.223-.049-.52 0c-.298.048-.419.036-.527 0-.109-.036 0-.265 0-.265Z"
        fill="#9B5F00"
      />
      <path
        d="M9.393 8.333c.266 0 .381.205.369.422-.012.216-.077.277-.077.277s.043-.235-.096-.12v-.23s-.301.025-.403 0a1.169 1.169 0 0 1-.163-.047l-.042.162s-.139-.162-.006-.319c.132-.156.356-.145.356-.145"
        fill="#000"
      />
      <path
        d="M7.359 10.3c.122-.181.343-.317.343-.317s.036.045.163 0c.126-.045.117-.08.19-.108.072-.028.063-.109.063-.109s.425-.172.605-.253c.181-.082.389-.208.389-.208l.081.064s0 .135-.072.18c-.072.045-.614.316-.659.352a.676.676 0 0 1-.145.072s-.044-.09-.09-.054c-.045.036-.072.136-.072.136s-.181.081-.29.154c-.108.072-.234.325-.352.38-.118.053-.2-.222-.154-.29Z"
        fill="#892614"
      />
      <path
        d="M9.957 8.855c.066-.064.309-.234.368-.144.059.09.15.586.438.541 0 0-.171.153-.316.225-.144.072-.4.091-.4.091s-.004-.235 0-.37c.003-.136-.09-.343-.09-.343Z"
        fill="#D3D3D3"
      />
      <path
        d="M12.76 8.213c.099-.045 1.079.479 1.243.55.165.073.264.362.428.426.162.063.026.17-.072.117-.1-.055-.317-.036-.507-.1-.19-.063-1.204-.603-1.231-.684-.027-.081.138-.309.138-.309Z"
        fill="#B34B00"
      />
      <path
        d="M15.484 14.439c.036.264.193.53-.109.613-.3.085-.356-.195-.274-.447.081-.251.383-.166.383-.166Zm-1.048-.014c.048.11.192.352-.097.321a2.327 2.327 0 0 0-.65 0c-.181.03-.289-.167-.096-.159.192.008.338-.062.409-.242.073-.178.434.08.434.08Zm.707-3.328.086-.466s.194.194.278.314c.084.12.281.134.376.055.098-.078.227-.451.251-.655.023-.205.252-.169.167-.314-.084-.144-.174-.237-.318-.237-.145 0-.15.057-.15.057s-.184.048-.112.204c.072.157-.022.367-.022.367l-.143-.123s-.045-.46-.106-.532c-.061-.073-.316-.229-.436-.242-.12-.012-.265-.12-.21-.192.054-.072.174-.205.174-.362 0-.156.055-.494-.297-.445-.353.048-.474.277-.376.47.095.192.08.264.044.373-.036.108.016.228-.219.24-.235.012-.314.136-.35.341-.036.205-.005.261.007.43.012.169-.002.229-.002.229s-.215-.042-.372-.018c-.156.024-.482.223-.482.223h.783l.06.253s.085.097.121.084c.037-.012.235-.325.235-.325l.09.325.923-.054Z"
        fill="#892614"
      />
      <path
        d="M15.207 11.067c.132.289.252.915.228 1.252-.024.336-.09.686.004.998.093.314.225 1.205.225 1.205l-.337.23-.373-.241-.06-1.409-.213-.697-.208.504.084 1.566-.614-.012s.048-1.445.06-1.673c.013-.229.098-.927.127-1.144.03-.217.09-.493.09-.493l.987-.086Z"
        fill="#D3D3D3"
      />
      <path
        d="M15.182 11.007s-.247.068-.502.06c-.265-.008-.54-.09-.545-.06-.012.06 0 .265 0 .265s.224-.049.521 0c.297.048.418.036.526 0 .11-.036 0-.265 0-.265Z"
        fill="#9B5F00"
      />
      <path
        d="M14.596 8.333c-.264 0-.38.205-.369.422.012.216.074.277.074.277s-.052-.235.093-.12v-.23s.304.025.406 0c.103-.023.165-.047.165-.047l.042.162s.138-.162.006-.319c-.132-.156-.355-.145-.355-.145"
        fill="#000"
      />
      <path
        d="m14.803 9.306.99.531s-.132 0-.129.114c.003.114-.81-.383-.81-.383l-.05-.262Zm1.388.795.307.099s.037-.1.126-.05c.09.05-.045.452-.108.445-.063-.007-.135-.106-.145-.187-.009-.081-.28-.19-.28-.19l.1-.117Z"
        fill="#B34B00"
      />
    </FlagIconBase>
  ),
);
