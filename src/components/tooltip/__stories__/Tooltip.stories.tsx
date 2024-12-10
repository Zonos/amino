import { useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { CoverSheet } from 'src/components/cover-sheet/CoverSheet';
import { Dialog } from 'src/components/dialog/Dialog';
import { Flex } from 'src/components/flex/Flex';
import { Select } from 'src/components/select/Select';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Thumbnail } from 'src/components/thumbnail/Thumbnail';
import { Tooltip, type TooltipProps } from 'src/components/tooltip/Tooltip';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import type { SelectOption } from 'src/types/SelectOption';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

const Template: StoryFn<TooltipProps> = props => {
  const { aminoTheme } = useAminoTheme();

  return (
    <Flex flexDirection="column" gap={40}>
      <Flex>
        <Text type="bold-label">Default:</Text>
        <Tooltip {...props} />
      </Flex>
      <Flex>
        <Text type="bold-label">Match theme:</Text>
        <Tooltip {...props} themeOverride={aminoTheme} />
      </Flex>
      <Flex>
        <Text type="bold-label">Inverse theme:</Text>
        <Tooltip
          {...props}
          themeOverride={aminoTheme === 'night' ? 'day' : 'night'}
        />
      </Flex>
    </Flex>
  );
};

const meta: Meta<TooltipProps> = {
  component: Tooltip,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=196%3A10758&t=2qWmuoXr8klMzpYH-0',
    },
  },
  render: Template,
};

export default meta;

export const Basic: StoryObj<TooltipProps> = {
  args: {
    children: <Text>Hover over me</Text>,
    title: 'This is a tooltip',
  },
};

export const WithSubtitle: StoryObj<TooltipProps> = {
  args: {
    children: <Text>Hover over me</Text>,
    subtitle: 'This is a subtitle',
    title: 'This is a tooltip',
  },
};

export const SubtitleOnly: StoryObj<TooltipProps> = {
  args: {
    children: <Text>Hover over me</Text>,
    subtitle: 'This is a subtitle',
  },
};

export const Element: StoryObj<TooltipProps> = {
  args: {
    children: <InfoIcon />,
    title: (
      <Flex flexDirection="column">
        <Text>A</Text>
        <Text>B</Text>
      </Flex>
    ),
  },
};

export const PlainText: StoryObj<TooltipProps> = {
  args: {
    children: <InfoIcon />,
    title: (
      <Flex flexDirection="column">
        <strong>I am strong</strong>
      </Flex>
    ),
  },
};

export const Complex: StoryObj<TooltipProps> = {
  args: {
    children: <InfoIcon />,
    title: (
      <Flex flexDirection="column">
        <Flex alignItems="center">
          <Thumbnail icon={<InfoIcon />} shape="rounded" />
          <Text>Hello children</Text>
        </Flex>
        <Flex alignItems="center">
          <Thumbnail icon={<InfoIcon />} shape="rounded" />
          <Text>Hello children</Text>
        </Flex>
        <Button
          href="https://mui.com/material-ui/react-tooltip"
          icon={<ArrowRightIcon />}
          iconRight
          rel="noopener noreferrer"
          tag="a"
          target="_blank"
          variant="link"
        >
          Link
        </Button>
      </Flex>
    ),
  },
};

const currencyOptions: SelectOption<string>[] = [
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
];

export const TestingZIndex: StoryFn<TooltipProps> = props => {
  const [coversheetOpen, setCoversheetOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  return (
    <>
      <Flex flexDirection="column">
        <Flex>
          <Tooltip
            {...props}
            title={
              <VStack>
                <Text>A</Text>
                <Text>Custom</Text>
                <Text>Subtitle</Text>
              </VStack>
            }
          >
            <Button onClick={() => setCoversheetOpen(!coversheetOpen)}>
              Test coversheet z-index
            </Button>
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip
            {...props}
            title={
              <VStack>
                <Text>A</Text>
                <Text>Custom</Text>
                <Text>Subtitle</Text>
              </VStack>
            }
          >
            <Button onClick={() => setDialogOpen(!dialogOpen)}>
              Test dialog z-index
            </Button>
          </Tooltip>
        </Flex>

        <Flex>
          {showSelect ? (
            <Select
              label="currencies"
              menuIsOpen
              onChange={option => !option && setShowSelect(false)}
              options={currencyOptions}
              value={currencyOptions.filter(o => o.value === 'USD')}
            />
          ) : (
            <Tooltip {...props} title="Hey">
              <Button onClick={() => setShowSelect(true)}>
                Test select z-index
              </Button>
            </Tooltip>
          )}
        </Flex>
      </Flex>

      <CoverSheet
        actions={
          <Tooltip {...props} title="Heya">
            <Button disabled>Has heading</Button>
          </Tooltip>
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
      </CoverSheet>
      <Dialog
        actions={
          <Tooltip {...props} title="Heya">
            <Button disabled>Has heading</Button>
          </Tooltip>
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
