import React, { useContext } from 'react';

import { Button } from 'src/components/button/Button';
import { ToastContext } from 'src/components/toast/ToastContext';

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
