import { useAlert } from 'src/components/alert-dialog/useAlert';
import { Button } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';

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
            dismissText: "Don't do action",
            intent: 'primary',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'You look nice today',
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
            dismissText: "Don't do action",
            intent: 'danger',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'There was an error or something',
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
            dismissText: "Don't do action",
            intent: 'warning',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'This is your final warning',
          })
        }
      >
        Trigger warning alert
      </Button>
    </VStack>
  );
};
