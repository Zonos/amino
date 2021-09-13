import React from 'react';

import { useAlert } from 'hooks';

import { Button, VStack } from '../..';

export const AlertConsumer = () => {
  const defaultAlert = useAlert();
  const dangerAlert = useAlert();

  return (
    <VStack>
      <Button
        onClick={() =>
          defaultAlert({
            label: 'Heads up',
            subtitle: 'You look nice today',
            intent: 'primary',
            dismissText: 'OK',
            onDismiss: () => {},
          })
        }
      >
        Trigger default alert
      </Button>
      <Button
        onClick={() =>
          dangerAlert({
            label: 'Heads up',
            subtitle: 'There was an error or something',
            intent: 'danger',
            dismissText: 'OK',
            onDismiss: () => {},
          })
        }
      >
        Trigger danger alert
      </Button>
    </VStack>
  );
};
