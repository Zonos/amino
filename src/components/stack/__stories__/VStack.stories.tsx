import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/LegacyButton';
import { Card } from 'src/components/card/Card';
import type { StackProps } from 'src/components/stack/Stack';
import { VStack } from 'src/components/stack/VStack';

const VStackMeta: Meta = {
  args: {
    numberOfChildren: 4,
  },
  component: VStack,
};

export default VStackMeta;

type StoryProps = StackProps & { numberOfChildren: number };

const Template: StoryFn<StoryProps> = ({
  alignment,
  numberOfChildren,
  spacing,
}: StoryProps) => (
  <VStack alignment={alignment} spacing={spacing}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Card key={n} footerActions={<Button>Do it</Button>} label={`Card ${n}`}>
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
