import React, { useState } from 'react';

import { useConfirm } from 'hooks';
import { Button, VStack } from '../..';

export const ConfirmConsumer = () => {
  const [defaultConfirmOk, setDefaultConfirmOk] = useState(false);
  const [dangerConfirmOk, setDangerConfirmOk] = useState(false);

  const defaultConfirm = useConfirm();
  const dangerConfirm = useConfirm();

  return (
    <VStack>
      <Button
        onClick={() =>
          defaultConfirm({
            label: 'Are you sure?',
            subtitle:
              'This is the descriptive text about what the user is about to do',
            intent: 'primary',
            dismissText: 'Cancel',
            confirmText: 'Do it',
            onConfirm: setDefaultConfirmOk,
          })
        }
      >
        Trigger default confirmation
      </Button>
      <div>{defaultConfirmOk ? 'confirmed' : 'not confirmed'}</div>
      <Button
        onClick={() =>
          dangerConfirm({
            label: 'Are you sure?',
            subtitle:
              'This is the descriptive text about what the user is about to do',
            intent: 'danger',
            dismissText: 'Cancel',
            confirmText: 'Do it',
            onConfirm: setDangerConfirmOk,
          })
        }
      >
        Trigger danger confirmation
      </Button>
      <div>{dangerConfirmOk ? 'confirmed' : 'not confirmed'}</div>
    </VStack>
  );
};
