import type { ReactNode } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { Select } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import type { StackProps } from 'src/components/stack/Stack';
import type { IOption } from 'src/types/IOption';

const HStackMeta: Meta = {
  component: HStack,
  args: {
    numberOfChildren: 4,
  },
};

export default HStackMeta;

type StoryProps = StackProps & { numberOfChildren: number };

const options = [
  'Nope',
  'Gollum',
  'Not sure how to answer that question',
  '*confused noises*',
].map<IOption>(v => ({
  label: v,
  value: v,
}));

const Template: StoryFn<
  StoryProps & { renderChild: (key: number) => ReactNode }
> = ({ spacing, numberOfChildren, renderChild }) => (
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
      placeholder="What?"
      options={options}
      onChange={() => {}}
      value={null}
    />
  ),
};

export const Cards = Template.bind({});
Cards.args = {
  renderChild: k => (
    <Card label={`Card ${k}`} key={k} footerActions={<Button>Do it</Button>}>
      <p>Some text</p>
    </Card>
  ),
};
