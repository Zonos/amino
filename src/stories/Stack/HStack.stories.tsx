import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Select } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import { StackProps } from 'src/components/stack/Stack';
import { IOption } from 'src/types/IOption';

type StoryProps = StackProps & { numberOfChildren: number };

const HStackMeta: Meta<StoryProps> = {
  title: 'Amino/HStack',
  component: HStack,
  subcomponents: { Select },
  args: {
    numberOfChildren: 2,
  },
};

export default HStackMeta;

const options = [
  'Nope',
  'Gollum',
  'Not sure how to answer that question',
  '*confused noises*',
].map<IOption>(v => ({
  label: v,
  value: v,
}));

const Template: Story<StoryProps> = ({
  spacing,
  numberOfChildren,
}: StoryProps) => (
  <HStack spacing={spacing}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Select
        key={n}
        label="What is your name"
        placeholder="What?"
        options={options}
        onChange={() => {}}
        value={null}
      />
    ))}
  </HStack>
);

export const HStackSelects = Template.bind({});
HStackSelects.args = {
  spacing: 'space',
};
