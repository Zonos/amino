import { Suspense } from 'react';

// eslint-disable-next-line import/no-internal-modules
import { GraphiQL, GraphiQLProps } from 'graphiql';

export const Graphiql = (props: GraphiQLProps) => (
  <Suspense fallback={null}>
    <GraphiQL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </Suspense>
);
