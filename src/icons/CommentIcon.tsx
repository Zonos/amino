import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CommentIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M8 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M13.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M16 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12 5c-2.08 0-4.292.437-6.011 1.493C4.235 7.571 3 9.3 3 11.76c0 1.108.251 2.083.706 2.925.198.364.256.672.201.918l-.298 1.345c-.144.65.135 1.232.562 1.593a2.02 2.02 0 0 0 1.616.433l3.65-.579c.202-.032.422-.03.652 0a14 14 0 0 0 1.911.126c2.08 0 4.292-.437 6.011-1.494C19.765 15.95 21 14.221 21 11.76c0-2.46-1.235-4.189-2.989-5.267C16.291 5.437 14.08 5 12 5m-7.5 6.76c0-1.866.898-3.143 2.274-3.989C8.184 6.905 10.097 6.5 12 6.5s3.816.405 5.226 1.271c1.376.846 2.274 2.123 2.274 3.99s-.898 3.143-2.274 3.989c-1.41.866-3.323 1.27-5.226 1.27-.571 0-1.147-.036-1.712-.111a3.8 3.8 0 0 0-1.086.005l-3.65.578a.52.52 0 0 1-.413-.097c-.078-.065-.07-.107-.066-.122l.299-1.345c.162-.73-.055-1.419-.347-1.958-.33-.608-.525-1.336-.525-2.21"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
