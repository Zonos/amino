import type { Meta, StoryFn } from '@storybook/react';

import { type ButtonProps, Button } from 'src/components/button/Button';
import { ButtonGroup } from 'src/components/button/button-group/ButtonGroup';
import { VStack } from 'src/components/stack/VStack';

const ButtonGroupMeta: Meta = {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=6952-10231&t=ty8x4h88FKUVO4EX-4',
    },
  },
};

export default ButtonGroupMeta;

const Template: StoryFn<ButtonProps> = args => (
  <VStack spacing={40}>
    <ButtonGroup>
      <Button {...args}>Button 1</Button>
      <Button {...args}>Button 2</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button {...args}>Button 1</Button>
      <Button {...args}>Button 2</Button>
      <Button {...args}>Button 3</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button {...args}>Button 1</Button>
      <Button {...args}>Button 2</Button>
      <Button {...args}>Button 3</Button>
      <Button {...args}>Button 4</Button>
    </ButtonGroup>
  </VStack>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'standard',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
