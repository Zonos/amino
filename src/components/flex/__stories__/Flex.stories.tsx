import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { type FlexProps, Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';

const Template: StoryFn<FlexProps> = ({ children, ...props }) => (
  <Flex>
    <Flex {...props}>
      <Button>I am feeling very flexy today</Button>
      <Text>I am feeling very flexy today.</Text>
    </Flex>
  </Flex>
);

const meta: Meta<FlexProps> = {
  component: Flex,
  render: Template,
};

export default meta;

export const Basic: StoryObj<FlexProps> = {
  args: {
    flexDirection: 'column',
  },
};

export const FullWidth: StoryObj<FlexProps> = {
  args: {
    flexDirection: 'column',
    fullWidth: true,
  },
};
