import React, { useContext } from 'react';

import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { ToastContext } from 'src/components/toast/ToastContext';

const useNotify = () => {
  return useContext(ToastContext);
};

export const ToastConsumer = () => {
  const notify = useNotify();

  return (
    <VStack>
      <Button onClick={() => notify('Default toast')}>Notify</Button>
      <Button onClick={() => notify('Success toast', { intent: 'success' })}>
        Success
      </Button>
      <Button onClick={() => notify('Error toast', { intent: 'error' })}>
        Error
      </Button>
      <Button onClick={() => notify('Warning toast', { intent: 'warning' })}>
        Warning
      </Button>
      <Button onClick={() => notify('Info toast', { intent: 'info' })}>
        Information
      </Button>
    </VStack>
  );
};
