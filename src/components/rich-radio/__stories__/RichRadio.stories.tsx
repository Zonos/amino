import { useEffect, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  RichRadio,
  type RichRadioProps,
} from 'src/components/rich-radio/RichRadio';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';

const RichRadioMeta: Meta = {
  argTypes: {
    activeIcon: {
      mapping: {
        'Check Icon': <CheckmarkIcon />,
        'Chevron Right Icon': <ChevronRightIcon />,
      },
      options: ['Check Icon', 'Chevron Right Icon'],
    },
    icon: {
      mapping: {
        'Check Icon': <CheckmarkIcon />,
        'Chevron Right Icon': <ChevronRightIcon />,
        'No Icon': undefined,
      },
      options: ['No Icon', 'Check Icon', 'Chevron Right Icon'],
    },
  },
  component: RichRadio,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=96%3A2004&t=TdkLVg0lxI1YWk86-4',
    },
  },
};

export default RichRadioMeta;

const Template: StoryFn<RichRadioProps> = ({
  activeIcon,
  icon,
  itemHeight,
  items,
  onChange,
  renderCustomText,
  value,
}: RichRadioProps) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  // This effect mimics data fetching where the component is rendered before the data is populated
  useEffect(() => {
    setRadioValue(value);
  }, [value]);

  return (
    <RichRadio
      activeIcon={activeIcon}
      icon={icon}
      itemHeight={itemHeight}
      items={items}
      onChange={onChange}
      renderCustomText={renderCustomText}
      value={radioValue}
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
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
      value: 'item1',
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle (with tooltip)',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 200,
      },
      value: 'item2',
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

export const CustomRichRadioOption = Template.bind({});
CustomRichRadioOption.args = {
  items: [
    {
      label:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      subtitle: 'Item 1 subtitle',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
      value: 'item1',
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle (with tooltip)',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
      value: 'item2',
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
};

export const SmallRichRadio = Template.bind({});
SmallRichRadio.args = {
  items: [
    {
      label: 'Handbags, whether or not with shoulder strap',
      tooltip: 'Handbags, whether or not with shoulder strap',
      tooltipSetting: {
        delayShow: 400,
      },
      value: 'item1',
    },
    {
      label: 'Item 2',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
      value: 'item2',
    },
    {
      label: 'Item 3',
      value: 'item3',
    },
    {
      label: 'Item 4',
      value: 'item4',
    },
  ],
};
