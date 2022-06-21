import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { HStack } from 'src/components/stack/HStack';
import { StackProps } from 'src/components/stack/Stack';
import { withDesign } from 'storybook-addon-designs';

const HStackMeta: Meta = {
  title: 'Amino/HStack',
  component: HStack,
  decorators: [withDesign],
};

export default HStackMeta;

const Template: Story<StackProps> = ({
  alignment,
  children,
  spacing,
}: StackProps) => (
  <HStack alignment={alignment} spacing={spacing}>
    {children}
  </HStack>
);

export const CardHStack = Template.bind({});
CardHStack.args = {
  children: (
    <>
      <Card footerActions={<Button>action</Button>}>
        <div>one</div>
      </Card>
      <Card footerContent={<Button>action 2</Button>}>
        <div>two</div>
        <div>two</div>
      </Card>
    </>
  ),
};
CardHStack.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
