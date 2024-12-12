import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const DM = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.444a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18.444v-12a2.667 2.667 0 0 1 2.667-2.666h18.666A2.667 2.667 0 0 1 24 6.444v12Z"
        fill="#006B3F"
      />
      <path
        d="M24 10.444H14V3.778h-4v6.666H0v4h10v6.667h4v-6.667h10v-4Z"
        fill="#EEE"
      />
      <path d="M10 3.778h1.333V21.11H10V3.778Z" fill="#FCD116" />
      <path d="M0 10.444h24v1.334H0v-1.334Z" fill="#FCD116" />
      <path d="M11.333 3.778h1.334V21.11h-1.334V3.778Z" fill="#141414" />
      <path d="M0 11.778h24v1.333H0v-1.333Z" fill="#141414" />
      <path d="M12 16.444a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#DD2E44" />
      <path
        d="m12 8.871-.113.35h-.37l.301.216-.115.35L12 9.57l.297.216-.114-.352.299-.213h-.368L12 8.871Zm-2.053.667.114.348-.299.218h.37l.112.35.113-.35h.368l-.299-.218.117-.348-.298.216-.298-.216Zm-1.27 1.747.298.215-.114.351.299-.218.297.217-.115-.35.298-.215h-.37l-.11-.35-.114.35h-.369Zm0 2.16.367-.002.114.351.114-.352.368.001-.298-.215.115-.35-.3.217-.295-.218.114.35-.299.217Zm1.27 1.745.296-.216.298.218-.114-.353.298-.215-.368.001-.113-.35-.115.351-.366-.002.298.216-.114.35Zm2.053.667.113-.349h.369l-.3-.217.115-.35-.297.218-.297-.217.114.351-.299.214h.368l.114.35Zm2.053-.667-.114-.348.298-.218-.37.001-.112-.35-.112.35h-.368l.298.217-.116.348.298-.217.298.217Zm1.269-1.747-.297-.215.114-.35-.3.217-.296-.217.114.35-.297.215h.37l.11.35.114-.35h.368Zm0-2.159-.367.001-.114-.351-.114.352-.368-.002.298.216-.114.35.3-.217.294.218-.114-.35.298-.217Zm-1.27-1.746-.295.216-.299-.217.114.352-.298.215h.368l.113.35.115-.353.366.003-.297-.216.114-.35Z"
        fill="#006000"
      />
      <path
        d="M13.063 14.323a8.744 8.744 0 0 1-.046-.708c-.004-.184-.338-.43-.558-.429-.151-.308-.592-.68-.888-.384-.028.206.023.607.12.76l.452.103a.314.314 0 0 0 .114-.153c.013-.004.021-.016.033-.022.084.325.251.832.299.953.051.131.126.4.292.447.074.039.177.01.131-.332.05-.012.061-.144.05-.235Z"
        fill="#00693F"
      />
      <path
        d="M12.573 10.951a.298.298 0 0 0 .103.18.177.177 0 0 0-.06.085c-.189.163-.626 1.294-.634 1.543-.03.133-.09.343-.142.433-.291-.26-.591-.75-.541-.97a.371.371 0 0 1-.072-.014 1.5 1.5 0 0 0 .02-.18c-.017 0-.048 0-.074-.008a1.84 1.84 0 0 0 .017-.195.23.23 0 0 1-.089-.066c.02-.051.072-.151.098-.211-.043-.006-.074-.049-.089-.074a.374.374 0 0 0 .105-.129.307.307 0 0 1-.074-.08c.04-.037.158-.165.209-.237a.254.254 0 0 1-.07-.008c.043-.017.093-.08.15-.134.098.085.285.07.375.018.163.094.339.108.566.034.044.013.16.03.202.013Z"
        fill="#7D76B6"
      />
      <path
        d="M13.225 14.063c.034-1.209-.172-2.315-.488-2.717-.318-.404-.9-.314-1.063.034-.07.146-.079.494-.01.643.121.257.584 1.071.901 1.38.317.308.54.514.66.66Z"
        fill="#00693F"
      />
      <path
        d="M12.748 13.775a.564.564 0 0 1-.286-.052c-.086-.04-.16-.08-.251-.08-.092 0-.589-.035-.669-.063a1.512 1.512 0 0 0-.395-.063c-.091.005-.234.07-.292.07-.057 0-.085.045-.085.09 0 .046.011.132.08.178.12-.005.291-.017.314-.04.166.045.389.093.526.097.137.006.383.017.475.012.091-.006.108-.035.228.006.12.04.28.126.354.148.074.024.12-.05.137-.13.019-.082-.039-.18-.136-.173Z"
        fill="#FFD420"
      />
      <path
        d="M11.52 10.446c-.004 0-.008.004-.011.004-.026-.116-.146-.197-.214-.194-.209.056-.197.442-.008.575a.263.263 0 0 1 .052-.174c.015.047.051.09.145.102.1-.035.065-.254.035-.313Z"
        fill="#fff"
      />
      <path
        d="M11.43 10.886c.099.085.286.07.376.018.163.094.339.108.566.034.043.014.158.03.201.014a.453.453 0 0 1 .078-.06.468.468 0 0 1-.129-.197s.043-.052.06-.077a1.162 1.162 0 0 0-.171-.138c.026-.025.051-.102.051-.102a.556.556 0 0 1-.206-.12l.009-.052c-.14-.008-.134-.18-.437-.231-.206-.035-.515.051-.532.283.115.11.29.26.189.502a.395.395 0 0 1-.103.095c.017.019.029.021.049.03Z"
        fill="#7D76B6"
      />
      <path
        d="M12.228 13.924c-.057-.007-.114-.07-.114-.12 0-.052.005-.156.103-.167-.032-.055-.078-.07-.122-.063-.041-.05-.107-.06-.17-.046.002-.003.003-.009.006-.011-.054-.043-.115-.034-.168-.007-.099-.058-.249.014-.272.196-.023.177.068.303.2.296V14c.059.03.144.003.166-.032l-.001-.012c.055.036.11.036.158.002.017.016.034.033.06.039.075.018.131-.045.154-.073Z"
        fill="#fff"
      />
      <path
        d="M11.708 10.17c-.154 0-.15.232 0 .232s.154-.231 0-.231Z"
        fill="#FFD420"
      />
      <path
        d="M11.708 10.258c-.039 0-.037.057 0 .057s.039-.057 0-.057Z"
        fill="#000"
      />
    </FlagIconBase>
  ),
);
