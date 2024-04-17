import type { Meta, StoryFn } from '@storybook/react';

import {
  RoundedIcon,
  type RoundedIconProps,
} from 'src/components/rounded-icon/RoundedIcon';
import { TruckDuotoneIcon } from 'src/icons/TruckDuotoneIcon';

const RoundedIconMeta: Meta = {
  component: RoundedIcon,
};

export default RoundedIconMeta;

const Template: StoryFn<RoundedIconProps> = props => <RoundedIcon {...props} />;

export const Default = Template.bind({});
const defaultArgs: RoundedIconProps = {
  children: <TruckDuotoneIcon />,
  intent: 'info',
};
Default.args = defaultArgs;

export const Primary = Template.bind({});
const primaryArgs: RoundedIconProps = {
  children: <TruckDuotoneIcon />,
  intent: 'primary',
};
Primary.args = primaryArgs;

export const Danger = Template.bind({});
const dangerArgs: RoundedIconProps = {
  children: <TruckDuotoneIcon />,
  intent: 'danger',
};
Danger.args = dangerArgs;

export const Colored = Template.bind({});
const coloredArgs: RoundedIconProps = {
  background: 'gray1000',
  children: <TruckDuotoneIcon />,
  color: 'purple400',
  intent: 'secondary',
};
Colored.args = coloredArgs;
