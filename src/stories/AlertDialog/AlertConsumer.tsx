import React from 'react';

import { useAlert } from '~/src/components/AlertDialog';

import { Button, VStack } from '../..';

export const AlertConsumer = () => {
  const defaultAlert = useAlert();
  const dangerAlert = useAlert();
  const warningAlert = useAlert();

  return (
    <VStack>
      {/* Info  alert */}
      <Button
        intent="primary"
        onClick={() =>
          defaultAlert({
            label: 'Heads up',
            subtitle: 'You look nice today',
            intent: 'primary',
            dismissText: "Don't do action",
            onDismiss: () => {},
          })
        }
      >
        Trigger default alert
      </Button>
      {/* Danger alert */}
      <Button
        intent="danger"
        onClick={() =>
          dangerAlert({
            label: 'Heads up',
            subtitle: 'There was an error or something',
            intent: 'danger',
            dismissText: "Don't do action",
            onDismiss: () => {},
          })
        }
      >
        Trigger danger alert
      </Button>
      {/* Warning alert */}
      <Button
        intent="warning"
        onClick={() =>
          warningAlert({
            label: 'Heads up',
            subtitle: 'There was an warning',
            intent: 'warning',
            dismissText: "Don't do action",
            onDismiss: () => {},
          })
        }
      >
        Trigger warning alert
      </Button>
    </VStack>
  );
};
