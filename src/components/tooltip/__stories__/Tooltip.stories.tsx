import { useEffect, useRef, useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { CoverSheet } from 'src/components/cover-sheet/CoverSheet';
import { Dialog } from 'src/components/dialog/Dialog';
import { Flex } from 'src/components/flex/Flex';
import { Select } from 'src/components/select/Select';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Thumbnail } from 'src/components/thumbnail/Thumbnail';
import { type TooltipProps, Tooltip } from 'src/components/tooltip/Tooltip';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import type { Theme } from 'src/types';
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
    children: 'This is a tooltip',
    triggerComponent: <Text>Hover over me</Text>,
  },
};

export const Element: StoryObj<TooltipProps> = {
  args: {
    children: (
      <Flex flexDirection="column">
        <Text>A</Text>
        <Text>B</Text>
      </Flex>
    ),
    triggerComponent: <InfoIcon />,
  },
};

export const Complex: StoryObj<TooltipProps> = {
  args: {
    children: (
      <Flex flexDirection="column">
        <Flex>
          <Thumbnail icon={<InfoIcon />} />
          <Text>Hello children</Text>
        </Flex>
        <Flex>
          <Thumbnail icon={<InfoIcon />} />
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
    triggerComponent: <InfoIcon />,
  },
};

export const TestingZIndex: StoryFn<TooltipProps> = props => {
  const [coversheetOpen, setCoversheetOpen] = useState(false);
  const [themeOverride, setThemeOverride] = useState<Theme>('day');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
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
      <Flex flexDirection="column">
        <Flex>
          <Tooltip
            {...props}
            themeOverride={themeOverride}
            triggerComponent={
              <Button onClick={() => setCoversheetOpen(!coversheetOpen)}>
                Test coversheet z-index
              </Button>
            }
          >
            <VStack>
              <Text>A</Text>
              <Text>Custom</Text>
              <Text>Subtitle</Text>
            </VStack>
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip
            {...props}
            themeOverride={themeOverride}
            triggerComponent={
              <Button onClick={() => setDialogOpen(!dialogOpen)}>
                Test dialog z-index
              </Button>
            }
          >
            <VStack>
              <Text>A</Text>
              <Text>Custom</Text>
              <Text>Subtitle</Text>
            </VStack>
          </Tooltip>
        </Flex>

        <Flex>
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
            <Tooltip
              {...props}
              themeOverride={themeOverride}
              triggerComponent={
                <Button onClick={() => setShowSelect(true)}>
                  Test select z-index
                </Button>
              }
            >
              Hey
            </Tooltip>
          )}
        </Flex>
      </Flex>

      <CoverSheet
        actions={
          <Tooltip
            {...props}
            themeOverride={themeOverride}
            triggerComponent={<Button disabled>Has heading</Button>}
          >
            Heya
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
          <Tooltip
            {...props}
            themeOverride={themeOverride}
            triggerComponent={<Button disabled>Has heading</Button>}
          >
            Heya
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
