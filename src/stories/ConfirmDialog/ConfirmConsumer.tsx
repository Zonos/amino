import React, { useState } from 'react';

import { useConfirm } from 'hooks';

import { Button, VStack } from '../..';

export const ConfirmConsumer = () => {
  const [defaultConfirmOk, setDefaultConfirmOk] = useState(false);
  const [dangerConfirmOk, setDangerConfirmOk] = useState(false);
  const [warningConfirmOk, setWarningConfirmOk] = useState(false);

  const defaultConfirm = useConfirm();
  const dangerConfirm = useConfirm();
  const warningConfirm = useConfirm();

  return (
    <VStack>
      {/** Default Confirmation */}
      <Button
        intent="primary"
        onClick={() =>
          defaultConfirm({
            label: 'Are you sure?',
            subtitle:
              'This is the descriptive text about what the user is about to do',
            intent: 'primary',
            dismissText: "Don't do action",
            confirmText: 'Do action',
            onConfirm: setDefaultConfirmOk,
          })
        }
      >
        Trigger default confirmation
      </Button>
      <div>{defaultConfirmOk ? 'confirmed' : 'not confirmed'}</div>

      {/** Danger Confirmation */}
      <Button
        intent="danger"
        onClick={() =>
          dangerConfirm({
            label: 'Are you sure?',
            subtitle: 'This is the descriptive text about what just happened',
            intent: 'danger',
            dismissText: "Don't do action",
            confirmText: 'Do action',
            onConfirm: setDangerConfirmOk,
          })
        }
      >
        Trigger danger confirmation
      </Button>
      <div>{dangerConfirmOk ? 'confirmed' : 'not confirmed'}</div>

      {/** Warning Confirmation */}
      <Button
        intent="warning"
        onClick={() =>
          warningConfirm({
            label: 'Are you sure?',
            subtitle: 'This is the descriptive text about what just happened',
            intent: 'warning',
            dismissText: "Don't do action",
            confirmText: 'Do action',
            onConfirm: setWarningConfirmOk,
          })
        }
      >
        Trigger warning confirmation
      </Button>
      <div>{warningConfirmOk ? 'confirmed' : 'not confirmed'}</div>
    </VStack>
  );
};
