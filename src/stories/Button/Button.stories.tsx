import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { CubeIcon } from 'src/icons/CubeIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledButton = styled(Button)``;
const ButtonMeta: Meta = {
  title: 'Amino/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    href: {
      type: 'string',
    },
    iconRight: {
      type: 'boolean',
    },
    loading: {
      type: 'boolean',
    },
    loadingText: {
      type: 'string',
    },
    tabIndex: {
      type: 'number',
    },
  },
};

export default ButtonMeta;

const HWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.space};
`;
const VWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const ButtonRowLabel = styled(Text)`
  border-bottom: 1px solid black;
  margin-bottom: ${theme.spaceQuarter};
`;

const ButtonRow = ({
  label,
  intent,
  disabled,
  loading,
  ...props
}: ButtonProps & { label: string }) => (
  <div>
    <ButtonRowLabel type="bold-subheader">{label}</ButtonRowLabel>
    <HWrapper>
      <Button<'button'>
        {...props}
        intent={intent}
        disabled={disabled}
        loading={loading}
      />
      <Button
        {...props}
        icon={<CubeIcon size={16} />}
        intent={intent}
        disabled={disabled}
        loading={loading}
      />
      <Button
        {...props}
        icon={<CubeIcon size={16} />}
        iconRight
        intent={intent}
        disabled={disabled}
        loading={loading}
      />
      <Button
        {...props}
        icon={<CubeIcon size={16} />}
        /*  eslint-disable-next-line react/no-children-prop */
        children=""
        intent={intent}
        disabled={disabled}
        loading={loading}
      />
      <Button
        intent={intent}
        disabled={disabled}
        loading={loading}
        icon={<CubeIcon size={16} />}
        /*  eslint-disable-next-line react/no-children-prop */
        children=""
        onClick={e => e.preventDefault()}
        tag="div"
      />
      <StyledButton
        intent={intent}
        disabled={disabled}
        loading={loading}
        tag="div"
        onClick={e => e.preventDefault()}
      >
        Div Button
      </StyledButton>
      <Button
        intent={intent}
        disabled={disabled}
        loading={loading}
        theme="dark"
        {...props}
      >
        Dark
      </Button>
    </HWrapper>
  </div>
);

const Template: Story<ButtonProps> = props => (
  <VWrapper>
    <ButtonRow {...props} label="Default" />
    <ButtonRow {...props} disabled label="Disabled" />
    <ButtonRow {...props} loading label="Loading" />
  </VWrapper>
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

export const LinkButton = Template.bind({});
LinkButton.args = {
  intent: 'link',
  children: 'Link button',
};
LinkButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=77%3A51',
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

export const TextButton = Template.bind({});
TextButton.args = {
  intent: 'text',
  children: 'Back',
};
