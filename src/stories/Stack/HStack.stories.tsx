import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Select } from 'src/components/select/Select';
import { HStack, type HStackProps } from 'src/components/stack/HStack';

const HStackMeta: Meta = {
  title: 'Amino/HStack',
  component: HStack,
  subcomponents: { Select },
};

export default HStackMeta;

const Template: Story<HStackProps> = ({ spacing }: HStackProps) => (
  <HStack spacing={spacing}>
    <Select
      label="Frankfurters"
      placeholder="When you go to a ballgame..."
      options={[]}
      onChange={() => {}}
      value={null}
    />

    <Select
      label="HotDogs"
      placeholder="If you are a fan."
      options={[]}
      onChange={() => {}}
      value={null}
    />
  </HStack>
);

export const HStackSelects = Template.bind({});
HStackSelects.args = {
  spacing: 'space',
};
