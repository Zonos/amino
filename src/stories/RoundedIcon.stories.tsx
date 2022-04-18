import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { RoundedIcon, type RoundedIconProps } from '../components/RoundedIcon';
import { ReportsIcon } from '../icons';

const RoundedIconMeta: Meta = {
  title: 'Amino/RoundedIcon',
  component: RoundedIcon,
  decorators: [withDesign],
};

export default RoundedIconMeta;

const Template: Story<RoundedIconProps> = ({
  background,
  children,
  color,
  intent,
}) => (
  <RoundedIcon background={background} color={color} intent={intent}>
    {children}
  </RoundedIcon>
);

export const Default = Template.bind({});
const defaultArgs: RoundedIconProps = {
  children: <ReportsIcon />,
  intent: 'info',
};
Default.args = defaultArgs;

export const Primary = Template.bind({});
const primaryArgs: RoundedIconProps = {
  children: <ReportsIcon />,
  intent: 'primary',
};
Primary.args = primaryArgs;

export const Danger = Template.bind({});
const dangerArgs: RoundedIconProps = {
  children: <ReportsIcon />,
  intent: 'danger',
};
Danger.args = dangerArgs;

export const Colored = Template.bind({});
const coloredArgs: RoundedIconProps = {
  background: 'gray-900',
  children: <ReportsIcon />,
  color: 'purple-400',
  intent: 'secondary',
};
Colored.args = coloredArgs;
