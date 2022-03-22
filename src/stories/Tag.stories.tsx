import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { CubeIcon } from 'icons';

import { Tag, TagProps } from '../components/Tag';

const TagMeta: Meta = {
  title: 'Amino/Tag',
  component: Tag,
  decorators: [withDesign],
};

export default TagMeta;

const Template: Story<TagProps> = ({
  children,
  icon,
  iconRight,
  inverted,
  onClose,
}: TagProps) => (
  <Tag onClose={onClose} icon={icon} iconRight={iconRight} inverted={inverted}>
    {children}
  </Tag>
);

export const Default = Template.bind({});
Default.args = {
  icon: <CubeIcon size={20} />,
  children: <span>HS code for Brazil</span>,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const Country = Template.bind({});
Country.args = {
  onClose: () => {},
  icon: (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_183_6804"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask="url(#mask0_183_6804)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V12H0V0Z"
          fill="#9898A0"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V4H16V0H0Z"
          fill="#D6D6D9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8V12H16V8H0Z"
          fill="#5B5B60"
        />
      </g>
    </svg>
  ),
  children: <span>Brazil</span>,
};
Country.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
