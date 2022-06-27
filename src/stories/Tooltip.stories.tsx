import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'src/components/button/Button';
import { CoverSheet } from 'src/components/cover-sheet/CoverSheet';
import { Dialog } from 'src/components/dialog/Dialog';
import { Select } from 'src/components/select/Select';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Tooltip, TooltipProps } from 'src/components/tooltip/Tooltip';
import { CubeIcon } from 'src/icons/CubeIcon';
import { truncateText } from 'src/utils/truncateText';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const TransparentCoverSheet = styled(CoverSheet)`
  opacity: 0.9 !important;
`;
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

const TopRow = (props: ButtonProps) => {
  return (
    <>
      <HeadingTooltip>
        <Button {...props}>Has heading</Button>
      </HeadingTooltip>
      <WithoutHeadingTooltip subtitle="This example shows a tooltip with enough characters to fill an alphabet soup when you are sick and then share some with your friends, so it should be truncated.">
        <Button {...props} iconRight>
          Without heading truncated subtitle
        </Button>
      </WithoutHeadingTooltip>
      <WithoutHeadingTooltip>
        <StyledButton {...props} tag="div" onClick={e => e.preventDefault()}>
          Without heading
        </StyledButton>
      </WithoutHeadingTooltip>
    </>
  );
};

const BottomRow = ({
  toggleCoversheet,
  toggleDialog,
  ...props
}: ButtonProps & {
  toggleCoversheet: () => void;
  toggleDialog: () => void;
}) => {
  const [showSelect, setShowSelect] = useState(false);

  return (
    <>
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
        <StyledButton {...props} onClick={toggleCoversheet}>
          Test coversheet z-index
        </StyledButton>
      </Tooltip>
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
        <StyledButton {...props} onClick={toggleDialog}>
          Test dialog z-index
        </StyledButton>
      </Tooltip>
      {showSelect ? (
        <Select
          label="currencies"
          menuIsOpen
          onChange={option => !option && setShowSelect(false)}
          options={[
            {
              label: 'US Dollar (USD)',
              value: 'USD',
            },
            {
              label: 'European Euro (EUR)',
              value: 'EUR',
            },
            {
              label: 'Japanese Yen (JPY)',
              value: 'JPY',
            },
            {
              label: 'British Pound (GBP)',
              value: 'GBP',
            },
            {
              label: 'Swiss Frank (CHF)',
              value: 'CHF',
            },
            {
              label: 'Australian Dollar (AUD)',
              value: 'AUD',
            },
            {
              label: 'New Zealand Dollar (NZD)',
              value: 'NZD',
            },
          ]}
          value={{
            label: 'US Dollar (USD)',
            value: 'USD',
          }}
        />
      ) : (
        <HeadingTooltip>
          <Button {...props} onClick={() => setShowSelect(true)}>
            Test select z-index
          </Button>
        </HeadingTooltip>
      )}
    </>
  );
};

const Template: Story<ButtonProps> = props => {
  const [coversheetOpen, setCoversheetOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <VWrapper>
        <VStack spacing="space-quarter">
          <HWrapper>
            <TopRow {...props} />
          </HWrapper>
          <HWrapper>
            <BottomRow
              {...props}
              toggleCoversheet={() => setCoversheetOpen(!coversheetOpen)}
              toggleDialog={() => setDialogOpen(!dialogOpen)}
            />
          </HWrapper>
        </VStack>
        <VStack spacing="space-quarter">
          <HWrapper>
            <TopRow {...props} disabled />
          </HWrapper>
          <HWrapper>
            <BottomRow
              {...props}
              disabled
              toggleCoversheet={() => setCoversheetOpen(!coversheetOpen)}
              toggleDialog={() => setDialogOpen(!dialogOpen)}
            />
          </HWrapper>
        </VStack>
        <VStack spacing="space-quarter">
          <HWrapper>
            <TopRow {...props} loading />
          </HWrapper>
          <HWrapper>
            <BottomRow
              {...props}
              loading
              toggleCoversheet={() => setCoversheetOpen(!coversheetOpen)}
              toggleDialog={() => setDialogOpen(!dialogOpen)}
            />
          </HWrapper>
        </VStack>
      </VWrapper>
      <TransparentCoverSheet
        actions={
          <HeadingTooltip>
            <Button {...props} disabled>
              Has heading
            </Button>
          </HeadingTooltip>
        }
        label="Coversheet"
        open={coversheetOpen}
        onClose={() => setCoversheetOpen(false)}
      >
        <VStack>
          <Text>
            This coversheet is slightly transparent to allow for testing whether
            the underlying tooltip will display on top of the coversheet.
            Coversheet z-index: 990
          </Text>
        </VStack>
      </TransparentCoverSheet>
      <Dialog
        actions={
          <HeadingTooltip>
            <Button {...props} disabled>
              Has heading
            </Button>
          </HeadingTooltip>
        }
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <VStack>
          <Text>
            This dialog is overlapping disabled buttons to allow for testing
            whether the underlying tooltip will display on top of the dialog.
            Dialog z-index: 1001.
          </Text>
        </VStack>
      </Dialog>
    </>
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
