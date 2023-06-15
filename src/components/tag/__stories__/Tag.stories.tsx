import type { Meta, StoryFn } from '@storybook/react';
import { type TagProps, Tag } from 'src/components/tag/Tag';
import { CubeIcon } from 'src/icons/CubeIcon';

const TagMeta: Meta = {
  argTypes: {
    iconRight: {
      type: 'boolean',
    },
  },
  component: Tag,
};

export default TagMeta;

const Template: StoryFn<TagProps> = ({
  children,
  icon,
  iconRight,
  onClose,
}: TagProps) => (
  <Tag icon={icon} iconRight={iconRight} onClose={onClose}>
    {children}
  </Tag>
);

export const Default = Template.bind({});
Default.args = {
  children: <span>HS code for Brazil</span>,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: <span>HS code for Brazil</span>,
  icon: <CubeIcon size={20} />,
};
WithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
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
  onClose: () => {},
};
Country.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
