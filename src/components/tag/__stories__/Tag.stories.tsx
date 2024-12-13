import { useEffect, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { VStack } from 'src/components/stack/VStack';
import { Tag, type TagProps } from 'src/components/tag/Tag';
import { CubeIcon } from 'src/icons/CubeIcon';

const TagMeta: Meta = {
  argTypes: {
    intent: {
      control: {
        options: ['default', 'highlight', 'error'],
        type: 'radio',
      },
    },
  },
  component: Tag,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2628%3A59491&mode=dev',
    },
  },
};

export default TagMeta;

const Template: StoryFn<TagProps> = ({
  children,
  icon,
  iconRight,
  intent,
  onClose,
}: TagProps) => {
  const [tagSectionClicked, settagSectionClicked] = useState<
    'whole' | 'close' | null
  >(null);
  useEffect(() => {
    if (tagSectionClicked) {
      // reset after 5 seconds
      setTimeout(() => {
        settagSectionClicked(null);
      }, 2000);
    }
  }, [tagSectionClicked]);

  return (
    <VStack>
      <p>Tag section clicked: {tagSectionClicked || 'None'}</p>
      <div>
        <p>
          Size: <b>base</b>
        </p>
        <Tag
          icon={icon}
          iconRight={iconRight}
          intent={intent}
          onClick={() => settagSectionClicked('whole')}
          onClose={() => {
            settagSectionClicked('close');
            onClose();
          }}
          size="base"
        >
          {children}
        </Tag>
      </div>
      <div>
        <p>
          Size: <b>lg</b>
        </p>
        <Tag
          icon={icon}
          iconRight={iconRight}
          intent={intent} // Pass intent prop
          onClick={() => settagSectionClicked('whole')}
          onClose={() => {
            settagSectionClicked('close');
            onClose();
          }}
          size="lg"
        >
          {children}
        </Tag>
      </div>
    </VStack>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <span>HS code for Brazil</span>,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: <span>HS code for Brazil</span>,
  icon: <CubeIcon size={16} />,
};

export const Country = Template.bind({});
Country.args = {
  children: <span>Brazil</span>,
  icon: (
    <svg
      fill="none"
      height="12"
      viewBox="0 0 16 12"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        height="12"
        id="mask0_183_6804"
        maskUnits="userSpaceOnUse"
        width="16"
        x="0"
        y="0"
      >
        <rect fill="white" height="12" width="16" />
      </mask>
      <g mask="url(#mask0_183_6804)">
        <path
          clipRule="evenodd"
          d="M0 0H16V12H0V0Z"
          fill="#9898A0"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M0 0V4H16V0H0Z"
          fill="#D6D6D9"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M0 8V12H16V8H0Z"
          fill="#5B5B60"
          fillRule="evenodd"
        />
      </g>
    </svg>
  ),
  intent: 'default',
  onClose: () => {},
};
