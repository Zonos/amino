import React from 'react';

import { v4 } from 'uuid';

export const useStableUniqueId = (count?: number) => {
  const [id] = React.useState(() => v4());
  const numbers = Array.from(Array(count || 1).keys());
  return numbers.map(number => `a-${number}-${id}`);
};
