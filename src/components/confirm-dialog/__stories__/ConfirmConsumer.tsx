import { useState } from 'react';

import { Button } from 'src/components/button/Button';
import { useConfirm } from 'src/components/confirm-dialog/useConfirm';
import { VStack } from 'src/components/stack/VStack';

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
        onClick={() =>
          defaultConfirm({
            confirmText: 'Do action',
            dismissText: "Don't do action",
            intent: 'primary',
            label: 'Are you sure?',
            onConfirm: setDefaultConfirmOk,
            subtitle:
              'This is the descriptive text about what the user is about to do',
          })
        }
        variant="primary"
      >
        Trigger default confirmation
      </Button>
      <div className="default-confirmation">
        <b>Default confirmation:</b>{' '}
        {defaultConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>

      {/** Danger Confirmation */}
      <Button
        onClick={() =>
          dangerConfirm({
            confirmText: 'Do action',
            dismissText: "Don't do action",
            intent: 'danger',
            label: 'Are you sure?',
            onConfirm: setDangerConfirmOk,
            subtitle: 'This is the descriptive text about what just happened',
          })
        }
        variant="danger"
      >
        Trigger danger confirmation
      </Button>
      <div className="warning-confirmation">
        <b>Danger confirmation:</b>{' '}
        {dangerConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>

      {/** Warning Confirmation */}
      <Button
        onClick={() =>
          warningConfirm({
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
      <div>
        <b>Warning confirmation:</b>{' '}
        {warningConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>
    </VStack>
  );
};
