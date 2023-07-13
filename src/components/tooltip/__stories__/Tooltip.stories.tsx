import { useEffect, useRef, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { type ButtonProps, Button } from 'src/components/button/Button';
import { CoverSheet } from 'src/components/cover-sheet/CoverSheet';
import { Dialog } from 'src/components/dialog/Dialog';
import { Select } from 'src/components/select/Select';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { type TooltipProps, Tooltip } from 'src/components/tooltip/Tooltip';
import type { Theme } from 'src/types';
import { truncateText } from 'src/utils/truncateText';

const TransparentCoverSheet = styled(CoverSheet)`
  /* framer-motion inlines the opacity style */
  opacity: 0.9 !important;
`;
const StyledButton = styled(Button)``;
const ButtonMeta: Meta = {
  component: Tooltip,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=196%3A10758&t=2qWmuoXr8klMzpYH-0',
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

type ButtonPropWithTooltipOption = Omit<ButtonProps, 'background'> &
  Pick<TooltipProps, 'background' | 'themeOverride'>;

const HeadingTooltip = ({
  children,
  subtitle = 'This is an example of a tooltip with a heading. Tooltips with a heading can have three lines total.',
  ...props
}: Partial<TooltipProps>) => (
  <Tooltip
    {...props}
    showTooltip
    subtitle={subtitle}
    title="Tooltip with Heading"
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
            addEllipsis: false,
            length: 128,
            text: subtitle,
          })
        : subtitle
    }
  >
    {children}
  </Tooltip>
);

const TopRow = ({
  background,
  themeOverride,
  ...props
}: ButtonPropWithTooltipOption) => (
  <>
    <HeadingTooltip background={background} themeOverride={themeOverride}>
      <Button {...props}>Has heading</Button>
    </HeadingTooltip>
    <WithoutHeadingTooltip
      background={background}
      subtitle="This example shows a tooltip with enough characters to fill an alphabet soup when you are sick and then share some with your friends, so it should be truncated."
      themeOverride={themeOverride}
    >
      <Button {...props} iconRight>
        Without heading truncated subtitle
      </Button>
    </WithoutHeadingTooltip>
    <WithoutHeadingTooltip
      background={background}
      themeOverride={themeOverride}
    >
      <StyledButton {...props} onClick={e => e.preventDefault()} tag="div">
        Without heading
      </StyledButton>
    </WithoutHeadingTooltip>
  </>
);

const BottomRow = ({
  background,
  themeOverride,
  toggleCoversheet,
  toggleDialog,
  ...props
}: ButtonPropWithTooltipOption & {
  toggleCoversheet: () => void;
  toggleDialog: () => void;
}) => {
  const [showSelect, setShowSelect] = useState(false);

  return (
    <>
      <Tooltip
        background={background}
        showTooltip
        subtitle={
          <VStack>
            <Text>A</Text>
            <Text>Custom</Text>
            <Text>Subtitle</Text>
          </VStack>
        }
        themeOverride={themeOverride}
      >
        <StyledButton {...props} onClick={toggleCoversheet}>
          Test coversheet z-index
        </StyledButton>
      </Tooltip>
      <Tooltip
        background={background}
        showTooltip
        subtitle={
          <VStack>
            <Text>A</Text>
            <Text>Custom</Text>
            <Text>Subtitle</Text>
          </VStack>
        }
        themeOverride={themeOverride}
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
        <HeadingTooltip background={background} themeOverride={themeOverride}>
          <Button {...props} onClick={() => setShowSelect(true)}>
            Test select z-index
          </Button>
        </HeadingTooltip>
      )}
    </>
  );
};

const Template: StoryFn<ButtonPropWithTooltipOption> = ({
  background,
  ...props
}) => {
  const [coversheetOpen, setCoversheetOpen] = useState(false);
  const [themeOverride, setThemeOverride] = useState<Theme>('day');
  const [dialogOpen, setDialogOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const themeAttribute = wrapperRef.current
        .closest('[data-theme]')
        ?.getAttribute('data-theme');
      setThemeOverride((themeAttribute as Theme) || 'day');
    }
  }, []);

  return (
    <>
      <VWrapper ref={wrapperRef}>
        <VStack spacing={8}>
          <HWrapper>
            <TopRow
              background={background}
              {...props}
              themeOverride={themeOverride}
            />
          </HWrapper>
          <HWrapper>
            <BottomRow
              background={background}
              themeOverride={themeOverride}
              {...props}
              toggleCoversheet={() => setCoversheetOpen(!coversheetOpen)}
              toggleDialog={() => setDialogOpen(!dialogOpen)}
            />
          </HWrapper>
        </VStack>
        <VStack spacing={8}>
          <HWrapper>
            <TopRow
              background={background}
              themeOverride={themeOverride}
              {...props}
              disabled
            />
          </HWrapper>
          <HWrapper>
            <BottomRow
              background={background}
              themeOverride={themeOverride}
              {...props}
              disabled
              toggleCoversheet={() => setCoversheetOpen(!coversheetOpen)}
              toggleDialog={() => setDialogOpen(!dialogOpen)}
            />
          </HWrapper>
        </VStack>
        <VStack spacing={8}>
          <HWrapper>
            <TopRow
              background={background}
              themeOverride={themeOverride}
              {...props}
              loading
            />
          </HWrapper>
          <HWrapper>
            <BottomRow
              background={background}
              themeOverride={themeOverride}
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
          <HeadingTooltip background={background} themeOverride={themeOverride}>
            <Button {...props} disabled>
              Has heading
            </Button>
          </HeadingTooltip>
        }
        label="Coversheet"
        onClose={() => setCoversheetOpen(false)}
        open={coversheetOpen}
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
          <HeadingTooltip background={background} themeOverride={themeOverride}>
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

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  intent: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  intent: 'warning',
};

export const Outline = Template.bind({});
Outline.args = {
  intent: 'outline',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  intent: 'link',
};

export const Subtle = Template.bind({});
Subtle.args = {
  intent: 'subtle',
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Back',
  intent: 'text',
};
