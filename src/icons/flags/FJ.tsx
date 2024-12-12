import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const FJ = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M21.333 3.555H2.667c-.137 0-.272.01-.403.03l-.003 1.17-1.82-.003A2.656 2.656 0 0 0 0 6.222v12a2.667 2.667 0 0 0 2.667 2.667h18.666A2.667 2.667 0 0 0 24 18.222v-12a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#68BFE5"
      />
      <path
        d="M18.43 7.972h-3.25v5.5c0 1.86 3.25 2.903 3.25 2.903s3.25-1.042 3.25-2.903v-5.5h-3.25Z"
        fill="#000"
      />
      <path
        d="M18.43 16.235c-.37-.127-3.116-1.13-3.116-2.763V8.105h6.233v5.367c0 1.633-2.746 2.635-3.116 2.763Z"
        fill="#fff"
      />
      <path
        d="M21.547 10.153V8.105h-6.233v2.048h2.672v2.264h-2.672v.874h2.672v2.773c.211.087.373.145.445.17a8.09 8.09 0 0 0 .43-.165v-2.777h2.686v-.875h-2.686v-2.264h2.686Z"
        fill="#D21034"
      />
      <path
        d="M16.123 9.35c0 .183-.172.332-.382.332-.21 0-.381-.149-.381-.332 0-.183.17-.332.381-.332.21 0 .382.149.382.332Z"
        fill="#fff"
      />
      <path
        d="M15.813 9.087c-.218.038-.323-.094-.282-.219.042-.124.25-.24.448-.26.198-.021.386.177.542.187.156.01.239-.076.27-.19.032-.113.25-.37.115-.435.177 0 .177.187.177.187s.198-.198.344-.187c.084.146 0 .354 0 .354s.208-.084.354.01c-.281.042-.322.208-.322.208s.052.136-.021.208c-.073.073.573.208.927.104.354-.104 1.032-.344 1.469-.344.437 0 .531.167.635.02.104-.145-.125-.301-.5-.27-.374.032-1.01.466-1.26.176-.063 0-.094.074-.094.074s-.156-.052-.313-.135c-.156-.083-.125.198-.041.24-.261-.011-.252-.18-.252-.18s-.322-.235-.113-.413c.015.324.302.23.459.167a.473.473 0 0 1 .448.073c.094.083.364.156.708-.042s1.27-.27 1.281.146c.01.417-.459.448-.459.448s.052.25.344.198c.292-.052.48-.135.563.094.083.23.27.24.209.428-.063.187-.271.274-.552.226-.282-.05-.313-.164-.084-.206.23-.041.271-.218.188-.26-.084-.042-.24.125-.448.04a3.998 3.998 0 0 1-.48-.25s.011.116-.177.178c-.187.063-.031.136.02.25.053.115-.187.208-.437.26-.25.052-.437.188-.677-.104-.24-.292.063-.374.187-.281.125.093.25.26.354.177.104-.083-.072-.135-.094-.292-.02-.156.011-.343.011-.343s-.333.52-1.041.624c-.708.104-.834.104-.834.104l-.208-.146-.25.167-.01-.188s-.396.31-.604.359c-.208.048-.778-.087-.79-.244-.013-.156.05-.23.237-.292.187-.063.219.041.313.125.094.084.198.198.333.084.135-.115.208-.156.208-.156l.041-.198-.198-.011.073-.229s-.146.03-.25-.063c-.104-.094-.115-.187-.208-.156-.093.032-.02.136-.26.178Z"
        fill="#FFD101"
      />
      <path
        d="M16.313 12.107c-.178.073-.448-.51-.292-.677.156-.166.468.605.292.678Zm.343-.072c-.166.014-.104-.792 0-.792.105 0 .23.771 0 .792Zm.292.127c-.207-.038.104-.523.187-.523.084 0 .052.567-.187.523Zm3.291.133c-.406.011-.177-.072-.135-.181.041-.111.017-.934.017-.934h.233s-.073.709 0 .855c.073.146.26.25-.115.26Zm.802 1.438c.097-.108-.146-.282-.312-.282-.167 0-.356.095-.496.49-.14.396.157.281.233.063.076-.22.138-.345.253-.354.114-.011.156.27.322.083Zm-1.593 1.385c-.214-.016-.396.541-.396.541s.959-.5.396-.54Z"
        fill="#964B36"
      />
      <path
        d="M16.123 11.639c.052.166-.477-.027-.487.262-.219-.033.094-.46.292-.398-.041-.229-.337-.322-.367.052-.331-.292.091-.572.281-.448-.101-.354-.295-.348-.32-.135-.25-.208.003-.541.22-.385.217.156.233.322.233.322s.152-.539.537-.363c-.467.197-.559.55-.39 1.093Z"
        fill="#00A651"
      />
      <path
        d="M16.67 11.407a1.394 1.394 0 0 1-.222-.279s.147.396-.083.563c.01-.365-.24-.49-.104-.635.135-.146.364 0 .364 0s.054-.085-.18-.292c-.235-.207-.403-.198-.414-.375.236.14.596.14.638.531.05-.468.261-.48.358-.49.098-.01.327.042.41-.04 0 .166-.187.114-.312.166.166.115.177.485.177.485s-.24-.422-.344-.39c-.104.03-.173.343-.173.343s.38-.011.242.5c-.059-.281-.122-.312-.194-.312-.073 0-.164.225-.164.225Z"
        fill="#00A651"
      />
      <path
        d="M17.027 11.76c.014-.194.108-.528.212-.554.035-.213.146-.515.375-.567.23-.052.281.187.23.322-.136-.197-.323-.25-.365.22.198-.053.312.103.26.312-.187-.219-.322-.245-.406-.086.219.086.223.273.112.43-.049-.27-.194-.25-.27 0-.078.25-.148-.077-.148-.077Zm3.17-.353c-.238 0-.551.246-.572.628-.25-.376.056-.792.377-.938-.565.01-.773.26-.845.469-.073-.553.628-.771.845-.678-.137-.24-.679-.22-.95-.021 0-.458.81-.568 1.145-.154-.041-.335.095-.419.095-.419v.448s.754-.708 1.169.146c-.669-.344-.994.01-.994.01s.692-.166.597.636c-.22-.49-.679-.437-.679-.437s.532.24.323.833c-.208-.572-.511-.523-.511-.523Z"
        fill="#00A651"
      />
      <path
        d="M19.687 14.014c-.031-.312.365-.49.365-.49s.667.407.76.49c.095.084-.057.432-.346.524-.289.09-.779-.524-.779-.524Z"
        fill="#FFF202"
      />
      <path
        d="M19.504 15.125c-.157-.098-.257-.653 0-.706-.097-.333.11-.5.183-.52.073-.02.343.101.546.295.204.194.381.24.397.317.016.075-.127.304-.373.325.076.23-.51.443-.753.29Z"
        fill="#00A651"
      />
      <path
        d="M16.031 13.827s.156-.064.25-.157.219-.094.323.078c.104.172.18.39.18.39s-.035-.312.289-.479c.323-.166.372-.208.372-.208l-.112.446s.386-.237.448-.373c.084.531-.312.911-.562 1.013.135.227.072.414.072.414l.459.375-.5.156-.223-.48s-.578.021-.662-.416c-.084-.437.116-.672 0-.69-.115-.018-.334-.07-.334-.07Z"
        fill="#000"
      />
      <path
        d="m17.07 14.935-.045.002c-.098 0-.528-.019-.594-.363a1.162 1.162 0 0 1 .019-.51c.019-.086.031-.143 0-.19l-.017-.023-.057-.02a2.913 2.913 0 0 1-.153-.03.584.584 0 0 0 .106-.084c.02-.02.05-.044.085-.044.043 0 .091.039.133.109.1.164.175.377.176.378l.129-.03a.432.432 0 0 1 .252-.412c.105-.054.18-.095.237-.126l-.112.447.14-.086c.046-.03.23-.144.356-.261-.014.426-.355.71-.532.783l-.071.029.04.067c.117.195.069.352.067.359l-.014.043.398.326-.326.102-.218-.466Z"
        fill="#fff"
      />
      <path
        d="M16.17 13.755c-.076-.178-.076-.178-.196-.23-.005.114 0 .186 0 .186s-.067-.218-.172-.187a.231.231 0 0 0 .161.303s-.098.032-.088.208c.177.072.156-.084.156-.084s-.037.16.091.252c.086-.137.048-.448.048-.448Z"
        fill="#00A651"
      />
      <path
        d="M12.667 12.222V3.555h-10c-.214 0-.403.03-.403.03l-.003 1.17-1.82-.003s-.028.04-.084.137A2.659 2.659 0 0 0 0 6.222v6h12.667Z"
        fill="#00247D"
      />
      <path
        d="M12.667 3.555h-1.554L8 5.735v-2.18H4.667v1.713L2.264 3.585a2.63 2.63 0 0 0-1.115.444l3.135 2.193H3.127L.645 4.482a2.81 2.81 0 0 0-.204.27l2.101 1.47H0v3.333h2.59L0 11.4v.823h2.221l2.446-1.712v1.712H8v-2.18l3.112 2.18h1.555V10.87L10.79 9.555h1.877V6.222H10.79l1.876-1.314V3.555Z"
        fill="#EEE"
      />
      <path
        d="M7.333 3.555h-2V6.89H0v2h5.333v3.333h2V8.89h5.334v-2H7.333V3.555Z"
        fill="#CF1B2B"
      />
      <path
        d="M12.667 3.555h-.974L8 6.141v.081h1.047l3.62-2.535v-.132ZM1.149 4.03c-.187.13-.356.282-.504.454l2.482 1.74h1.156L1.15 4.028Zm3.142 5.526L.49 12.222h1.152l3.026-2.119v-.548H4.29Zm8.376 2.535v-.813l-2.458-1.722H9.047l3.62 2.535Z"
        fill="#CF1B2B"
      />
    </FlagIconBase>
  ),
);
