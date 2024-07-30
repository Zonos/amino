import { Button } from 'src/components/button/Button';
import { useAlert } from 'src/components/dialog/alert/useAlert';
import { VStack } from 'src/components/stack/VStack';

export const AlertConsumer = () => {
  const alert = useAlert();

  return (
    <VStack>
      {/* Info  alert */}
      <Button
        onClick={() =>
          alert({
            dismissText: "Don't do action",
            intent: 'info',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'You look nice today',
            width: 500,
          })
        }
        variant="primary"
      >
        Trigger default alert
      </Button>
      {/* Danger alert */}
      <Button
        onClick={() =>
          alert({
            dismissText: "Don't do action",
            intent: 'danger',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'There was an error or something',
            width: 800,
          })
        }
        variant="danger"
      >
        Trigger danger alert
      </Button>
      {/* Warning alert */}
      <Button
        onClick={() =>
          alert({
            dismissText: "Don't do action",
            intent: 'warning',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'This is your final warning',
          })
        }
        variant="warning"
      >
        Trigger warning alert
      </Button>
    </VStack>
  );
};
