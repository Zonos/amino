import React, { useContext } from 'react';

import { Button, ToastContext } from '../..';

const useNotify = () => {
  return useContext(ToastContext);
};

export const ToastConsumer = () => {
  const notify = useNotify();

  return (
    <div>
      <Button onClick={() => notify('This is a notification.')}>Notify</Button>
    </div>
  );
};
