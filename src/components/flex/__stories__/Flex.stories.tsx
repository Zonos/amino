import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { Flex, type FlexProps } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';

const Template: StoryFn<FlexProps> = ({ children, ...props }) => (
  <Flex>
    <Flex {...props}>
      <Button>I am feeling very flexy today</Button>
      <Text>I am feeling very flexy today</Text>
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

export const Centered: StoryFn<FlexProps> = ({
  alignItems = 'center',
  fullHeight = true,
  fullWidth = true,
  justifyContent = 'center',
  ...props
}) => (
  <Flex
    {...props}
    alignItems={alignItems}
    fullHeight={fullHeight}
    fullWidth={fullWidth}
    justifyContent={justifyContent}
  >
    <Text>I am feeling very flexy today</Text>
  </Flex>
);
