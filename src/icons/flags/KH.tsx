import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const KH = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.222a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18.222v-12a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6.222v12Z"
        fill="#032EA1"
      />
      <path d="M0 7.27h24v9.904H0V7.27Z" fill="#E01E24" />
      <path
        d="M18.014 15.487v-.601h-.361v-.601h-.331v-.39h-.15v-.301h-.293l-.158-.228V12.3l.18-.18v-.992l-.15.135v-.316h-.121v.15h-.24v-.481l-.285.256.09-.324-.166-.744h-.09s-.074-.316-.225-.316c0 0 .06-.194-.06-.194-.121 0-.091.15-.091.15s-.21.09-.21.315l-.12-.015-.181.872.127.256-.293-.256v.662h-1.593v-.602l-.09.09v.21h-.21v-.21l.15-.135v-.285l-.121.127-.18-.248v-.21l-.105.104-.031-.18.15-.24-.022-.195-.172.21v-.18l.075-.166-.346-.872-.082-.242-.128-.014v-.121s-.09-.21-.21-.21-.21.21-.21.21v.12l-.128.015-.083.242-.345.872.075.166v.18l-.173-.21-.023.195.15.24-.029.18-.105-.105v.21l-.18.249-.12-.127v.285l.15.135v.21h-.21v-.21l-.09-.09v.602H9.052v-.662l-.293.256.127-.256-.18-.872-.121.015c0-.225-.21-.315-.21-.315s.03-.15-.09-.15-.06.194-.06.194c-.151 0-.226.316-.226.316h-.09l-.165.744.09.324-.286-.256v.48h-.24v-.15h-.121v.316l-.15-.135v.992l.18.18v1.067l-.16.227h-.231v.3h-.21v.391h-.301v.6h-.33v.602h-.331l-.03.66h12.69l.03-.66h-.331Z"
        fill="#fff"
      />
      <path
        d="M7.73 12.135v1.156h-.54l-.13.252h.672v2.605h.228v-4.013h-.23Zm9.155 1.409-.119-.253h-.49v-1.156h-.226v4.013h.225v-2.604h.61Zm-5.482-1.41v1.157H8.942v-1.163h-.22v4.014h.22v-2.598h2.461v2.604h.236v-4.013h-.236Zm3.604 0v1.157h-2.399v-1.156h-.233v4.013h.233v-2.604h2.4v2.604h.284v-4.013h-.285Z"
        fill="#DB7F86"
      />
    </FlagIconBase>
  ),
);
