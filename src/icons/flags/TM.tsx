import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const TM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[4]})`}>
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
            fill="#29C470"
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
            <path fill="#C51918" d="M1-.161h5v13.162H1z" />
            <mask
              id={`${ids[2]}`}
              width="5"
              height="14"
              x="1"
              y="-1"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M1-.161h5v13.162H1z" />
            </mask>
            <g mask={`url(#${ids[2]})`}>
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="m1.298.453-.273.35L1 .78l.265-.34V.364L1.298.27l-.02-.033-.155.157.3-.47v.16l.059.053.138-.241-.139-.233-.1.077.04.081-.027.02-.226-.378.144.099.025-.037-.138-.14.061-.068-.2-.293L1.083-1l.22.32-.058.062.135.137-.062.09-.041-.028.078.132.133-.102.169.283-.17.296L1.39.102V.038L1.291.19l.042.074-.035.109v.079Zm-.273 2.862.273-.35v-.08l.035-.109-.042-.073.099-.154v.064l.098.089.17-.296-.17-.284-.132.102-.078-.132.04.029.063-.09-.135-.137.057-.063-.219-.32-.026.023.201.294-.06.067.137.14-.025.037-.144-.098.226.377.028-.02-.04-.08.1-.077.138.232-.138.241-.058-.052v-.16l-.301.469.156-.156.019.033-.031.095-.001.006v.068L1 3.29l.025.025Zm.273 1.94-.273.35L1 5.581l.265-.34v-.076l.032-.095-.02-.033-.155.156.3-.47v.161l.059.052.138-.241-.139-.233-.1.077.04.082-.027.02-.226-.378.144.098.025-.037-.138-.14.061-.067-.2-.294.025-.023.22.32-.058.063.135.137-.062.09-.041-.029.078.132.133-.102.169.283-.17.297-.098-.09V4.84l-.099.154.042.073-.035.11v.078Zm-.273 2.677.273-.351V7.5l.035-.108-.042-.073.099-.154v.064l.098.088.17-.296-.17-.283-.132.102-.078-.132.04.028.063-.09-.135-.136.057-.063-.219-.32-.026.023.201.294-.06.067.137.14-.025.037-.144-.099.226.378.028-.02-.04-.08.1-.078.138.233-.138.241-.058-.052v-.16l-.301.469.156-.157.019.033-.031.095-.001.007v.068L1 7.907l.025.025Zm0 2.068.273-.35v-.08l.035-.109-.042-.073.099-.154v.064l.098.089.17-.297-.17-.283-.132.102-.078-.132.04.029.063-.09-.135-.137.057-.063-.219-.32-.026.023.201.294-.06.067.137.14-.025.037-.144-.098.226.377.028-.02-.04-.08.1-.077.138.232-.138.241-.058-.052v-.16l-.301.469.156-.156.019.033-.031.095-.001.006v.068L1 9.975l.025.025Zm4.95 0-.273-.35v-.08l-.035-.109.042-.073-.099-.154v.064l-.098.089-.17-.297.17-.283.132.102.078-.132-.04.029-.063-.09.135-.137-.057-.063.219-.32.026.023-.201.294.06.067-.137.14.025.037.144-.098-.226.377-.028-.02.04-.08-.1-.077-.138.232.138.241.058-.052v-.16l.301.469-.156-.156-.019.033.031.095.001.006v.068l.265.34-.025.025Zm-.273-2.42.273.352L6 7.907l-.265-.34v-.075l-.032-.095.02-.033.155.157-.3-.47v.16l-.059.053-.138-.241.139-.233.1.077-.04.082.027.019.226-.378-.144.099-.025-.037.138-.14-.061-.067.2-.294-.025-.023-.22.32.058.063-.135.137.062.09.041-.029-.078.132-.133-.102-.169.283.17.296.098-.088v-.064l.099.154-.042.073.035.109v.079Zm.273-1.975-.273-.35v-.08l-.035-.109.042-.073-.099-.154v.064l-.098.089-.17-.297.17-.283.132.102.078-.132-.04.029-.063-.09.135-.137-.057-.063.219-.32.026.023-.201.294.06.067-.137.14.025.037.144-.098-.226.377-.028-.02.04-.08-.1-.078-.138.233.138.241.058-.052v-.16l.301.469-.156-.156-.019.033.031.095.001.006v.068L6 5.58l-.025.025Zm-.273-2.64.273.35L6 3.291l-.265-.34v-.076l-.032-.095.02-.033.155.156-.3-.469v.16l-.059.052-.138-.241.139-.232.1.076-.04.082.027.02.226-.378-.144.098-.025-.037.138-.14-.061-.067.2-.294-.025-.023-.22.32.058.063-.135.137.062.09.041-.029-.078.132-.133-.102-.169.284.17.296.098-.089v-.064l.099.154-.042.073.035.11v.078ZM5.975.803l-.273-.35v-.08L5.667.266 5.709.19 5.61.038v.064L5.512.19l-.17-.296.17-.283.132.102.078-.132-.04.028-.063-.09.135-.137-.057-.062.219-.32.026.023-.201.293.06.068-.137.14.025.037.144-.099-.226.378-.028-.02.04-.081-.1-.077-.138.233.138.241.058-.052v-.16l.301.469-.156-.157-.019.033.031.095.001.007v.068L6 .779l-.025.025Z"
                clipRule="evenodd"
              />
              <path
                fill="#389F5D"
                fillRule="evenodd"
                d="M3.653 7.282h.777v.183h.177v.146h.212v.474h-.212v.145H4.43v.146h-.756l-.21.186-.21-.186h-.7V8.23h-.177v-.145H2.2V7.61h.177v-.146h.177v-.183h.722l.189-.167.188.167Z"
                clipRule="evenodd"
              />
              <path
                fill="#E8AA00"
                d="M4.43 7.282h.075v-.075H4.43v.075Zm-.777 0-.05.057.022.018h.028v-.075Zm.777.183h-.075v.075h.075v-.075Zm.177 0h.075V7.39h-.075v.075Zm0 .146h-.075v.075h.075V7.61Zm.212 0h.075v-.075H4.82v.075Zm0 .474v.075h.075v-.075H4.82Zm-.212 0V8.01h-.075v.075h.075Zm0 .145v.075h.075V8.23h-.075Zm-.177 0v-.075h-.075v.075h.075Zm0 .146v.075h.075v-.075H4.43Zm-.756 0v-.075h-.028l-.022.02.05.055Zm-.21.186-.049.056.05.044.05-.044-.05-.056Zm-.21-.186.05-.056-.02-.019h-.03v.075Zm-.7 0h-.075v.075h.075v-.075Zm0-.146h.075v-.075h-.075v.075Zm-.177 0h-.075v.075h.075V8.23Zm0-.145h.075V8.01h-.075v.075Zm-.177 0h-.075v.075H2.2v-.075Zm0-.474v-.075h-.075v.075H2.2Zm.177 0v.075h.075V7.61h-.075Zm0-.146V7.39h-.075v.075h.075Zm.177 0v.075h.075v-.075h-.075Zm0-.183v-.075h-.075v.075h.075Zm.722 0v.075h.028l.021-.018-.05-.057Zm.189-.167.05-.056-.05-.044-.05.044.05.056Zm.965.092h-.777v.15h.777v-.15Zm.075.258v-.183h-.15v.183h.15Zm.102-.075H4.43v.15h.177v-.15Zm.075.22v-.145h-.15v.146h.15Zm.137-.074h-.212v.15h.212v-.15Zm.075.549V7.61h-.15v.474h.15Zm-.287.075h.212v-.15h-.212v.15Zm.075.07v-.145h-.15v.145h.15Zm-.252.075h.177v-.15H4.43v.15Zm.075.071V8.23h-.15v.146h.15Zm-.83.075h.755v-.15h-.756v.15Zm-.16.167.209-.186-.1-.112-.209.186.1.112Zm-.31-.186.21.186.1-.112-.21-.186-.1.112Zm-.651.02h.7v-.15h-.7v.15Zm-.075-.222v.146h.15V8.23h-.15Zm-.102.075h.177v-.15h-.177v.15Zm-.075-.22v.145h.15v-.145h-.15ZM2.2 8.16h.177v-.15H2.2v.15Zm-.075-.55v.475h.15V7.61h-.15Zm.252-.074H2.2v.15h.177v-.15Zm-.075-.071v.146h.15v-.146h-.15Zm.252-.075h-.177v.15h.177v-.15Zm-.075-.108v.183h.15v-.183h-.15Zm.797-.075h-.722v.15h.722v-.15Zm.05.132.189-.168-.1-.112-.19.167.1.113Zm.09-.168.188.168.1-.113-.19-.167-.099.112Z"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="M2.658 7.704v-.322h.375l-.375.322Zm1.578 0v-.322h-.375l.375.322Zm-1.578.583v-.322l.375.322h-.375Zm1.578-.322v.322h-.375l.375-.322Z"
                clipRule="evenodd"
              />
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="m3.323 7.41.13-.17.127.17h-.257Zm0 .158.13.17.127-.17h-.257Zm.13.4-.13.17h.257l-.128-.17Zm-.13.329.13.17.127-.17h-.257Z"
                clipRule="evenodd"
              />
              <path
                fill="#AF0100"
                fillRule="evenodd"
                d="M3.325 7.39v.072h-.074v.1h.074v.073h.26v-.073h.074v-.1h-.074V7.39h-.26Zm.26.801V8.12h-.26v.072h-.074v.1h.074v.073h.26v-.073h.074v-.1h-.074Zm-.758-.416.123-.17.122.17h-.245Zm0 .16.123.17.122-.17h-.245Zm1.15-.33-.123.17h.245l-.122-.17Zm-.123.33.123.17.122-.17h-.245Z"
                clipRule="evenodd"
              />
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="M2.826 7.754v.074h-.07v.102h.07v.075h.247V7.93h.07v-.102h-.07v-.074h-.247Zm1.274.074v-.074h-.247v.074h-.071v.102h.07v.075H4.1V7.93h.07v-.102H4.1Z"
                clipRule="evenodd"
              />
              <mask
                id={`${ids[3]}`}
                width="3"
                height="3"
                x="2"
                y="8"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="m3.109 8.625-.886.5v.828l.886.52h.959l.907-.52v-.828l-.907-.5h-.96Z"
                  clipRule="evenodd"
                />
              </mask>
              <g mask={`url(#${ids[3]})`}>
                <path fill="#E8AA00" d="M2.235 9.548h1.38v.911h-1.38v-.911Z" />
                <path fill="#F9E8E7" d="M2.094 8.636h1.522v.911H2.094z" />
                <path
                  fill="#E8AA00"
                  d="m2.448 9.168.458-.276v.276h-.458Zm2.69-.532H3.616v.911h1.522z"
                />
                <path
                  fill="#F9E8E7"
                  d="m4.678 9.168-.458-.276v.276h.458Zm.319 1.291H3.616v-.911h1.38z"
                />
                <path fill="#E8AA00" d="m4.642 9.928-.458.276v-.276h.458Z" />
                <path fill="#FCFCFC" d="m2.448 9.87.458.277V9.87h-.458Z" />
              </g>
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="M3.12 9.183h.23l.23-.073.23.073h.23v.693h-.23l-.23.11-.23-.11h-.23v-.693Z"
                clipRule="evenodd"
              />
              <path
                fill="#C9343F"
                fillRule="evenodd"
                d="M3.9 8.769h.124v.14h.051v.1h-.05v.055h-.126v-.295Zm-1.256.437h-.125v.295h.125v-.054h.05v-.1h-.05v-.14Zm.177 0h-.125v.295h.125v-.295Zm-.177.365h-.125v.295h.125v-.054h.05v-.1h-.05V9.57Zm.052 0h.125v.295h-.125V9.57Zm1.77-.365h.124v.141h.052v.1H4.59v.054h-.125v-.295Zm.301 0h-.125v.295h.125v-.295Zm-.177.365h-.125v.295h.125v-.054h.052v-.1H4.59V9.57Zm.052 0h.125v.295h-.125V9.57Zm-.44-.802h-.126v.295h.125v-.295Zm-1.027 0H3.05v.295h.125V9.01h.05v-.1h-.05v-.141Zm.052 0h.125v.295h-.125v-.295Zm.672 1.24h.125v.14h.051v.1h-.05v.054h-.126v-.295Zm.302 0h-.125v.294h.125v-.295Zm-1.026 0H3.05v.294h.125v-.054h.05v-.1h-.05v-.14Zm.052 0h.125v.294h-.125v-.295Z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M3.513 9.333h.035v-.099h-.177v.113h-.146v.163h.136v-.037h-.1v-.09h.12l.18.158-.18.156h-.12v-.09h.1v-.036h-.136v.163h.146v.113h.177v-.1h-.035v.063h-.107v-.087l.184-.16.184.16v.087h-.106v-.062h-.035v.099h.177v-.113h.146V9.57H3.82v.037h.1v.09H3.8l-.18-.158.18-.156h.12v.09h-.1v.036h.136v-.163H3.81v-.113h-.177v.1h.035V9.27h.106v.087l-.184.16-.184-.16V9.27h.107v.062Z"
                clipRule="evenodd"
              />
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="M3.792 2.4H3.17v2h.623v-2Zm-1.402.423h.39V3.9h-.39V2.823Zm1.83 0h.39V3.9h-.39V2.823Z"
                clipRule="evenodd"
              />
              <path
                fill="#389F5D"
                fillRule="evenodd"
                d="M3.169 2.554h-.39v1.538h.39V2.554Zm-.78.423H2v.73h.39v-.73Zm2.221 0H5v.73h-.39v-.73Zm-.428-.423h-.39v1.538h.39V2.554Z"
                clipRule="evenodd"
              />
              <path
                fill="#E1E5E8"
                fillRule="evenodd"
                d="M3.09 2.746a.116.116 0 0 1-.116.116.116.116 0 0 1-.117-.116c0-.063.052-.115.117-.115s.117.052.117.115Zm-.778.385a.116.116 0 0 1-.117.115.116.116 0 0 1-.117-.115.117.117 0 0 1 .234 0Zm0 .423a.116.116 0 0 1-.117.115.116.116 0 0 1-.117-.115c0-.064.052-.115.117-.115.064 0 .117.051.117.115Zm.662.461a.116.116 0 0 0 .117-.115.116.116 0 0 0-.117-.115.116.116 0 0 0-.117.115c0 .064.052.115.117.115Zm1.831-.769a.116.116 0 0 0 .117-.115.116.116 0 0 0-.117-.116.116.116 0 0 0-.117.116c0 .064.053.115.117.115Zm.117.308a.116.116 0 0 1-.117.115.116.116 0 0 1-.117-.115c0-.064.053-.115.117-.115.065 0 .117.051.117.115Zm-.935.461a.116.116 0 0 0 .117-.115.116.116 0 0 0-.117-.115.116.116 0 0 0-.117.115c0 .064.052.115.117.115Zm.117-1.269a.116.116 0 0 1-.117.116.116.116 0 0 1-.117-.116c0-.063.052-.115.117-.115s.117.052.117.115Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="M3.597 2.592a.116.116 0 0 1-.116.116.116.116 0 0 1-.117-.116c0-.063.052-.115.117-.115.064 0 .116.052.116.115Zm-.896.424a.116.116 0 0 1-.117.115.116.116 0 0 1-.116-.115.116.116 0 0 1 .233 0Zm.78 1.346a.116.116 0 0 0 .116-.116.116.116 0 0 0-.116-.115.116.116 0 0 0-.117.115c0 .064.052.116.117.116Zm1.051-1.346a.116.116 0 0 1-.116.115.116.116 0 0 1-.117-.115.116.116 0 0 1 .233 0Zm-1.948.807a.116.116 0 0 0 .117-.115.116.116 0 0 0-.117-.116.116.116 0 0 0-.116.116c0 .064.052.115.116.115Zm1.948-.115a.116.116 0 0 1-.116.115.116.116 0 0 1-.117-.115.116.116 0 0 1 .233 0Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="m2.803 3.196.38-.343h.615l.433.393h.574V3.4h-.559v.008l-.448.456h-.615l-.38-.411V3.4h-.647v-.154h.647v-.05Z"
                clipRule="evenodd"
              />
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="m3.506 3.138.184.187-.194.183-.193-.183.184-.187.01-.008.009.008Zm.033.451.022-.02-.022-.02.191-.183.2.203-.09.095h-.053l-.1.063-.148-.138Zm-.043.04-.184.17-.124-.077h-.061l-.146-.154.239-.242-.24-.227.157-.153.058.045.082-.084-.025-.025.042-.04.202.204.202-.204.042.04-.025.025.083.084.057-.045.158.153-.24.227.238.242-.145.154h-.062l-.123.077-.185-.17ZM3.6 3.15l.003-.003-.056-.05-.007-.008.144-.133.11.111.058-.045.078.075-.197.187L3.6 3.15Zm-.123.418-.171.158-.1-.063h-.053l-.09-.095.2-.203.214.203Zm-.412-.47.197.186.192-.195-.144-.133-.11.111-.058-.045-.077.075Zm-.841 7.622c-.104-.132-.175-.221-.193-.22-.059.004-.113.622.645 1.092 0 0 .112.062.177 0 .065-.062 0-.154 0-.154a6.621 6.621 0 0 1-.629-.717Zm2.552 0c.104-.132.175-.221.193-.22.059.004.113.622-.645 1.092 0 0-.112.062-.177 0-.065-.062 0-.154 0-.154.245-.23.474-.52.629-.717Zm-.056.832c-.249.074-.537.089-.648.041a.637.637 0 0 0-.112-.036 1.008 1.008 0 0 0-.343-.011l-.05.006a.336.336 0 0 1-.02.002.108.108 0 0 0-.025.003.108.108 0 0 0-.025-.003l-.02-.002-.05-.006a1.008 1.008 0 0 0-.344.011.636.636 0 0 0-.111.036c-.11.048-.4.033-.649-.041 0 0 .454.182.723.101a.479.479 0 0 1 .083-.026.774.774 0 0 1 .25-.01c-.04.018-.087.04-.14.06v.023c.106-.043.23-.063.283-.07.053.007.177.027.283.07v-.022a2.952 2.952 0 0 1-.14-.062.774.774 0 0 1 .25.01.479.479 0 0 1 .083.027c.269.08.722-.101.722-.101Z"
                clipRule="evenodd"
              />
              <path
                fill="#389F5D"
                fillRule="evenodd"
                d="m2.882 4.989-.626.551v.526l.547.55h1.118l.616-.587v-.447l-.616-.593H2.882Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="M3.097 5.047h-.141v.11h.141v-.11Zm0 1.43h-.141v.11h.141v-.11Zm.213 0h.141v.11H3.31v-.11Zm.141-1.43H3.31v.11h.141v-.11Zm.213 1.43h.141v.11h-.141v-.11Zm.141-1.43h-.141v.11h.141v-.11Z"
                clipRule="evenodd"
              />
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="M3.277 5.019h-.144v.11h.144v-.11Zm0 1.458h-.144v.11h.144v-.11Zm.216-1.458h.144v.11h-.144v-.11Zm.144 1.458h-.144v.11h.144v-.11Z"
                clipRule="evenodd"
              />
              <path
                fill="#750100"
                fillRule="evenodd"
                d="M2.457 4.92h1.89v.293h.27V6.42h-.27v.25h-1.89v-.25h-.294V5.213h.294v-.292Zm.106.402h-.294v.989h.294v.25h1.678v-.25h.27v-.989h-.27V5.03H2.563v.292Z"
                clipRule="evenodd"
              />
              <path
                fill="#389F5D"
                fillRule="evenodd"
                d="M3.204 4.8h-.177v.182h.177V4.8Zm.283 0H3.31v.182h.177V4.8Zm.106 0h.177v.182h-.177V4.8Zm-.39 1.823h-.176v.182h.177v-.182Zm.107 0h.177v.182H3.31v-.182Zm.46 0h-.177v.182h.177v-.182Zm-1.773-.404v-.177h.183v.177h-.183Zm0-.468v.177h.183V5.75h-.183Zm0-.115v-.177h.183v.177h-.183Zm2.549.406v.177h.182v-.177h-.182Zm0-.114V5.75h.182v.177h-.182Zm0-.47v.178h.182v-.177h-.182Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="m2.89 5.142-.306.266v.859l.253.18h1.099l.253-.18v-.86l-.286-.265H2.889Z"
                clipRule="evenodd"
              />
              <path
                fill="#E1E5E8"
                fillRule="evenodd"
                d="m3.402 5.499-.369.314h.369V5.5Z"
                clipRule="evenodd"
              />
              <path fill="#E8AA00" d="m3.402 6.099-.369-.315h.369v.315Z" />
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="m3.37 5.499.368.314H3.37V5.5Z"
                clipRule="evenodd"
              />
              <path
                fill="#29AE66"
                fillRule="evenodd"
                d="M3.386 5.898a.112.112 0 1 0 0-.223.112.112 0 0 0 0 .223Z"
                clipRule="evenodd"
              />
              <path fill="#E1E5E8" d="m3.37 6.099.368-.315H3.37v.315Z" />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="M2.602 5.675h-.319v.102h.319v-.102Zm0 .186h-.319v.102h.319v-.102Zm1.593-.186h.318v.102h-.318v-.102Zm.318.186h-.318v.102h.318v-.102Z"
                clipRule="evenodd"
              />
              <path
                fill="#E8AA00"
                fillRule="evenodd"
                d="M2.566 5.566h-.283v.111h.283v-.111Zm0 .186h-.283v.111h.283v-.111Zm-.283.186h.283v.111h-.283v-.111Zm2.195-.372h-.283v.111h.283v-.111Zm-.283.186h.283v.111h-.283v-.111Zm.283.186h-.283v.111h.283v-.111ZM4.992.795v.203h-1.48l-.001.92h-.464c-.081 0-.303-.156-.303-.156h-.377l-.174-.178v-.178l-.186-.222V.982h1.48l.001-.92h.464c.081 0 .303.155.303.155h.377l.174.178v.178l.186.222Z"
                clipRule="evenodd"
              />
              <path
                fill="#E1E5E8"
                fillRule="evenodd"
                d="M2.007.795v.203h1.48l.001.92h.464c.081 0 .303-.156.303-.156h.377l.174-.178v-.178l.186-.222V.982h-1.48l-.001-.92h-.464c-.081 0-.303.155-.303.155h-.377l-.174.178v.178l-.186.222Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="M3.001.343 2.985.264l.319-.073A.992.992 0 0 0 3.5.034l.043.048.008-.008a.992.992 0 0 0 .196.157l.32.073-.017.079-.177-.037.017.015a.22.22 0 0 0-.04.032L3.776.382l.007-.025-.02-.003a.85.85 0 0 0-.045.11L3.643.442l.03-.145L3.504.14l-.118.11c.015.014.03.03.044.047a.705.705 0 0 1-.036.013h-.005l.02.093-.076.022a1.129 1.129 0 0 0-.028-.072H3.3a.22.22 0 0 0-.04-.032l.022-.019a.185.185 0 0 0-.01-.015l-.27.056Zm.013.286.043-.067-.22-.148L2.86.38 2.798.333 2.771.37 2.684.31 2.64.38l.084.056-.017.024.062.048.02-.028.224.15Zm-.272.08.042-.067-.22-.148.024-.034-.063-.047-.027.038-.087-.06-.043.068.084.056-.017.024.063.048.02-.028.224.15Zm-.117.24.042-.067-.22-.148L2.47.7 2.41.653 2.38.69 2.294.63 2.251.7l.084.056-.017.024.063.048.02-.028.224.15Zm.003.192-.042-.067-.224.15-.02-.027-.063.047.017.024-.084.056.043.067.088-.058.027.038.062-.048-.024-.034.22-.148Zm.075.173.042.067-.22.148.024.034-.063.048-.027-.038-.087.058-.043-.067.084-.056-.017-.024.063-.047.02.027.224-.15Zm.272.08.043.067-.22.148.024.034-.063.048-.027-.038-.087.058-.043-.067.084-.056-.017-.024.062-.047.02.027.224-.15Zm.416.383a.704.704 0 0 0-.036-.013L3.34 1.76l.03-.139-.075-.022a.603.603 0 0 1-.063.137l-.27-.055-.016.078.308.07v.001l.044.03.006-.004c.039.027.091.071.157.133l.026-.028.025.028c.091-.085.158-.138.196-.157l.01-.002a.31.31 0 0 0 .041.03l.044-.03-.004-.015.005-.005.223-.051-.016-.078-.27.055A.603.603 0 0 1 3.68 1.6l-.075.022.03.145-.147.138-.115-.107a.542.542 0 0 0 .019-.02Zm.954-.636.042-.067.224.15.02-.027.063.047-.017.024.084.056-.043.067-.087-.058-.027.038-.063-.048.024-.034-.22-.148Zm-.117.24.043-.067.224.15.02-.027.062.047-.017.024.084.056-.043.067-.087-.058-.027.038-.063-.048.024-.034-.22-.148Zm-.273.08.043-.067.224.15.02-.027.062.047-.017.024.084.056-.043.067-.087-.058-.027.038-.063-.048.025-.034-.22-.148Zm.429-.539.042.067.224-.15.02.028.063-.048-.017-.024L4.8.74 4.757.672 4.67.73 4.643.693 4.58.74l.024.034-.22.148Zm-.117-.24L4.31.75 4.534.6l.02.028.062-.048L4.6.555 4.683.5 4.64.432 4.553.49 4.526.453 4.463.5l.024.034-.22.148Zm-.273-.08.043.067.224-.15.02.028.062-.048-.017-.024L4.41.42 4.367.352 4.28.41 4.253.373 4.19.42l.025.034-.22.148Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="m3.104.577.441-.234v.64h1.091l-.26.187v.245h-.411l-.442.234v-.64h-1.09l.26-.188V.577h.41Z"
                clipRule="evenodd"
              />
              <path
                fill="#29AE66"
                fillRule="evenodd"
                d="M3.965.577 3.523.343v.64h-1.09l.26.187v.245h.41l.442.234v-.64h1.091L4.376.82V.577h-.411Z"
                clipRule="evenodd"
              />
              <path
                fill="#29AE66"
                fillRule="evenodd"
                d="M2.89.742 2.96.6l.184.098.05-.075.128.091-.04.059.543.29.033-.05.129.09-.023.034.059.032-.072.141-.076-.04-.061.091-.129-.09.05-.076-.541-.29-.045.067L3.022.88l.033-.05L2.89.742Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="M4.045.703 3.963.567l-.176.11-.055-.071-.122.1.043.055-.52.327-.037-.047-.122.1.025.031-.056.036.082.136.072-.045.068.087.122-.1-.056-.071.52-.328.05.063.121-.1-.037-.047.16-.1Z"
                clipRule="evenodd"
              />
            </g>
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M9.537 1s1.165 2.76.13 3.933C8.632 6.106 6 5.88 6 5.88s3.378 1.526 4.85-.575C12.322 3.204 9.537 1 9.537 1Z"
              clipRule="evenodd"
            />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m7.422 2.624-.308.217.109-.363-.3-.23.376-.008.123-.358.123.358.376.008-.3.23.11.363-.309-.217Zm.06 1.003-.309.217.11-.364-.3-.23.375-.007.124-.359.123.36.376.007-.3.23.109.363-.308-.217Zm-1.246.294.309-.217.308.217-.109-.363.3-.23-.376-.007-.123-.36-.124.36-.375.007.3.23-.11.363Zm1.246.758-.309.217.11-.364-.3-.23.375-.007.124-.359.123.359.376.008-.3.23.109.363-.308-.217Zm.71-1.141.309-.217.308.217-.109-.364.3-.23-.376-.007-.123-.36-.124.36-.375.007.3.23-.11.364Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[4]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
