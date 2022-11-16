import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { StackProps } from 'src/components/stack/Stack';
import { VStack } from 'src/components/stack/VStack';

const VStackMeta: Meta = {
  title: 'Amino/VStack',
  component: VStack,
  args: {
    numberOfChildren: 4,
  },
};

export default VStackMeta;

type StoryProps = StackProps & { numberOfChildren: number };

const Template: Story<StoryProps> = ({
  alignment,
  spacing,
  numberOfChildren,
}: StoryProps) => (
  <VStack alignment={alignment} spacing={spacing}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Card label={`Card ${n}`} key={n} footerActions={<Button>Do it</Button>}>
        <p>Some text</p>
      </Card>
    ))}
  </VStack>
);

export const CardVStack = Template.bind({});

CardVStack.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
