import { useContext, useState } from 'react';

import styled from 'styled-components';

import { LegacyButton } from 'src/components/button/LegacyButton';
import { Input } from 'src/components/input/Input';
import { Select } from 'src/components/select/Select';
import { VStack } from 'src/components/stack/VStack';
import type { Direction } from 'src/components/toast/Toast';
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
  const [dir, setDir] = useState<{ label: string; value: Direction }>({
    label: 'top',
    value: 'top',
  });
  const [horizontalOffset, setHorizontalOffset] = useState('');
  const [verticalOffset, setVerticalOffset] = useState('');

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
          <Select
            label="Direction"
            onChange={v => v && setDir(v)}
            options={[
              { label: 'top', value: 'top' },
              { label: 'bottom', value: 'bottom' },
              { label: 'left', value: 'left' },
              { label: 'right', value: 'right' },
            ]}
            value={dir}
          />
          <Input
            label="Horizonal Offset"
            onChange={v => setHorizontalOffset(v.target.value)}
            type="text"
            value={horizontalOffset}
          />
          <Input
            label="Vertical Offset"
            onChange={v => setVerticalOffset(v.target.value)}
            type="text"
            value={verticalOffset}
          />
          <LegacyButton
            onClick={() =>
              notify(
                message,
                {
                  direction: dir.value,
                  duration,
                  intent: 'info',
                },
                {
                  bottom: verticalOffset,
                  left: horizontalOffset,
                },
              )
            }
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
