import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { VStack, type VStackProps } from 'src/components/stack/VStack';
import { withDesign } from 'storybook-addon-designs';

const VStackMeta: Meta = {
  title: 'Amino/VStack',
  component: VStack,
  decorators: [withDesign],
};

export default VStackMeta;

const Template: Story<VStackProps> = ({
  alignment,
  children,
  spacing,
}: VStackProps) => (
  <VStack alignment={alignment} spacing={spacing}>
    {children}
  </VStack>
);

export const CardVStack = Template.bind({});
CardVStack.args = {
  children: (
    <>
      <Card footerActions={<Button>action</Button>}>
        <div>one</div>
      </Card>
      <Card footerActions={<Button>action 2</Button>}>
        <div>two</div>
        <div>two</div>
      </Card>
    </>
  ),
  alignment: 'start',
  spacing: 'space-double',
};

CardVStack.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
