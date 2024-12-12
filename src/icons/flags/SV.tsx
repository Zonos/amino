import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const SV = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.111a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18.11v-12a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6.111v12Z"
        fill="#0F47AF"
      />
      <path d="M0 8.778h24v6.666H0V8.778Z" fill="#EEE" />
      <path
        d="M11.641 14.31c.164-.51-.406-.605-.406-.605s.042.292-.302.302c.115.23.011.417-.135.428.24.217.74.197.843-.126Zm-.846-.31c.315-.385-.148-.66-.148-.66s-.063.266-.364.159c.022.236-.133.364-.263.323.134.273.575.424.775.179Zm-.597-.53c.376-.2.101-.57.101-.57s-.138.188-.34.006c-.061.194-.224.244-.314.17.016.258.314.522.553.394Zm-.23-.672c.395-.08.247-.49.247-.49s-.177.134-.312-.087c-.108.16-.27.16-.331.07-.055.238.144.558.395.507Zm-.094-.577c.363-.002.303-.39.303-.39s-.179.088-.26-.13c-.123.121-.266.094-.304.003-.089.201.03.518.261.517Zm.086-.55c.283.098.328-.264.328-.264s-.16.03-.171-.187c-.125.075-.23.012-.238-.08-.118.154-.1.47.081.531Zm.218-.455c.141.083.3-.192.3-.192s-.123-.044-.091-.246c-.11.05-.184.02-.174-.067-.119.125-.168.428-.035.505Zm2.077 3.093c-.164-.51.406-.604.406-.604s-.041.292.302.302c-.114.23-.01.417.136.428-.24.217-.74.197-.844-.126Zm.846-.308c-.315-.386.148-.662.148-.662s.064.267.364.16c-.021.236.133.364.264.323-.135.273-.575.424-.776.179Zm.598-.53c-.376-.202-.101-.572-.101-.572s.138.19.34.007c.061.194.225.244.314.17-.017.258-.315.522-.553.394Zm.23-.673c-.396-.08-.246-.49-.246-.49s.176.134.311-.087c.108.16.27.16.33.07.055.238-.143.558-.395.507Zm.093-.577c-.363-.002-.303-.39-.303-.39s.18.088.26-.13c.122.121.266.094.304.003.09.201-.03.518-.261.517Zm-.086-.55c-.283.098-.328-.264-.328-.264s.161.03.172-.187c.125.075.23.012.237-.08.118.154.1.47-.081.531Zm-.217-.455c-.142.083-.3-.192-.3-.192s.123-.044.092-.246c.108.05.183.02.173-.067.118.125.167.428.035.505Z"
        fill="#1F601A"
      />
      <path
        d="M11.937 14.579a.267.267 0 1 0 0-.534.267.267 0 0 0 0 .534Zm-.057-2.619-1.239-1.328s-.208 1.531.396 1.937c.604.407.844-.609.844-.609Z"
        fill="#06209F"
      />
      <path
        d="m11.236 11.27-.276-.296s-.142 1.189.462 1.596c-.291-.594-.186-1.3-.186-1.3Z"
        fill="#fff"
      />
      <path
        d="m11.88 12.512-1.699-.963s-.083.99.215 1.469c.297.48 1.39.51 1.541.041.152-.469-.056-.547-.056-.547Z"
        fill="#06209F"
      />
      <path
        d="m10.796 11.897-.318-.18s-.19 1.988 1.318 1.531c-.999-.046-1-1.351-1-1.351Z"
        fill="#fff"
      />
      <path
        d="m11.993 11.96 1.239-1.328s.208 1.531-.396 1.937c-.603.407-.843-.609-.843-.609Z"
        fill="#06209F"
      />
      <path
        d="m12.637 11.27.276-.296s.142 1.189-.462 1.596c.292-.594.186-1.3.186-1.3Z"
        fill="#fff"
      />
      <path
        d="m11.993 12.512 1.699-.963s.083.99-.214 1.469c-.297.48-1.39.51-1.541.041-.152-.469.056-.547.056-.547Z"
        fill="#06209F"
      />
      <path
        d="m13.077 11.897.32-.18s.188 1.988-1.32 1.531c.999-.046 1-1.351 1-1.351Z"
        fill="#fff"
      />
      <path d="m11.88 10.31-1.649 2.842h3.3l-1.65-2.843Z" fill="#FFCC01" />
      <path d="m10.463 13.02 1.418-2.445 1.418 2.444h-2.836Z" fill="#fff" />
      <path d="m10.869 12.32-.406.7h2.836l-.406-.7h-2.024Z" fill="#017E93" />
      <path
        d="M10.735 12.665s.459-.648.636-.648.26.203.26.203.07-.109.165-.109.141.11.141.11.069-.107.11-.087c.042.02.178.186.178.186s.041-.072.135-.099c.094-.027.156.099.156.099s.092-.198.113-.099c.022.099.362.445.362.445h-2.256Z"
        fill="#FFCC01"
      />
      <path
        d="M11.922 11.728a.126.126 0 1 0 0-.252.126.126 0 0 0 0 .252Z"
        fill="#E60000"
      />
      <path
        d="M9.335 10.938c-.17.336-.276.706-.306 1.1l.332.01c.029-.348.123-.672.274-.968l-.3-.142Zm3.169-1.239a2.6 2.6 0 0 1 1.12.55l.23-.24a2.935 2.935 0 0 0-1.277-.634l-.073.324Zm1.625 1.086c.289.422.46.932.46 1.483 0 .1-.018.195-.03.292l.327.06c.015-.117.036-.232.036-.352a2.94 2.94 0 0 0-.515-1.666l-.278.183Zm-3.314 3.832a2.61 2.61 0 0 1-1.447-2.065l-.33.037a2.945 2.945 0 0 0 1.64 2.332l.137-.304Zm-.89-3.983a2.611 2.611 0 0 1 2.04-.992c.017 0 .033.005.05.006l.021-.332c-.024 0-.047-.007-.071-.007a2.94 2.94 0 0 0-2.313 1.134l.273.19Zm4.533 2.414a2.616 2.616 0 0 1-1.379 1.588l.136.304a2.952 2.952 0 0 0 1.558-1.786l-.315-.106Z"
        fill="#FFCC01"
      />
    </FlagIconBase>
  ),
);
