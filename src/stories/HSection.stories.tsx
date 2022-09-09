import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { HSection, HSectionProps } from 'src/components/section/HSection';
import { withDesign } from 'storybook-addon-designs';

const HSectionMeta: Meta = {
  title: 'Amino/HSection',
  component: HSection,
  decorators: [withDesign],
};

export default HSectionMeta;

const Template: Story<HSectionProps> = (props: HSectionProps) => (
  <HSection {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt 
  illo asperiores quasi! Neque, praesentium. 
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  sublabel: 'Sublabel',
  label: 'My HSection',
};

export const Collapsable = Template.bind({});
Collapsable.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt 
  illo asperiores quasi! Neque, praesentium. 
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  sublabel: 'Sublabel',
  label: 'My HSection',
  collapsable: true,
};

export const CollapsedByDefault = Template.bind({});
CollapsedByDefault.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Iure minima tenetur ratione deserunt beatae a et, aliquam, nesciunt 
  illo asperiores quasi! Neque, praesentium. 
  Itaque blanditiis corporis incidunt doloribus assumenda eos.`,
  sublabel: 'Sublabel',
  label: 'My HSection',
  collapsable: true,
  collapseByDefault: true,
};
