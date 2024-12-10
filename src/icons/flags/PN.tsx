import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const PN = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M21.333 4.111H2.667c-.137 0-.272.01-.403.03l-.003 1.17-1.82-.003A2.656 2.656 0 0 0 0 6.778v12a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 24 18.778v-12a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#00247D"
      />
      <path
        d="M20.31 14.213c0 .327-.375.592-.836.592-.46 0-.835-.264-.835-.592 0-.327.374-.592.835-.592.461 0 .835.265.835.592Z"
        fill="#DD2E44"
      />
      <path
        d="M16.496 13.292c0 .28.845.61 1.524-.217.68-.829.482.298.203.473-.278.175-.576.596-1.178.531-.6-.065-.754-.303-.892-.65-.139-.346.343-.137.343-.137Z"
        fill="#009A67"
      />
      <path
        d="M16.617 11.526a.334.334 0 0 1-.182.434l-.618.252a.333.333 0 1 1-.252-.616l.618-.253c.17-.07.364.012.434.183Zm5.315 1.877c-.1.155-.28.216-.4.138l-.873-.566c-.121-.079-.138-.266-.038-.421.1-.155.28-.217.401-.139l.873.567c.12.079.138.267.037.421Z"
        fill="#FFF100"
      />
      <path
        d="M22.045 13.198a.333.333 0 1 1-.642.18l-.358-1.286a.333.333 0 0 1 .642-.179l.358 1.285Z"
        fill="#FFF100"
      />
      <path
        d="M22.32 13.346a.333.333 0 1 1-.667 0 .333.333 0 0 1 .666 0Z"
        fill="#FFF100"
      />
      <path
        d="M16.667 13.195c0 .138-.15.25-.334.25-.184 0-.333-.112-.333-.25v-1.5c0-.14.15-.25.333-.25.184 0 .334.11.334.25v1.5Z"
        fill="#009A67"
      />
      <path
        d="M17.146 12.502c.11.148.111.333.002.415l-.79.593c-.109.082-.287.029-.398-.119-.11-.148-.111-.333-.002-.415l.79-.593c.109-.081.287-.028.398.12Z"
        fill="#009A67"
      />
      <path
        d="M16.357 13.188c0 .181-.16.328-.357.328-.197 0-.357-.147-.357-.328 0-.182.16-.329.357-.329.197 0 .357.147.357.329Zm6.207-1.076c-.073.172-.438.18-.817.02-.377-.162-.624-.432-.55-.604.072-.172.438-.18.816-.019.378.16.624.43.551.603Z"
        fill="#009A67"
      />
      <path
        d="M18.537 12.281c-.387.251-.905.718-.905.718l.289.036s.352.37.414.72c.061.349-.079.112-.108.383-.03.27.122.453.122.453s.419-.141.694-.352c.274-.21.458-.526.615-.364.157.162.138.236.138.236H20s-.337-.329-.332-.518c.005-.188-.295-1.126-.295-1.126l-.836-.186Zm-.454-.84s.316-.241.283-.211c-.033.03.358.167.596.07.237-.098.701-.567.815-.497.114.068-.575.472-.287.536.288.064.379-.178.557-.266.178-.088.456-.099.187.079s-.64.948-.64.948l-1.086-.085-.285-.209-.14-.365Z"
        fill="#D4D5D6"
      />
      <path
        d="M19.937 12.246c0 .154-.402.278-.896.278s-.896-.124-.896-.277c0-.154.401-.278.896-.278.495-.001.896.123.896.277Zm-2.96 3.296c-.046.146-.38.17-.746.054-.366-.116-.626-.328-.58-.473.047-.147.381-.171.748-.055.365.116.624.329.578.474Zm5.07 1.082c-.02.113-.35.15-.738.081-.388-.067-.687-.214-.667-.327.02-.113.35-.15.738-.08.388.067.687.214.667.326Z"
        fill="#009A67"
      />
      <path
        d="M21.388 16.679c-.105.504-.282.893-.395.87-.112-.024-.119-.451-.014-.955s.282-.893.394-.87c.113.023.12.451.015.955Zm-1.675-4.343c.182.477.699 1.42 1.192 1.426.492.007.558-.207.558-.207s.018.375-.43.444c-.448.07-.703-.152-.621-.075.082.076.263.25.68.359.418.109 1.131.238 1.11.637-.021.4-.3.554-.272.378.028-.176-.286-.496-.837-.62-.552-.124-1.176-.425-1.448-1.318-.273-.894-.051-.082-.051-.082s-.54.165-.537-.105c.004-.27.419-.128.334-.47-.086-.343-.288-.577-.087-.504.202.073.409.137.409.137Zm-1.359 1.22c-.27.416-1.057 1.001-1.31 1.276-.253.275-.437.794-.49 1.139-.055.344.049.875.24.279.193-.596.533-.827.876-1.212.344-.385.577-.64.703-.896.126-.257-.019-.586-.019-.586Z"
        fill="#009A67"
      />
      <path
        d="M19.97 13.837c.085.28.076.529-.02.557-.095.03-.24-.174-.324-.453-.085-.28-.075-.53.02-.558.095-.029.24.175.324.454Zm-2.36-.004c0 .085-.205.153-.458.153s-.459-.069-.459-.153c0-.085.206-.153.459-.153s.459.068.459.153Zm-.733 2.763c.099.515.084.95-.032.972-.116.022-.291-.376-.389-.89-.1-.516-.085-.952.032-.974.116-.022.29.377.389.892Z"
        fill="#FFF100"
      />
      <path
        d="M17.214 16.501c0 .104-.295.188-.657.188-.364 0-.658-.084-.658-.188 0-.103.294-.187.658-.187.362 0 .657.084.657.187Zm.15 1.462c.125.255.16.496.074.538-.085.042-.256-.13-.383-.385-.125-.255-.159-.497-.074-.538.086-.043.256.13.383.385Zm3.62.163c-.184.264-.433.41-.555.324-.124-.086-.072-.37.112-.634.185-.265.434-.41.557-.324.122.085.071.37-.113.634Zm1.52-3.065c.083.135-.169.44-.563.68-.393.24-.779.326-.862.19-.083-.136.168-.44.562-.681.394-.24.78-.325.863-.19Zm-6.742-.14c.187-.442.769-.678 1.153-.78.384-.1.47-.216.781-.46.31-.245.236-.41.387-.3.152.11.278.162.132.369-.146.207-.655.644-.986.771-.33.128-.979.4-1.02.475-.042.074-.51.072-.447-.075Z"
        fill="#FFF100"
      />
      <path
        d="M17.253 14.24h3.184v2.42c0 1.032-1.592 2.103-1.592 2.103s-1.592-1.051-1.592-2.152v-2.372Z"
        fill="#4D8FCC"
      />
      <path
        d="m20.236 17.323-1.373-2.719-1.478 2.554c.372.877 1.459 1.605 1.459 1.605s.97-.659 1.392-1.44Z"
        fill="#009A67"
      />
      <path
        d="m17.381 16.986.105.257 1.378-2.494 1.337 2.474.108-.275-1.416-2.709-1.512 2.747Zm2.98-2.49c.222.365.628.257.803.874.175.618.082 1.287-.1.758-.183-.53-.237-.827-.755-.963-.517-.137.052-.67.052-.67Zm-3.317 3.197-.13.772.697-.354-.567-.418Zm3.69.123-.656.305.72.432-.064-.737Z"
        fill="#FFF100"
      />
      <path
        d="M19.5 16.653a.125.125 0 0 1-.123.125h-.971a.124.124 0 1 1 0-.249h.97c.069 0 .125.056.125.124Z"
        fill="#FFF100"
      />
      <path
        d="M18.952 17.937c0 .096-.025.174-.056.174h-.103c-.03 0-.056-.078-.056-.174v-1.652c0-.096.026-.174.056-.174h.103c.03 0 .056.078.056.174v1.652Z"
        fill="#FFF100"
      />
      <path
        d="m18.033 17.331.389.407-.068.083.44.29.6-.29-.128-.08.435-.328-.062.555-.16-.046-.628.53-.661-.56-.126.013-.031-.574Z"
        fill="#FFF100"
      />
      <path
        d="M12.667 12.778V4.11h-10c-.214 0-.403.03-.403.03l-.003 1.17-1.82-.003s-.028.04-.084.136A2.659 2.659 0 0 0 0 6.778v6h12.667Z"
        fill="#00247D"
      />
      <path
        d="M12.667 4.111h-1.554L8 6.291V4.11H4.667v1.713L2.264 4.14c-.41.063-.793.217-1.115.443l3.135 2.194H3.127L.645 5.038a2.69 2.69 0 0 0-.204.27l2.101 1.47H0v3.333h2.59L0 11.955v.823h2.221l2.446-1.712v1.712H8v-2.18l3.112 2.18h1.555v-1.353l-1.877-1.314h1.877V6.778H10.79l1.876-1.314V4.11Z"
        fill="#EEE"
      />
      <path
        d="M7.333 4.111h-2v3.333H0v2h5.333v3.334h2V9.444h5.334v-2H7.333V4.111Z"
        fill="#CF1B2B"
      />
      <path
        d="M12.667 4.111h-.974L8 6.697v.08h1.047l3.62-2.534v-.132Zm-11.518.473c-.187.13-.356.282-.504.454l2.482 1.74h1.156L1.15 4.584Zm3.142 5.527L.49 12.778h1.152l3.026-2.119v-.548H4.29Zm8.376 2.535v-.814l-2.458-1.72H9.047l3.62 2.534Z"
        fill="#CF1B2B"
      />
    </FlagIconBase>
  ),
);
