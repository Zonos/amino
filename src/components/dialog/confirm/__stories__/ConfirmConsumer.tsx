import { useState } from 'react';

import { Button } from 'src/components/button/Button';
import { useConfirm } from 'src/components/dialog/confirm/useConfirm';
import { VStack } from 'src/components/stack/VStack';

export const ConfirmConsumer = () => {
  const [defaultConfirmOk, setDefaultConfirmOk] = useState(false);
  const [dangerConfirmOk, setDangerConfirmOk] = useState(false);
  const [warningConfirmOk, setWarningConfirmOk] = useState(false);

  const confirm = useConfirm();

  return (
    <VStack>
      {/** Default Confirmation */}
      <Button
        onClick={() =>
          confirm({
            confirmText: 'Do action',
            dismissText: "Don't do action",
            intent: 'info',
            label: 'Are you sure?',
            onConfirm: setDefaultConfirmOk,
            subtitle:
              'This is the descriptive text about what the user is about to do',
            width: 500,
          })
        }
        variant="primary"
      >
        Trigger default confirmation
      </Button>
      <div className="default-confirmation" data-testid="default-confirmation">
        <b>Default confirmation:</b>{' '}
        {defaultConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>

      {/** Danger Confirmation */}
      <Button
        onClick={() =>
          confirm({
            confirmText: 'Do action',
            dismissText: "Don't do action",
            intent: 'danger',
            label: 'Are you sure?',
            onConfirm: setDangerConfirmOk,
            subtitle: 'This is the descriptive text about what just happened',
            width: 800,
          })
        }
        variant="danger"
      >
        Trigger danger confirmation
      </Button>
      <div className="danger-confirmation" data-testid="danger-confirmation">
        <b>Danger confirmation:</b>{' '}
        {dangerConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>

      {/** Warning Confirmation */}
      <Button
        onClick={() =>
          confirm({
            confirmText: 'Do action',
            dismissText: "Don't do action",
            intent: 'warning',
            label: 'Are you sure?',
            onConfirm: setWarningConfirmOk,
            subtitle: 'This is the descriptive text about what just happened',
          })
        }
        variant="warning"
      >
        Trigger warning confirmation
      </Button>
      <div data-testid="warning-confirmation">
        <b>Warning confirmation:</b>{' '}
        {warningConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>
    </VStack>
  );
};
