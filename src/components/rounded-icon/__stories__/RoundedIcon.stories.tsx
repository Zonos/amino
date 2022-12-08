import { Meta, Story } from '@storybook/react/types-6-0';
import {
  RoundedIcon,
  RoundedIconProps,
} from 'src/components/rounded-icon/RoundedIcon';
import { TruckDuotoneIcon } from 'src/icons/TruckDuotoneIcon';

const RoundedIconMeta: Meta = {
  component: RoundedIcon,
};

export default RoundedIconMeta;

const Template: Story<RoundedIconProps> = props => <RoundedIcon {...props} />;

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
  background: 'gray-1000',
  children: <TruckDuotoneIcon />,
  color: 'purple-400',
  intent: 'secondary',
};
Colored.args = coloredArgs;
