import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { RestState, RestStateProps } from 'src/components/rest-state/RestState';

const RestStateMeta: Meta = {
  component: RestState,
};

export default RestStateMeta;

const Template: Story<RestStateProps> = ({
  label,
  subtitle,
  action,
  icon,
}: RestStateProps) => (
  <RestState label={label} subtitle={subtitle} action={action} icon={icon} />
);

export const BasicRestState = Template.bind({});
BasicRestState.args = {
  label: 'Example Rest State',
  subtitle: 'Example Rest State',
  icon: '',
};

export const WithImage = Template.bind({});
WithImage.args = {
  label: 'Amino!',
  subtitle: 'Woohooooo I LOVE CHICKEN',
  action: <Button>Click me!</Button>,
  icon: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
};
