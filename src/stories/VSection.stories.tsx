import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { ListItem } from 'src/components/list-item/ListItem';
import { VSection, VSectionProps } from 'src/components/section/VSection';
import { VStack } from 'src/components/stack/VStack';
import { CartIcon } from 'src/icons/CartIcon';
import { withDesign } from 'storybook-addon-designs';

const VSectionMeta: Meta = {
  title: 'Amino/VSection',
  component: VSection,
  decorators: [withDesign],
};

export default VSectionMeta;

const Template: Story<VSectionProps> = (props: VSectionProps) => (
  <VSection {...props} />
);

export const BasicVSection = Template.bind({});
BasicVSection.args = {
  children: 'VSection contents',
  sublabel: 'Sublabel',
  label: 'My VSection',
};
BasicVSection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const VSectionWithActions = Template.bind({});
VSectionWithActions.args = {
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
VSectionWithActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};
