import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { ListItem } from 'src/components/list-item/ListItem';
import { Section, SectionProps } from 'src/components/section/Section';
import { VStack } from 'src/components/stack/VStack';
import { CartIcon } from 'src/icons/CartIcon';
import { withDesign } from 'storybook-addon-designs';

const SectionMeta: Meta = {
  title: 'Amino/Section',
  component: Section,
  decorators: [withDesign],
};

export default SectionMeta;

const Template: Story<SectionProps> = (props: SectionProps) => (
  <Section {...props} />
);

export const BasicSection = Template.bind({});
BasicSection.args = {
  children: 'Section contents',
  sublabel: 'Sublabel',
  label: 'My section',
};
BasicSection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const SectionWithActions = Template.bind({});
SectionWithActions.args = {
  children: (
    <VStack>
      <ListItem
        decorator={<CartIcon />}
        label="**** 1234"
        subtitle="processed with Stripe"
      />
    </VStack>
  ),
  label: 'Payment',
  sublabel: 'Sublabel',
  actions: (
    <>
      <Button size="md">Receipt</Button>
      <Button size="md">Cancel order</Button>
    </>
  ),
};
SectionWithActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};
