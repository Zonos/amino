import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import {
  MultiSelect,
  MultiSelectOption,
  MultiSelectProps,
} from '../components/MultiSelect';

const StyledWrapper = styled.div`
  width: 412px;
`;

const SelectMeta: Meta = {
  title: 'Amino/MultiSelect',
  component: MultiSelect,
  decorators: [
    withDesign,
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default SelectMeta;

const MultiSelectTemplate: Story<MultiSelectProps<MultiSelectOption>> = ({
  label,
  menuIsOpen,
  options,
  selected: _selected,
}: MultiSelectProps<MultiSelectOption>) => {
  const [selected, setSelected] = useState(_selected);
  return (
    <MultiSelect
      label={label}
      menuIsOpen={menuIsOpen}
      onChange={setSelected}
      options={options}
      selected={selected}
    />
  );
};

export const ActiveMultiSelectWithCutoff = MultiSelectTemplate.bind({});

ActiveMultiSelectWithCutoff.args = {
  label: 'Currencies',
  closeMenuOnSelect: false,
  selected: [
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
};

ActiveMultiSelectWithCutoff.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
