import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  type RichCheckboxProps,
  RichCheckbox,
} from 'src/components/rich-checkbox/RichCheckbox';
import { TextAvatar } from 'src/components/text-avatar/TextAvatar';

const RichCheckboxMeta: Meta = {
  component: RichCheckbox,
};

export default RichCheckboxMeta;

const Template: StoryFn<RichCheckboxProps> = ({
  items: _items,
}: RichCheckboxProps) => {
  const [items, setItems] = useState(_items);

  return (
    <RichCheckbox
      items={items}
      onClick={value =>
        setItems(
          items.map(item => ({
            ...item,
            checked: item.value === value ? !item.checked : item.checked,
          })),
        )
      }
    />
  );
};

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
