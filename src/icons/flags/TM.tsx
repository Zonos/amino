import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const TM = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.778a2.667 2.667 0 0 1-2.667 2.666H2.667A2.667 2.667 0 0 1 0 18.778v-12A2.667 2.667 0 0 1 2.667 4.11h18.666A2.667 2.667 0 0 1 24 6.778v12Z"
        fill="#29AE66"
      />
      <path d="M2.667 4.111h4.666v17.333H2.667V4.111Z" fill="#CA3745" />
      <path
        d="m2.667 6.32.536.536-.146.146.214.213.14-.14.443.442-.437.438-.182-.183-.194.193.162.161-.536.474v-.25l.294-.278-.159-.128.405-.404.234.202.219-.218-.234-.234-.164.164-.427-.428.16-.16-.328-.296v-.25Zm0 3.083.536.536-.146.146.214.213.14-.14.443.442-.437.438-.182-.182-.194.192.162.162-.536.474v-.25l.294-.279-.159-.127.405-.405.234.203.219-.219-.234-.234-.164.164-.427-.427.16-.16-.328-.298v-.249Zm0 3.145.536.537-.146.146.214.213.14-.14.443.442-.437.438-.182-.182-.194.192.162.162-.536.474v-.25l.294-.279-.159-.127.405-.406.234.204.219-.219-.234-.235-.164.164-.427-.426.16-.16-.328-.298v-.25Zm0 3.104.536.537-.146.146.214.213.14-.14.443.442-.437.438-.182-.182-.194.192.162.162-.536.474v-.25l.294-.279-.159-.127.405-.405.234.203.219-.219-.234-.234-.164.164-.427-.427.16-.16-.328-.297v-.25ZM7.333 6.32l-.536.537.146.146-.214.213-.14-.14-.443.442.437.438.182-.183.194.193-.162.161.536.474v-.25l-.294-.278.159-.128-.405-.404-.234.202-.219-.218.234-.234.164.164.427-.428-.16-.16.328-.296v-.25ZM3.041 4.57l.194-.193.182.183.437-.437-.01-.01h-.2l.016.016-.219.22-.234-.204-.405.404.159.128-.294.28v.25l.536-.475-.162-.161Zm4.157-.02-.405-.405-.234.203-.219-.22.017-.016h-.201l-.01.01.437.438.182-.183.194.194-.162.161.536.474v-.25l-.294-.279.159-.128Zm.135 4.854-.536.536.146.146-.214.213-.14-.14-.443.442.437.438.182-.182.194.192-.162.162.536.474v-.25l-.294-.279.159-.127-.405-.405-.234.203-.219-.219.234-.234.164.164.427-.427-.16-.16.328-.298v-.249Zm0 3.145-.536.537.146.146-.214.213-.14-.14-.443.442.437.438.182-.182.194.192-.162.162.536.474v-.25L7.04 14.3l.159-.127-.405-.406-.234.204-.219-.219.234-.235.164.164.427-.426-.16-.16.328-.298v-.25Zm0 3.104-.536.537.146.146-.214.213-.14-.14-.443.442.437.438.182-.182.194.192-.162.162.536.474v-.25l-.294-.279.159-.127-.405-.405-.234.203-.219-.219.234-.234.164.164.427-.427-.16-.16.328-.297v-.25Z"
        fill="#FAAE29"
      />
      <path
        d="M6.68 5.403V5.14l-.388-.236H6l-.472-.245H4.472L4 4.903h-.292l-.389.236v.264l-.36.222v.612l.36.222v.264l.389.236H4l.472.245h1.056L6 6.959h.292l.389-.236v-.264l.36-.222v-.612l-.36-.222Z"
        fill="#29AE66"
      />
      <path
        d="M3.285 5.93v-.26l.308-.19v-.226l.332-.202h.25l.402-.208h.451V5.93H3.285Z"
        fill="#FAAE29"
      />
      <path
        d="M3.258 5.93v.262l.308.19v.225l.332.2h.249l.403.21H5V5.93H3.258Zm3.484 0v-.26l-.308-.19v-.225l-.332-.201h-.249l-.403-.209H5v1.086h1.742Z"
        fill="#fff"
      />
      <path
        d="M6.742 5.93v.262l-.308.19v.224l-.332.202h-.249l-.403.208H5V5.93h1.742ZM3.285 8.486h.451v.486h-.45v-.486Zm.451-.07h.45v.486h-.45v-.486Zm.451-.173h.451v.486h-.45v-.486Zm2.09.243h.451v.486h-.45v-.486Zm-.451-.07h.45v.486h-.45v-.486Zm-.451-.173h.45v.486h-.45v-.486ZM4.639 8h.736v.6H4.64V8ZM3.285 9.1h.451v.486h-.45V9.1Zm.451.07h.45v.486h-.45V9.17Zm.451.174h.451v.486h-.45v-.486Zm2.09-.244h.451v.486h-.45V9.1Zm-.451.07h.45v.486h-.45V9.17Zm-.451.174h.45v.486h-.45v-.486Zm-.736.128h.736v.601H4.64v-.6Z"
        fill="#FAAE29"
      />
      <path
        d="M5.7 17.183H4.326l-.97.621v.878l.97.62H5.7l.971-.62v-.878l-.97-.62Z"
        fill="#fff"
      />
      <path
        d="M5.589 11.209H4.438l-.814.573v.811l.814.573h1.151l.814-.573v-.811l-.814-.573Zm.49 1.29-.624.44h-.883l-.625-.44v-.623l.625-.44h.883l.624.44v.623Zm-.35 4.64H4.298l-1.011.648v.914l1.011.646h1.43l1.011-.646v-.915l-1.01-.647Zm.706 1.48-.834.534H4.425l-.834-.533v-.754l.834-.532h1.177l.833.532v.754Zm.068-3.55v-.295h-.295v-.328H3.813v.329h-.33v.295h-.288v.43h.288v.32h.33v.347h2.396v-.347h.294v-.32h.344v-.43h-.344Zm-.452.917H3.973v-1.39H6.05v1.39Z"
        fill="#29AE66"
      />
      <path
        d="m5 14.278-1.264.75v.486l1.264.82 1.277-.792v-.514L5 14.278Z"
        fill="#29AE66"
      />
      <path
        d="M4.434 17.955 5 17.628l.565.327v.653L5 18.934l-.566-.326v-.653Z"
        fill="#CA3745"
      />
      <path
        d="m5.565 20.834-.162.11s-.139-.264-.514-.291c-.376-.028-.584.125-.903.146-.32.02-1.303-.724-.792-1.865.459.33.22.732.43.927.21.195.43.327.515.556.085.23.484.04.75.083.416.07.676.334.676.334Z"
        fill="#FAAE29"
      />
      <path
        d="m4.434 20.834.163.11s.138-.264.514-.291c.375-.028.584.125.903.146.32.02 1.303-.724.791-1.865-.458.33-.22.732-.43.927-.209.195-.43.327-.514.556-.086.23-.484.04-.75.083-.417.07-.677.334-.677.334Z"
        fill="#FAAE29"
      />
      <path
        d="M12.12 6.304c.433.376.713.924.713 1.544A2.052 2.052 0 0 1 10.781 9.9c-.39 0-.75-.115-1.06-.304.38.415.922.68 1.529.68 1.15 0 2.083-.934 2.083-2.084 0-.84-.498-1.558-1.213-1.888Zm-1.556-.282-.164.322.255.256-.356-.056-.165.322-.056-.357-.357-.057.322-.164-.057-.358.256.256.322-.164Z"
        fill="#fff"
      />
      <path
        d="m11.585 6.641-.164.322.256.256-.358-.057-.164.322-.056-.357-.358-.057.322-.164-.056-.357.256.256.322-.164Zm-1.021.443-.164.322.255.256-.356-.056-.165.322-.056-.358-.357-.056.322-.164-.057-.358.256.256.322-.164Zm-1.063.54-.164.322.256.256-.357-.057-.165.323-.056-.358-.357-.056.322-.164-.056-.358.255.256.322-.164Zm1.063.601-.164.322.255.256-.356-.057-.165.322-.056-.357-.357-.057.322-.164-.057-.357.256.256.322-.164Z"
        fill="#fff"
      />
      <path
        d="M4.708 14.625h.61v.41h-.61v-.41Zm0 .934h.61v.41h-.61v-.41Z"
        fill="#CA3745"
      />
      <path
        d="M3.736 15.1h.835v.41h-.835v-.41Zm1.723 0h.818v.41H5.46v-.41Z"
        fill="#FAAE29"
      />
    </FlagIconBase>
  ),
);
