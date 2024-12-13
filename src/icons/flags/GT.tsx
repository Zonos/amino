import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GT = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M21.333 4.111H16v17.333h5.333A2.667 2.667 0 0 0 24 18.778v-12a2.667 2.667 0 0 0-2.667-2.667Zm-18.666 0A2.667 2.667 0 0 0 0 6.778v12a2.667 2.667 0 0 0 2.667 2.666H8V4.111H2.667Z"
        fill="#4997D0"
      />
      <path d="M8 4.111h8v17.333H8V4.111Z" fill="#EEE" />
      <path
        d="M15.105 13.268c.076-.16.065-.264-.022-.172-.077.08-.189.108-.328.206l.011-.039c.122-.23.386-.12.542-.487.027-.068.167-.14-.023-.13a.597.597 0 0 0-.432.262c.095-.257.323-.126.416-.746.017-.114.03-.346-.045-.156-.03.076-.104.152-.181.243a.662.662 0 0 0-.01-.324.589.589 0 0 0 .103-.238c.02-.151-.015-.285-.073-.126a.34.34 0 0 1-.098.133c-.014-.053-.028-.072-.07 0a.74.74 0 0 0-.08.276l-.001.007c-.01-.056-.023-.111-.036-.166.03-.208.351-.202.24-.874-.026-.163-.038-.21-.095-.008-.054.187-.219.203-.227.577l-.014-.043c-.037-.36.21-.66.023-.968-.098-.164-.151-.179-.14-.045.012.155-.081.32-.064.546l-.006-.015c-.04-.278.06-.362-.052-.543-.059-.092-.146-.213-.124-.06.005.03.008.066.011.103-.036-.157-.172-.254-.344-.31-.163-.052-.113.025-.053.088.085.091.063.203.169.341-.115-.055-.214-.06-.28-.143-.13-.16-.063.045-.031.137a.56.56 0 0 0 .292.341c-.012.013-.007.06.028.157.042.12.095.21.152.282a.345.345 0 0 1-.11-.099c-.137-.202-.19-.225-.164.016.023.209.112.32.219.393a.304.304 0 0 0 .06.162c.075.11.155.156.23.184.036.086.056.165.075.247-.004-.003-.008-.01-.013-.013-.205-.144-.153-.06-.137.065.077.594.358.39.301.773l-.025.104c.01-.22-.092-.346-.176-.443-.116-.134-.156-.095-.099.153.013.058.027.13.038.206l-.003-.008c-.116-.234-.15-.167-.139.011.013.171-.131.24-.038.568a.54.54 0 0 1-.051.422l-.016.021c.205-.379-.043-.492-.02-.607.027-.13-.007-.153-.08.008a.612.612 0 0 0-.04.427c-.016.008-.027.013-.047.026-.066.045-.12.088-.164.13.006-.036.016-.07.02-.107.016-.17-.03-.253-.103-.07-.092.227-.256.222-.36.561-.082.274-.142.33-.27.384l-.018.008a.845.845 0 0 0 .327-.584c.03-.258-.034-.22-.121-.065-.084.15-.242.128-.343.455a.483.483 0 0 1-.3.328c.263-.188.379-.497.348-.682-.014-.092-.057-.149-.099.003-.049.187-.186.141-.296.495-.057.18-.106.217-.342.324l.034-.007a2.694 2.694 0 0 0-.358.173 2.467 2.467 0 0 0-.344-.166l.019.004c-.233-.106-.283-.142-.339-.32-.108-.35-.244-.305-.293-.489-.04-.151-.083-.095-.097-.005-.031.183.083.488.34.673a.481.481 0 0 1-.294-.322c-.098-.323-.255-.301-.338-.45-.086-.154-.15-.19-.119.065a.83.83 0 0 0 .322.576l-.04-.017c-.11-.052-.167-.115-.245-.37-.101-.335-.264-.33-.354-.553-.074-.18-.118-.1-.101.068.003.036.013.071.02.106a1.273 1.273 0 0 0-.163-.128c-.02-.013-.031-.018-.046-.026a.609.609 0 0 0-.041-.423c-.072-.157-.105-.135-.08-.008.024.115-.223.227-.015.605l-.016-.02c-.097-.14-.082-.326-.055-.423.093-.324-.05-.391-.037-.56.012-.177-.023-.243-.137-.012l-.003.01c.011-.077.024-.148.038-.205.056-.246.015-.284-.098-.15-.083.096-.184.22-.174.437a2.387 2.387 0 0 1-.026-.104c-.056-.377.222-.177.298-.764.016-.125.068-.207-.136-.064-.005.003-.008.01-.013.013.02-.082.04-.16.077-.245a.462.462 0 0 0 .227-.182.301.301 0 0 0 .058-.16.501.501 0 0 0 .215-.39c.027-.237-.026-.215-.16-.015a.345.345 0 0 1-.109.097.967.967 0 0 0 .15-.277c.033-.096.039-.143.027-.156a.556.556 0 0 0 .288-.338c.032-.092.098-.294-.03-.136-.066.082-.164.088-.277.142.105-.136.083-.247.167-.338.059-.062.109-.138-.052-.086-.171.054-.305.15-.341.306a2.13 2.13 0 0 1 .01-.103c.023-.15-.064-.03-.12.06-.112.179-.015.262-.051.535l-.008.017c.018-.224-.075-.387-.063-.54.01-.132-.04-.117-.138.045-.183.303.058.6.024.954l-.013.042c-.01-.368-.174-.382-.225-.568-.057-.2-.068-.152-.095.008-.109.664.208.658.238.864-.013.055-.026.11-.036.165l-.002-.01c-.004-.035-.014-.065-.022-.097l-.003-.008c-.015-.058-.028-.118-.054-.164-.04-.07-.054-.052-.069 0a.335.335 0 0 1-.096-.132c-.056-.158-.093-.025-.072.125a.588.588 0 0 0 .102.235.66.66 0 0 0-.01.322c-.076-.09-.148-.166-.178-.24-.076-.189-.062.04-.046.154.092.614.318.482.412.738a.588.588 0 0 0-.427-.26c-.188-.012-.05.061-.023.128.154.364.414.254.535.482l.011.04c-.138-.099-.247-.127-.323-.206-.087-.09-.097.012-.022.171a.6.6 0 0 1-.223-.002c-.068-.023-.068.08.121.159.086.036.222.092.353.156.096.072.193.122.276.198-.259-.187-.454-.097-.6-.182-.18-.104-.082.06-.032.11.509.51.589.124.871.395a.495.495 0 0 0-.145-.042c-.226-.026-.306-.06-.188.083.14.171.256.254.357.3a.924.924 0 0 0-.19.014c-.146.03-.096.057.002.086.12.036.196.12.33.175h-.002c-.219.068-.256.093-.09.175.283.142.481.146.639.12a.692.692 0 0 0-.204.101c-.12.089-.087.122.016.105.194-.03.314.027.474.027-.097.071-.178.152-.324.195-.098.03-.13.084.03.1.611.051.766-.332 1.058-.328.15.046.29.101.422.19a.728.728 0 0 0-.106.09c.008.07.165.035.181.073.02-.021.041-.037.062-.055.02.018.041.034.062.055.015-.038.146-.026.153-.094-.018-.023-.053-.046-.081-.07a1.59 1.59 0 0 1 .43-.193c.296-.004.453.383 1.071.33.162-.014.13-.07.032-.1-.148-.043-.231-.125-.33-.197.162 0 .285-.058.481-.027.104.016.137-.017.015-.107a.697.697 0 0 0-.206-.102c.16.026.36.023.647-.121.168-.083.13-.109-.09-.178h-.001c.134-.055.211-.14.332-.176.1-.03.15-.057.002-.088a.898.898 0 0 0-.192-.015c.102-.046.22-.13.363-.303.117-.144.037-.11-.191-.084a.48.48 0 0 0-.15.044c.288-.277.367.116.884-.402.05-.048.149-.216-.034-.109-.147.086-.346-.007-.612.189.086-.08.187-.13.287-.207.131-.065.268-.12.355-.157.192-.08.192-.183.122-.16a.545.545 0 0 1-.224.004Zm-4.626 1.57.07.043a2.165 2.165 0 0 0-.257-.095.41.41 0 0 1 .193.058l-.006-.007Zm.82.215-.036-.01.025.003.01.007Zm-1.412-.96.014.025c.057.09.066.181.122.29l-.078-.072a.264.264 0 0 1-.058-.244Zm-.11-2.996c-.075.1-.198.115-.313.21.066-.115.152-.223.26-.251.042-.012.083-.026.123-.042a.8.8 0 0 0-.07.083Zm-.114 3.027.011.012-.008-.005-.003-.007Zm.758.908c.114-.024.21-.054.303-.048l.04.02a1.152 1.152 0 0 0-.343.028Zm3.958-4.168c-.001 0 0 0 0 0-.001 0 0 0 0 0Zm-.169.183a.873.873 0 0 0-.072-.085c.04.017.081.031.124.043.11.03.197.138.263.253-.116-.095-.24-.11-.315-.21Zm-.52 3.73a2.213 2.213 0 0 0-.258.095l.065-.042-.003.004a.43.43 0 0 1 .197-.058Zm.394-.676.015-.026a.266.266 0 0 1-.059.246c-.026.025-.053.05-.08.073.057-.11.066-.202.124-.293Zm-1.403.94.028-.005-.04.012a.063.063 0 0 0 .012-.008Zm.532-.045.042-.02c.097-.005.196.028.317.051a1.21 1.21 0 0 0-.359-.03Zm1.1-.876.01-.012-.002.007-.008.005Z"
        fill="#437E24"
      />
      <path
        d="M11.063 13.06s-.508.456-.571.518c-.062.062-.125.333-.125.333l.166.103.738-.758-.208-.197Z"
        fill="#B1B6BA"
      />
      <path
        d="m10.357 13.901.156.124s-.135.135-.156.27c-.02.135-.384.55-.457.654-.073.105-.167.083-.208 0-.04-.083-.134-.145-.145-.207-.011-.062.229-.28.343-.405.113-.125.238-.177.3-.249.063-.074.167-.187.167-.187Zm.738-.728-.315.353.084.084.303-.344-.072-.093Z"
        fill="#6C301E"
      />
      <path
        d="m9.64 10.098 1.008 1.05.25-.126-.079-.112-.171.04-1.008-.852Z"
        fill="#B1B6BA"
      />
      <path
        d="m10.897 14.46.125.21.113-.105s.092.166 0 .197c-.092.032-.161 0-.161 0l-.316.258s-.125-.075-.229 0c0 0 .022-.153.084-.153.062 0 .29-.301.29-.301s-.121-.034-.096-.105c.024-.072.19 0 .19 0Z"
        fill="#FAB81B"
      />
      <path
        d="M10.897 14.544s1.849-1.838 2.618-1.908c0 0-.582.355-.945.645-.364.291-1.547 1.389-1.547 1.389l-.126-.126Z"
        fill="#B1B6BA"
      />
      <path
        d="M12.995 13.06s.51.456.57.518c.063.062.126.333.126.333l-.166.103-.738-.758.208-.197Z"
        fill="#B1B6BA"
      />
      <path
        d="m13.701 13.901-.156.124s.136.135.156.27c.021.135.386.55.458.654.072.105.166.083.208 0 .041-.083.134-.145.144-.207.012-.062-.229-.28-.342-.405-.114-.125-.238-.177-.301-.249-.063-.074-.167-.187-.167-.187Zm-.738-.728.315.353-.083.084-.304-.344.072-.093Z"
        fill="#6C301E"
      />
      <path
        d="m12.523 11.62-.117.333 1.003-1.003-.154-.028-.732.698Z"
        fill="#B1B6BA"
      />
      <path
        d="m14.417 10.098-1.008 1.05-.248-.126.248-.072 1.008-.852Z"
        fill="#B1B6BA"
      />
      <path
        d="m13.16 14.46-.123.21-.113-.105s-.093.166 0 .197c.091.032.161 0 .161 0l.316.258s.125-.075.228 0c0 0-.021-.153-.084-.153-.062 0-.289-.301-.289-.301s.12-.034.095-.105c-.024-.072-.19 0-.19 0Z"
        fill="#FAB81B"
      />
      <path
        d="M13.16 14.544s-1.848-1.838-2.617-1.908c0 0 .583.355.946.645.364.291 1.548 1.389 1.548 1.389l.124-.126Z"
        fill="#B1B6BA"
      />
      <path
        d="M10.911 10.887c.302-.017 1.174.01 1.496 0 .322-.01.249.156.27.25.02.093-.176.197-.176.197s.207.125.478.853c.269.727.206 1.058-.156 1.08-.363.02-1.298.084-1.611.084-.311 0-.363-.115-.363-.281 0-.166.249-.416.498-.274 0 0 0-.11-.145-.526-.145-.415-.457-.862-.488-1.06-.032-.198.041-.314.197-.323Z"
        fill="#F9F0AA"
      />
      <path
        d="M11.825 10.17c-.124-.114.049-.239.176-.228.125.01.188.082.053.229 0 0 .364.197.654.467.29.27.888.998.945 1.787.073 1.018-.488 1.547-.696 1.91a48.892 48.892 0 0 0-.674 1.278s-.011-.467.602-1.32c0 0-.477.853-1.215 1.009 0 0 .923-.65 1.183-1.17.259-.52.638-1.3.576-1.84-.062-.54-.16-1-.876-1.354 0 0-.454-.025-.654-.186-.323-.26-.074-.582-.074-.582Z"
        fill="#437E24"
      />
      <path
        d="M12.5 11.335c0 .03.135.2.117.2H11.03c-.017 0-.107-.11-.107-.142l-.121-.142c.095.037.21 0 .227 0h1.587c.019 0-.115.052-.115.084Zm-1.152 1.838c0 .032-.067.134-.049.134h1.588c.016 0 .163-.11.163-.141l.064-.141c-.095.036-.21 0-.227 0h-1.588c-.017 0 .049.116.049.148Z"
        fill="#E2CF81"
      />
    </FlagIconBase>
  ),
);
