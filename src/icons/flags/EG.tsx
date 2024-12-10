import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const EG = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.333A2.667 2.667 0 0 1 21.333 21H2.667A2.667 2.667 0 0 1 0 18.333v-12a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6.333v12Z"
        fill="#141414"
      />
      <path d="M0 9h24v6.667H0V9Z" fill="#EEE" />
      <path
        d="M21.333 3.667H2.667A2.667 2.667 0 0 0 0 6.332V9h24V6.333a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#CE1225"
      />
      <path
        d="M9.833 14.708s.011.167.156.25c0 0-.041.125.115.198.156.073.719.187 1.698.187.98 0 1.531-.104 1.677-.177.146-.073.156-.24.156-.24s.156-.083.146-.187c-.01-.104-.218-.218-.218-.218s-.052-.136-.198-.188c-.146-.052-.615.23-1.511.188-.896-.042-1.406-.178-1.573-.167-.166.01-.239.177-.239.177s-.188.084-.209.177Z"
        fill="#BF9300"
      />
      <path
        d="M9.948 14.698c-.009.062.125.198.125.198s0 .156.136.198c.135.042.687.146 1.583.135.896-.01 1.531-.063 1.604-.125.073-.063.135-.198.135-.198s.146-.104.136-.188c-.011-.083-.219-.135-.219-.135s-.059-.125-.128-.177c-.07-.052-.517.208-1.476.208-.938 0-1.48-.23-1.573-.219-.094.01-.156.188-.156.188s-.156.042-.167.115Z"
        fill="#EEE"
      />
      <path
        d="M13.906 10.656s-.02-.49-.469-.427c-.448.062-.479.281-.958.333l-.099.01a2.128 2.128 0 0 1-.13-.677c0-.312.093-.448-.23-.604-.323-.156-.385-.01-.385-.01s-.25-.126-.365-.032c-.115.094-.052.334 0 .261.052-.073.26.135.26.135.071.346-.13.721-.267.93-.047-.005-.085-.007-.138-.013-.48-.052-.511-.27-.959-.333-.448-.063-.469.427-.469.427l-.177 3.781.365-.281.002-.045.758-.674.127-.126-.314.918s-.48-.032-.344.354c0 0 .073-.219.198-.178.125.042.49.136.49.136l.125.198.156-.146.489-.021s.156.041.146.177a.297.297 0 0 0 .025-.188l.147-.01a.297.297 0 0 0 .023.199c-.011-.135.146-.177.146-.177l.489.02.157.146.125-.198s.364-.094.489-.135c.124-.041.198.177.198.177.135-.385-.344-.354-.344-.354l-.3-.875.084.084.759.674.002.045.365.281-.177-3.782Zm-2.071 2.292c-.752-.464-.814-1.635-.814-1.635s.465-.024.802-.261c.304.27.823.24.823.24s-.035 1.175-.811 1.656Zm1.717-2.437-.635.604-.107.042c-.11.004-.641.006-.977-.292-.416.292-.989.312-.989.312l-.089-.035-.703-.631-.185.076c.008-.076.05-.245.279-.212.376.054.531.261.927.302l.112.012-.039.05c.061 0 .152-.018.219-.032l.075.007-.034.119a.937.937 0 0 0 .194-.103l.173.017.04.054.132-.066.088-.008c.077.044.186.084.186.084l.021-.104c.094.063.25.063.25.063-.018-.015-.036-.052-.055-.084l.096-.01c.396-.041.551-.248.928-.302.229-.033.27.136.278.211l-.185-.074Z"
        fill="#BF9300"
      />
      <path
        d="m11.583 12.927-.375 1.427-.625-.125.646-1.833.354.531Zm.466 0 .375 1.427.625-.125-.646-1.833-.354.531Z"
        fill="#EEE"
      />
      <path
        d="M11.177 11.427s.052.604.323 1.073v-1.208s-.177.104-.323.135Zm1.302.021s-.052.604-.322 1.073v-1.208a1.3 1.3 0 0 0 .322.135Z"
        fill="#BF9300"
      />
      <path
        d="M11.302 9.385s.073-.072.281.073a4.9 4.9 0 0 0 .256.167s.085-.09.21-.07c.126.021.056.195.076.559.021.365.167.52.167.52l-.177-.103.01.114-.198-.094-.094.136-.094-.146-.152.092-.046-.124-.177.094s.26-.322.281-.677a3.045 3.045 0 0 0-.02-.344s-.166-.207-.323-.197Z"
        fill="#EEE"
      />
      <path
        d="M10.365 14.77c-.12.072-.073.115 0 .146.072.032.51.085 1.396.104.906.021 1.468-.083 1.541-.125.073-.041.083-.114-.041-.135-.126-.02-.75.083-1.511.083-.937 0-1.333-.104-1.385-.072Z"
        fill="#BF9300"
      />
    </FlagIconBase>
  ),
);
