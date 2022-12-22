import { Meta, Story } from '@storybook/react/types-6-0';
import {
  DynamicIcon as Component,
  DynamicIconProps,
} from 'src/icons/icon-base/DynamicIcon';
import * as icons from 'src/icons/IconIndex';

const IconsMeta: Meta = {
  component: Component,
  argTypes: {
    size: {
      type: 'number',
    },
    type: {
      options: Object.keys(icons),
      mapping: Object.values(icons),
      control: {
        type: 'select',
      },
    },
  },
};

export default IconsMeta;

const DynamicIconTemplate: Story<DynamicIconProps> = ({
  size,
  type,
}: DynamicIconProps) => <Component size={size} type={type} />;

export const DynamicIcon = DynamicIconTemplate.bind({});
DynamicIcon.args = {
  size: 30,
  type: 'WarningIcon',
};
