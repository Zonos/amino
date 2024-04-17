import { Suspense } from 'react';

import { GraphiQL, type GraphiQLProps } from 'graphiql';

export const Graphiql = (props: GraphiQLProps) => (
  <Suspense fallback={null}>
    <GraphiQL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </Suspense>
);
