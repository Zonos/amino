import { useContext, useState } from 'react';

import styled from 'styled-components';

import { LegacyButton } from 'src/components/button/LegacyButton';
import { Input } from 'src/components/input/Input';
import { VStack } from 'src/components/stack/VStack';
import { ToastContext } from 'src/components/toast/ToastContext';
import { theme } from 'src/styles/constants/theme';

const useNotify = () => useContext(ToastContext);

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
  const [duration, setDuration] = useState(6000);

  return (
    <LeftCenteredDiv>
      <VStack>
        <LegacyButton
          intent="secondary"
          onClick={() => notify('Default toast', { duration })}
        >
          Notify
        </LegacyButton>
        <LegacyButton
          intent="success"
          onClick={() =>
            notify('Success toast', { duration, intent: 'success' })
          }
        >
          Success
        </LegacyButton>
        <LegacyButton
          intent="danger"
          onClick={() => notify('Error toast', { duration, intent: 'error' })}
        >
          Error
        </LegacyButton>
        <LegacyButton
          intent="warning"
          onClick={() =>
            notify('Warning toast', { duration, intent: 'warning' })
          }
        >
          Warning
        </LegacyButton>
        <LegacyButton
          intent="primary"
          onClick={() => notify('Info toast', { duration, intent: 'info' })}
        >
          Information
        </LegacyButton>
        <CustomWrapper>
          <textarea
            cols={30}
            onChange={v => setMessage(v.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                notify(message, { duration, intent: 'info' });
              }
            }}
            rows={5}
            value={message}
          />
          <LegacyButton
            onClick={() => notify(message, { duration, intent: 'info' })}
          >
            Display Custom
          </LegacyButton>
        </CustomWrapper>
        <Input
          label="Duration"
          onChange={e => setDuration(+e.target.value)}
          type="number"
          value={String(duration)}
        />
      </VStack>
    </LeftCenteredDiv>
  );
};
