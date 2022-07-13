import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  RoundedIcon,
  RoundedIconProps,
} from 'src/components/rounded-icon/RoundedIcon';
import { ReportsIcon } from 'src/icons/legacy/ReportsIcon';
import { withDesign } from 'storybook-addon-designs';

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
  background: 'gray-d80',
  children: <ReportsIcon />,
  color: 'purple-l40',
  intent: 'secondary',
};
Colored.args = coloredArgs;
