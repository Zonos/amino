import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { HStack } from 'src/components/stack/HStack';
import { StackProps } from 'src/components/stack/Stack';
import { withDesign } from 'storybook-addon-designs';

type StoryProps = StackProps & { numberOfChildren: number };

const HStackMeta: Meta<StoryProps> = {
  title: 'Amino/HStack',
  component: HStack,
  decorators: [withDesign],
  args: {
    numberOfChildren: 4,
  },
};

export default HStackMeta;

const Template: Story<StoryProps> = ({
  alignment,
  spacing,
  numberOfChildren,
}: StoryProps) => (
  <HStack alignment={alignment} spacing={spacing}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Card label={`Card ${n}`} key={n} footerActions={<Button>Do it</Button>}>
        <p>Some text</p>
      </Card>
    ))}
  </HStack>
);

export const CardHStack = Template.bind({});

CardHStack.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
