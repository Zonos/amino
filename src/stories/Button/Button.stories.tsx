import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'src/components/button/Button';
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

const HWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: row;
`;
const VWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

export default ButtonMeta;

const ButtonRow = (props: ButtonProps) => (
  <HWrapper>
    <Button {...props} tooltip="Example tooltip" />
    <Button
      {...props}
      icon={<CubeIcon size={16} />}
      tooltip="Example tooltip"
    />
    <Button
      {...props}
      icon={<CubeIcon size={16} />}
      iconRight
      tooltip="Example tooltip"
    />
    <Button
      {...props}
      icon={<CubeIcon size={16} />}
      /*  eslint-disable-next-line react/no-children-prop */
      children=""
      tooltip="Example tooltip"
    />
    <Button
      icon={<CubeIcon size={16} />}
      /*  eslint-disable-next-line react/no-children-prop */
      children=""
      tooltip="Example tooltip"
      onClick={e => console.log(e)}
      tag="div"
    />
  </HWrapper>
);

const Template: Story<ButtonProps> = props => {
  return (
    <VWrapper>
      <ButtonRow {...props} />
      <ButtonRow {...props} disabled />
      <ButtonRow {...props} loading />
    </VWrapper>
  );
};

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
