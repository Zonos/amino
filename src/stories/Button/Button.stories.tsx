import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, type ButtonProps } from 'src/components/Button/Button';
import { CubeIcon } from 'src/icons/CubeIcon';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const ButtonMeta: Meta = {
  title: 'Amino/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    href: {
      defaultValue: '',
      type: 'string',
    },
    iconRight: {
      defaultValue: false,
      type: 'boolean',
    },
    loading: {
      defaultValue: false,
      type: 'boolean',
    },
    loadingText: {
      defaultValue: '',
      type: 'string',
    },
    tabIndex: {
      type: 'number',
    },
  },
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
`;

export default ButtonMeta;

const Template: Story<ButtonProps> = ({
  children,
  className,
  disabled,
  intent,
  loading,
  loadingText,
  onClick,
  size,
  tabIndex,
  tooltip,
}) => (
  <StyledWrapper>
    {intent === 'icon' ? (
      <Button
        className={className}
        disabled={disabled}
        intent={intent}
        loading={loading}
        loadingText={loadingText}
        onClick={onClick}
        size={size}
        tabIndex={tabIndex}
        tooltip={tooltip}
      >
        {children}
      </Button>
    ) : (
      <>
        <div>
          <Button
            className={className}
            disabled={disabled}
            intent={intent}
            loading={loading}
            loadingText={loadingText}
            onClick={onClick}
            size={size}
            tabIndex={tabIndex}
            tooltip={tooltip}
          >
            {children}
          </Button>
        </div>
        <div>
          <Button
            className={className}
            disabled={disabled}
            intent={intent}
            icon={<CubeIcon size={16} />}
            loading={loading}
            loadingText={loadingText}
            onClick={onClick}
            size={size}
            tabIndex={tabIndex}
            tooltip={tooltip}
          >
            {children}
          </Button>
        </div>
        <div>
          <Button
            className={className}
            disabled={disabled}
            intent={intent}
            icon={<CubeIcon size={16} />}
            iconRight
            loading={loading}
            loadingText={loadingText}
            onClick={onClick}
            size={size}
            tabIndex={tabIndex}
            tooltip={tooltip}
          >
            {children}
          </Button>
        </div>
        <div>
          <Button
            className={className}
            disabled={disabled}
            intent={intent}
            icon={<CubeIcon size={16} />}
            loading={loading}
            loadingText={loadingText}
            onClick={onClick}
            size={size}
            tabIndex={tabIndex}
            tooltip={tooltip}
          />
        </div>
      </>
    )}
  </StyledWrapper>
);

export const Default = Template.bind({});
Default.args = {
  intent: 'secondary',
  children: 'Example button',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=77%3A51',
  },
};

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  children: 'Example button',
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A20',
  },
};

export const Danger = Template.bind({});
Danger.args = {
  intent: 'danger',
  children: 'Example button',
};
Danger.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A24',
  },
};

export const Warning = Template.bind({});
Warning.args = {
  intent: 'warning',
  children: 'Example button',
};
Warning.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A24',
  },
};

export const Subtle = Template.bind({});
Subtle.args = {
  intent: 'subtle',
  children: 'Example button',
};
Subtle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A24',
  },
};

export const Outline = Template.bind({});
Outline.args = {
  intent: 'outline',
  children: 'Example button',
};
Outline.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A24',
  },
};

export const Icon = Template.bind({});
Icon.args = {
  intent: 'icon',
  children: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
};
