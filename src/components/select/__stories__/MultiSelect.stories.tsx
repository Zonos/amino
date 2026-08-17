import { useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import {
  MultiSelect,
  type MultiSelectProps,
} from 'src/components/select/MultiSelect';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { InfoIcon } from 'src/icons/InfoIcon';
import { PlayCircleIcon } from 'src/icons/PlayCircleIcon';

const SelectMeta: Meta = {
  component: MultiSelect,
  decorators: [
    Component => (
      <div
        style={{
          width: 412,
        }}
      >
        <Component />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
    },
  },
};

export default SelectMeta;

const MultiSelectTemplate: StoryFn<MultiSelectProps> = ({
  value: _value,
  ...props
}: MultiSelectProps) => {
  const [value, setValue] = useState(_value);
  return (
    <MultiSelect
      {...props}
      hideSelectedOptions={false}
      menuIsOpen
      onChange={setValue}
      value={value}
    />
  );
};

export const Basic = MultiSelectTemplate.bind({});
Basic.args = {
  label: 'Currencies',
  options: [
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
  ],
  value: [],
};

export const ActiveMultiSelectWithCutoff = MultiSelectTemplate.bind({});
ActiveMultiSelectWithCutoff.args = {
  label: 'Currencies',
  options: [
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
  ],
  value: [
    {
      label: 'US Dollar (USD)',
      value: 'USD',
    },
    {
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
    {
      label: 'British Pound (GBP)',
      value: 'GBP',
    },
    {
      label: 'Australian Dollar (AUD)',
      value: 'AUD',
    },
    {
      label: 'New Zealand Dollar (NZD)',
      value: 'NZD',
    },
  ],
};

export const LabelWithTooltip = MultiSelectTemplate.bind({});
LabelWithTooltip.args = {
  label: (
    <span className="inline-flex items-center gap-1 align-middle">
      Currencies
      <Tooltip title="Select every currency you want to display prices in.">
        <InfoIcon color="gray600" inlineBlock size={14} />
      </Tooltip>
    </span>
  ),
  options: [
    { label: 'US Dollar (USD)', value: 'USD' },
    { label: 'European Euro (EUR)', value: 'EUR' },
    { label: 'Japanese Yen (JPY)', value: 'JPY' },
    { label: 'British Pound (GBP)', value: 'GBP' },
  ],
  value: [{ label: 'US Dollar (USD)', value: 'USD' }],
};

export const ActiveMultiSelectWithCutoffWithIcon = MultiSelectTemplate.bind({});
ActiveMultiSelectWithCutoffWithIcon.args = {
  icon: <PlayCircleIcon size={24} />,
  label: 'Currencies',
  options: [
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
  ],
  value: [
    {
      label: 'US Dollar (USD)',
      value: 'USD',
    },
    {
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
    {
      label: 'British Pound (GBP)',
      value: 'GBP',
    },
    {
      label: 'Australian Dollar (AUD)',
      value: 'AUD',
    },
    {
      label: 'New Zealand Dollar (NZD)',
      value: 'NZD',
    },
  ],
};

const OpenableMenuTemplate: StoryFn<MultiSelectProps> = ({
  value: _value,
  ...props
}: MultiSelectProps) => {
  const [value, setValue] = useState(_value);
  return <MultiSelect {...props} onChange={setValue} value={value} />;
};

/**
 * `userEvent.click(option)` dispatches straight at the element it is handed, so
 * it would never reproduce what a real pointer does: hit-test the topmost
 * element at those coordinates. Options render a `<label>` on top of the option
 * row, and that is the difference that matters here — clicking the label runs
 * native label activation, which steals focus from react-select's search input.
 */
const clickAtCenterOf = async (element: Element) => {
  const { height, left, top, width } = element.getBoundingClientRect();
  const topmost = document.elementFromPoint(left + width / 2, top + height / 2);
  await userEvent.click(topmost || element);
};

/**
 * `closeMenuOnSelect={false}` has to survive the option checkboxes: each option
 * renders a `<label>`, and native label activation moves focus to the hidden
 * checkbox input, blurring react-select's search input — and a blur closes the
 * menu no matter what `closeMenuOnSelect` says. This story picks two options in
 * a row and asserts that the menu stays open and focus stays in the input.
 */
export const KeepsMenuOpenOnSelect: StoryObj<MultiSelectProps> = {
  args: {
    closeMenuOnSelect: false,
    hideSelectedOptions: false,
    label: 'Currencies',
    options: [
      { label: 'US Dollar (USD)', value: 'USD' },
      { label: 'European Euro (EUR)', value: 'EUR' },
      { label: 'Japanese Yen (JPY)', value: 'JPY' },
    ],
    value: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('combobox'));

    await clickAtCenterOf(
      await canvas.findByRole('option', { name: 'US Dollar (USD)' }),
    );
    expect(canvas.getByRole('listbox')).toBeInTheDocument();
    expect(canvas.getByRole('combobox')).toHaveFocus();

    await clickAtCenterOf(
      canvas.getByRole('option', { name: 'Japanese Yen (JPY)' }),
    );
    expect(canvas.getByRole('listbox')).toBeInTheDocument();
    expect(canvas.getByRole('combobox')).toHaveFocus();

    expect(
      canvas.getByRole('checkbox', { name: 'US Dollar (USD)' }),
    ).toBeChecked();
    expect(
      canvas.getByRole('checkbox', { name: 'Japanese Yen (JPY)' }),
    ).toBeChecked();
  },
  render: OpenableMenuTemplate,
};

/**
 * The other half of the contract: making the option checkbox click-through must
 * not swallow the close. With `closeMenuOnSelect` the click has to reach
 * react-select's own option handler, which selects the option *and* closes the
 * menu.
 */
export const ClosesMenuOnSelect: StoryObj<MultiSelectProps> = {
  args: {
    closeMenuOnSelect: true,
    hideSelectedOptions: false,
    label: 'Currencies',
    options: [
      { label: 'US Dollar (USD)', value: 'USD' },
      { label: 'European Euro (EUR)', value: 'EUR' },
      { label: 'Japanese Yen (JPY)', value: 'JPY' },
    ],
    value: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('combobox'));

    await clickAtCenterOf(
      await canvas.findByRole('option', { name: 'US Dollar (USD)' }),
    );

    expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole('combobox'));
    expect(
      await canvas.findByRole('checkbox', { name: 'US Dollar (USD)' }),
    ).toBeChecked();
  },
  render: OpenableMenuTemplate,
};
