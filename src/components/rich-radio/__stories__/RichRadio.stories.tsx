import { useState } from 'react';

import { useEffect } from '@storybook/addons';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RichRadio, RichRadioProps } from 'src/components/rich-radio/RichRadio';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';

const RichRadioMeta: Meta = {
  component: RichRadio,
  argTypes: {
    icon: {
      options: ['No Icon', 'Check Icon', 'Chevron Right Icon'],
      mapping: {
        'No Icon': undefined,
        'Check Icon': <CheckmarkIcon />,
        'Chevron Right Icon': <ChevronRightIcon />,
      },
    },
    activeIcon: {
      options: ['Check Icon', 'Chevron Right Icon'],
      mapping: {
        'Check Icon': <CheckmarkIcon />,
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
}: RichRadioProps) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  // This effect mimics data fetching where the component is rendered before the data is populated
  useEffect(() => {
    setRadioValue(value);
  }, [value]);

  return (
    <RichRadio
      value={radioValue}
      onChange={onChange}
      renderCustomText={renderCustomText}
      items={items}
      icon={icon}
      activeIcon={activeIcon}
    />
  );
};

export const BasicRichRadio = Template.bind({});
BasicRichRadio.args = {
  items: [
    {
      label:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle (with tooltip)',
      value: 'item2',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 200,
      },
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
    {
      label: 'Item 4',
      value: 'item4',
    },
  ],
  value: 'item1',
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
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle (with tooltip)',
      value: 'item2',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
    {
      label: 'Item 4',
      value: 'item4',
    },
  ],
};
CustomRichRadioOption.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=245%3A181',
  },
};
