import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BO = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 24"
      width={width}
    >
      <path
        d="M24 18a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18V6a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6v12Z"
        fill="#007934"
      />
      <path d="M0 8.667h24v6.666H0V8.667Z" fill="#FFE000" />
      <path
        d="M21.333 3.333H2.667A2.667 2.667 0 0 0 0 6v2.667h24V6a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#D52B1E"
      />
      <path
        d="M8.596 10.89c.027.041.254.367.254.367h.326l-.133-.184-.447-.183Zm.489-.325.254.366h.326l-.134-.183-.446-.183Zm.454-.41.124.429.308.105-.067-.216-.365-.318Z"
        fill="#fff"
      />
      <path
        d="M9.302 14.332a.053.053 0 0 1-.073-.024.054.054 0 0 1 .024-.073l1.644-.84a.054.054 0 0 1 .073.023.055.055 0 0 1-.023.073l-1.645.841Zm.33.304a.055.055 0 0 1-.076-.016.055.055 0 0 1 .015-.075l1.54-1.018a.054.054 0 1 1 .06.089l-1.54 1.02Z"
        fill="#A05A2D"
      />
      <path
        d="M9.965 14.918a.055.055 0 0 1-.077.005.055.055 0 0 1-.005-.077l1.221-1.386a.055.055 0 0 1 .077-.004c.022.02.024.053.004.076l-1.22 1.386Z"
        fill="#A05A2D"
      />
      <path
        d="m11.565 13.81-.38.787-.068-.069-.148.205-.402-.219.5-.976.498.272Z"
        fill="#A05A2D"
      />
      <path
        d="m11.729 15.017.271-1.29-.028-1.126-1.954-1.867-.136.428-.271-.217-.082.448s-.34-.244-.353-.204c-.013.04-.095 1.032-.123 1.589-.026.556-.049 1.384.557 1.493 1.059.19 1.846-.597 1.846-.597s.258.245.271.285c.014.04-.095.516-.136.706-.039.189.138.352.138.352Z"
        fill="#D52B1E"
      />
      <path
        d="m10.37 11.096-.108.31-.177-.095s-.45 2.267.284 2.444c.734.176.816-.123.816-.123l-.353-.475-.265.122s-.128-.35-.128-.826c0-.425.068-.844.068-.844l.134.095.028-.312-.299-.296Z"
        fill="#FFE000"
      />
      <path
        d="m11.117 11.773-.448-.38-.028.311-.175-.122s-.097.326-.096.747c.001.42.055.828.055.828s.312.108.475 0c.163-.108.217-1.384.217-1.384Z"
        fill="#007934"
      />
      <path
        d="M10.97 13.049c-.353.15-1.075.423-.885.76.191.34.747.204 1.1-.177.354-.38-.216-.583-.216-.583Z"
        fill="#E8A30F"
      />
      <path
        d="M15.403 10.89c-.026.041-.254.367-.254.367h-.326l.133-.184.447-.183Zm-.488-.325-.254.366h-.326l.133-.183.447-.183Zm-.454-.41-.124.429-.308.105.067-.216.365-.318Z"
        fill="#fff"
      />
      <path
        d="M14.698 14.332c.027.014.06.003.073-.024a.053.053 0 0 0-.024-.073l-1.644-.84a.054.054 0 0 0-.073.023.054.054 0 0 0 .024.073l1.644.841Zm-.33.304c.026.016.06.009.076-.016a.054.054 0 0 0-.015-.075l-1.54-1.018a.053.053 0 0 0-.074.014.054.054 0 0 0 .014.075l1.54 1.02Z"
        fill="#A05A2D"
      />
      <path
        d="M14.036 14.918c.02.022.054.025.076.005a.055.055 0 0 0 .005-.077l-1.22-1.386a.054.054 0 0 0-.076-.004.054.054 0 0 0-.006.076l1.221 1.386Z"
        fill="#A05A2D"
      />
      <path
        d="m12.435 13.81.38.787.068-.069.148.205.402-.219-.5-.976-.498.272Z"
        fill="#A05A2D"
      />
      <path
        d="M12.271 15.017 12 13.727l.028-1.126 1.954-1.867.137.428.271-.217.081.448s.339-.244.352-.204c.014.04.096 1.032.123 1.589.027.556.05 1.384-.556 1.493-1.06.19-1.847-.597-1.847-.597s-.258.245-.271.285c-.013.04.095.516.136.706.04.189-.137.352-.137.352Z"
        fill="#D52B1E"
      />
      <path
        d="m13.63 11.096.107.31.177-.095s.45 2.267-.284 2.444c-.734.176-.816-.123-.816-.123l.353-.475.265.122s.128-.35.128-.826c0-.425-.068-.844-.068-.844l-.135.095-.028-.312.301-.296Z"
        fill="#FFE000"
      />
      <path
        d="m12.883 11.773.448-.38.028.311.175-.122s.097.326.096.747c-.001.42-.055.828-.055.828s-.313.108-.476 0c-.163-.108-.216-1.384-.216-1.384Z"
        fill="#007934"
      />
      <path
        d="M13.03 13.049c.353.15 1.074.423.884.76-.19.34-.747.204-1.1-.177-.353-.38.217-.583.217-.583Z"
        fill="#E8A30F"
      />
      <path
        d="M10.887 10.55c.114.135.109.326-.012.428-.12.102-.309.075-.423-.06-.113-.134-.109-.325.011-.427.12-.102.31-.076.424.059Z"
        fill="#D52B1E"
      />
      <path
        d="M13.167 10.55c-.114.135-.108.326.012.428.121.102.31.075.424-.06.114-.134.109-.325-.012-.427-.12-.102-.31-.076-.424.059Z"
        fill="#E7E7E7"
      />
      <path
        d="M12.733 8.99c-.095.067.177.501.123.977-.055.475-.856.855-.856.855s-.801-.38-.855-.855c-.055-.475.217-.91.122-.978-.096-.068-.598.367-.624.828-.028.462.44 1.157.746 1.29.307.134.612.204.612.204s.304-.071.611-.204.775-.828.747-1.29c-.028-.461-.531-.896-.626-.828Z"
        fill="#007934"
      />
      <path
        d="M12 10.809s.081-.286.611-.448c.53-.164 1.032-.286 1.222-.299.191-.014-.753-.38-.977-.407-.224-.027-.502.027-.543.19-.041.163-.109.11-.312.136-.204.027-.34-.163-.435-.298-.095-.136-.455-.068-.631-.054-.177.013-.849.434-.849.434s1.168.19 1.412.312.013.556-.054.68c-.069.12.403-.039.556-.246Z"
        fill="#fff"
      />
      <path
        d="M12 10.809s.081-.286.611-.448c.53-.164 1.032-.286 1.222-.299.191-.014-.692-.285-.916-.313-.224-.026-.4-.026-.441.136-.04.163-.271.068-.475.096-.204.026-.435-.041-.53-.177-.095-.136-.258-.081-.434-.068-.176.013-.95.326-.95.326s1.168.19 1.412.312c.244.123.013.557-.054.68-.07.121.402-.038.555-.245Z"
        fill="#000"
      />
      <path
        d="M10.547 12.437c0-.877.651-1.588 1.453-1.588.803 0 1.453.712 1.453 1.588 0 .878-.65 1.589-1.453 1.589-.802 0-1.453-.71-1.453-1.589Z"
        fill="#00A6DE"
      />
      <path
        d="M10.934 12.437c0-.689.477-1.248 1.066-1.248.589 0 1.066.56 1.066 1.248 0 .691-.477 1.25-1.066 1.25-.589 0-1.066-.559-1.066-1.25Z"
        fill="#E8A30F"
      />
      <path
        d="M11.539 11.895a.461.461 0 1 1 .923 0 .461.461 0 0 1-.923 0Z"
        fill="#D52B1E"
      />
      <path
        d="M12 13.687c.566 0 1.03-.517 1.064-1.17-.347-.13-.921-.622-1.064-.622-.15 0-.34.163-.583.38-.126.111-.32.201-.479.263.043.643.502 1.149 1.062 1.149Z"
        fill="#007934"
      />
      <path
        d="M12.136 10.089c0 .068-.14.122-.312.122-.173 0-.313-.054-.313-.122s.14-.122.313-.122c.172 0 .312.055.312.122Z"
        fill="#E8A30F"
      />
      <path
        d="M11.457 13.049h.326l.094-.272.123.149-.136.394h-.299l-.108-.271Z"
        fill="#fff"
      />
      <path
        d="M12.285 13.28c0 .127-.064.23-.142.23-.079 0-.143-.103-.143-.23 0-.128.064-.231.143-.231.078 0 .142.103.142.23Zm.204.23a.027.027 0 0 1-.028.028.027.027 0 0 1-.027-.027v-.706c0-.015.012-.028.027-.028s.028.013.028.028v.706Z"
        fill="#B37D0A"
      />
      <path
        d="M12.692 12.736c0 .12-.106.217-.237.217-.132 0-.238-.097-.238-.217s.107-.217.238-.217.237.097.237.217Z"
        fill="#32B266"
      />
    </FlagIconBase>
  ),
);
