import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  RestState,
  type RestStateProps,
} from 'src/components/rest-state/RestState';

const RestStateMeta: Meta = {
  component: RestState,
};

export default RestStateMeta;

const Template: StoryFn<RestStateProps> = ({
  action,
  icon,
  label,
  subtitle,
}: RestStateProps) => (
  <RestState action={action} icon={icon} label={label} subtitle={subtitle} />
);

export const BasicRestState = Template.bind({});
BasicRestState.args = {
  icon: '',
  label: 'Example Rest State',
  subtitle: 'Example Rest State',
};

export const WithImage = Template.bind({});
WithImage.args = {
  action: <Button>Click me!</Button>,
  icon: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  label: 'Amino!',
  subtitle: 'Woohooooo I LOVE CHICKEN',
};
