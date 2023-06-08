import type { Meta, StoryFn } from '@storybook/react';
import { type TagProps, Tag } from 'src/components/tag/Tag';
import { CubeIcon } from 'src/icons/CubeIcon';

const TagMeta: Meta = {
  component: Tag,
  argTypes: {
    iconRight: {
      type: 'boolean',
    },
    isCode: {
      type: 'boolean',
    },
  },
};

export default TagMeta;

const Template: StoryFn<TagProps> = ({
  children,
  icon,
  iconRight,
  onClose,
  isCode,
  disabled,
}: TagProps) => (
  <Tag
    onClose={onClose}
    icon={icon}
    iconRight={iconRight}
    isCode={isCode}
    disabled={disabled}
  >
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

export const Icon = Template.bind({});
Icon.args = {
  icon: <CubeIcon size={20} />,
  children: <span>HS code for Brazil</span>,
};
Icon.parameters = {
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

export const Code = Template.bind({});
Code.args = {
  children: <span>Option</span>,
  isCode: true,
  onClose: undefined,
};
Code.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?type=design&node-id=5114-93930&t=U2cjNjlExkGuh0vR-0',
  },
};

export const CodeDisabled = Template.bind({});
CodeDisabled.args = {
  children: <span>Option</span>,
  isCode: true,
  disabled: true,
  onClose: undefined,
};
CodeDisabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?type=design&node-id=5114-93930&t=U2cjNjlExkGuh0vR-0',
  },
};
