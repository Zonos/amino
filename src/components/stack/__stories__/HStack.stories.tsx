import type { ReactNode } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { Select } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import type { StackProps } from 'src/components/stack/Stack';
import type { SelectOption } from 'src/types/SelectOption';

const HStackMeta: Meta = {
  args: {
    numberOfChildren: 4,
  },
  component: HStack,
};

export default HStackMeta;

type StoryProps = StackProps & { numberOfChildren: number };

const options = [
  'Nope',
  'Gollum',
  'Not sure how to answer that question',
  '*confused noises*',
].map<SelectOption>(v => ({
  label: v,
  value: v,
}));

const Template: StoryFn<
  StoryProps & { renderChild: (key: number) => ReactNode }
> = ({ numberOfChildren, renderChild, spacing }) => (
  <HStack spacing={spacing}>
    {[...Array(numberOfChildren).keys()].map(renderChild)}
  </HStack>
);

export const Selects = Template.bind({});
Selects.args = {
  renderChild: k => (
    <Select
      key={k}
      label="What is your name"
      onChange={() => {}}
      options={options}
      placeholder="What?"
      value={null}
    />
  ),
};

export const Cards = Template.bind({});
Cards.args = {
  renderChild: k => (
    <Card footerActions={<Button>Do it</Button>} key={k} label={`Card ${k}`}>
      <p>Some text</p>
    </Card>
  ),
};
