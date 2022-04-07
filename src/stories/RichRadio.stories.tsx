import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { CheckMarkIcon, ChevronRightIcon } from 'icons';

import { RichRadio, RichRadioProps } from '../components/RichRadio';

const RichRadioMeta: Meta = {
  title: 'Amino/RichRadio',
  component: RichRadio,
  decorators: [withDesign],
  argTypes: {
    icon: {
      defaultValue: 'No Icon',
      options: ['No Icon', 'Check Icon', 'Chevron Right Icon'],
      mapping: {
        'No Icon': undefined,
        'Check Icon': <CheckMarkIcon />,
        'Chevron Right Icon': <ChevronRightIcon />,
      },
    },
    activeIcon: {
      defaultValue: 'Chevron Right Icon',
      options: ['Check Icon', 'Chevron Right Icon'],
      mapping: {
        'Check Icon': <CheckMarkIcon />,
        'Chevron Right Icon': <ChevronRightIcon />,
      },
    },
  },
};

export default RichRadioMeta;

const Template: Story<RichRadioProps> = ({
  onChange,
  items,
  renderCustomText,
  value,
  icon,
  activeIcon,
}: RichRadioProps) => (
  <RichRadio
    value={value}
    onChange={onChange}
    renderCustomText={renderCustomText}
    items={items}
    icon={icon}
    activeIcon={activeIcon}
  />
);

export const BasicRichRadio = Template.bind({});
BasicRichRadio.args = {
  items: [
    {
      label:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle',
      value: 'item2',
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
  ],
};
BasicRichRadio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=245%3A181',
  },
};

export const CustomRichRadioOption = Template.bind({});
CustomRichRadioOption.args = {
  renderCustomText: ({ label, subtitle }) => (
    <div>
      <span>
        Customized Label: <b>{label}</b>
      </span>
      <span>
        Customized Subtitle: <b>{subtitle}</b>
      </span>
    </div>
  ),
  items: [
    {
      label:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle',
      value: 'item2',
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
  ],
};
CustomRichRadioOption.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=245%3A181',
  },
};
