import React, { useContext } from 'react';

import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { ToastContext } from 'src/components/toast/ToastContext';
import styled from 'styled-components';

const useNotify = () => {
  return useContext(ToastContext);
};

// Toasts appear in the middle, so don't hide controls
const LeftCenteredDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ToastConsumer = () => {
  const notify = useNotify();

  return (
    <LeftCenteredDiv>
      <VStack>
        <Button intent="secondary" onClick={() => notify('Default toast')}>
          Notify
        </Button>
        <Button
          intent="success"
          onClick={() => notify('Success toast', { intent: 'success' })}
        >
          Success
        </Button>
        <Button
          intent="danger"
          onClick={() => notify('Error toast', { intent: 'error' })}
        >
          Error
        </Button>
        <Button
          intent="warning"
          onClick={() => notify('Warning toast', { intent: 'warning' })}
        >
          Warning
        </Button>
        <Button
          intent="primary"
          onClick={() => notify('Info toast', { intent: 'info' })}
        >
          Information
        </Button>
      </VStack>
    </LeftCenteredDiv>
  );
};
