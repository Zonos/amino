import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { RichRadio, RichRadioProps } from '../components/RichRadio';

const RichRadioMeta: Meta = {
  title: 'Amino/RichRadio',
  component: RichRadio,
  decorators: [withDesign],
};

export default RichRadioMeta;

const Template: Story<RichRadioProps> = ({
  onChange,
  items,
  value,
}: RichRadioProps) => (
  <RichRadio value={value} onChange={onChange} items={items} />
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
