import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  RichCheckbox,
  RichCheckboxProps,
} from 'src/components/rich-checkbox/RichCheckbox';
import { TextAvatar } from 'src/components/text-avatar/TextAvatar';

const RichCheckboxMeta: Meta = {
  component: RichCheckbox,
};

export default RichCheckboxMeta;

const Template: Story<RichCheckboxProps> = ({
  onClick,
  items,
}: RichCheckboxProps) => <RichCheckbox items={items} onClick={onClick} />;

export const BasicRichCheckbox = Template.bind({});
BasicRichCheckbox.args = {
  items: [
    {
      checked: false,
      label: 'Item 1',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
    },
    {
      checked: true,
      label: 'Item 2',
      subtitle: 'Item 2 subtitle',
      value: 'item2',
    },
    {
      checked: false,
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
  ],
};
BasicRichCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=245%3A181',
  },
};

export const DefaultRichCheckbox = Template.bind({});
DefaultRichCheckbox.args = {
  items: [
    {
      checked: true,
      icon: <TextAvatar label="Item 1" />,
      label: 'Item 1',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
    },
    {
      checked: true,
      icon: <TextAvatar label="Item 2" />,
      label: 'Item 2',
      subtitle: 'Item 2 subtitle',
      value: 'item2',
    },
    {
      checked: false,
      icon: <TextAvatar label="Item 3" />,
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
  ],
};
DefaultRichCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=245%3A181',
  },
};
