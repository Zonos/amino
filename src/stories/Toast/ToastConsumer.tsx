import React, { useContext, useState } from 'react';

import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { ToastContext } from 'src/components/toast/ToastContext';
import { theme } from 'src/styles/constants/theme';
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

const CustomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.space8};
  border: ${theme.borderBlue};
  border-radius: ${theme.radius6};
  gap: 10px;
`;

export const ToastConsumer = () => {
  const notify = useNotify();

  const [message, setMessage] = useState('Your custom message');

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
        <CustomWrapper>
          <textarea
            rows={5}
            cols={30}
            value={message}
            onChange={v => setMessage(v.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                notify(message, { intent: 'info' });
              }
            }}
          />
          <Button onClick={() => notify(message, { intent: 'info' })}>
            Display Custom
          </Button>
        </CustomWrapper>
      </VStack>
    </LeftCenteredDiv>
  );
};
