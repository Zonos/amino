import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'src/components/button/Button';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Tooltip, TooltipProps } from 'src/components/tooltip/Tooltip';
import { CubeIcon } from 'src/icons/CubeIcon';
import { truncateText } from 'src/utils/truncateText';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const StyledButton = styled(Button)``;
const ButtonMeta: Meta = {
  title: 'Amino/Tooltip',
  component: Tooltip,
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

const HeadingTooltip = ({
  children,
  subtitle = 'This is an example of a tooltip with a heading. Tooltips with a heading can have three lines total.',
  ...props
}: Partial<TooltipProps>) => (
  <Tooltip
    {...props}
    showTooltip
    title="Tooltip with Heading"
    subtitle={subtitle}
  >
    {children}
  </Tooltip>
);

const WithoutHeadingTooltip = ({
  children,
  subtitle = 'Tooltips should stay under 128 characters and be limited to two lines. This example shows a tooltip with the max amount of characters.',
  ...props
}: Partial<TooltipProps>) => (
  <Tooltip
    {...props}
    showTooltip
    subtitle={
      typeof subtitle === 'string'
        ? truncateText({
            length: 128,
            addEllipses: false,
            text: subtitle,
          })
        : subtitle
    }
  >
    {children}
  </Tooltip>
);

const ButtonRow = (props: ButtonProps) => (
  <HWrapper>
    <HeadingTooltip>
      <Button {...props}>Has heading</Button>
    </HeadingTooltip>
    <HeadingTooltip>
      <Button {...props} icon={<CubeIcon size={16} />}>
        Has heading
      </Button>
    </HeadingTooltip>
    <WithoutHeadingTooltip subtitle="This example shows a tooltip with enough characters to fill an alphabet soup when you are sick and then share some with your friends, so it should be truncated.">
      <Button {...props} icon={<CubeIcon size={16} />} iconRight>
        Without heading truncated subtitle
      </Button>
    </WithoutHeadingTooltip>
    <WithoutHeadingTooltip>
      <StyledButton tag="div" onClick={e => e.preventDefault()}>
        Without heading
      </StyledButton>
    </WithoutHeadingTooltip>
    <Tooltip
      showTooltip
      subtitle={
        <VStack>
          <Text>A</Text>
          <Text>Custom</Text>
          <Text>Subtitle</Text>
        </VStack>
      }
    >
      <StyledButton>Custom subtitle</StyledButton>
    </Tooltip>
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
