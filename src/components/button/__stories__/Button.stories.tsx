import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { CubeIcon } from 'src/icons/CubeIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledButton = styled(Button)``;
const ButtonMeta: Meta = {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=81%3A1128&t=erzegCytT9AfSn9f-0',
    },
  },
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
  margin: ${theme.space16} 0;
  align-items: center;
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
    <HWrapper>
      <Button
        {...props}
        size="lg"
        intent={intent}
        disabled={disabled}
        loading={loading}
      />
      <Button
        {...props}
        size="md"
        intent={intent}
        disabled={disabled}
        loading={loading}
      />
      <Button
        {...props}
        size="sm"
        intent={intent}
        disabled={disabled}
        loading={loading}
      />
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

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  children: 'Example button',
};

export const Danger = Template.bind({});
Danger.args = {
  intent: 'danger',
  children: 'Example button',
};

export const Warning = Template.bind({});
Warning.args = {
  intent: 'warning',
  children: 'Example button',
};

export const Outline = Template.bind({});
Outline.args = {
  intent: 'outline',
  children: 'Example button',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  intent: 'link',
  children: 'Link button',
};

export const Subtle = Template.bind({});
Subtle.args = {
  intent: 'subtle',
  children: 'Example button',
};

export const TextButton = Template.bind({});
TextButton.args = {
  intent: 'text',
  children: 'Back',
};
