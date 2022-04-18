import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { FileIcon } from 'icons';

import { Select, type SelectProps } from '../components/Select';

const StyledWrapper = styled.div`
  width: 412px;
`;

const SelectMeta: Meta = {
  title: 'Amino/Select',
  component: Select,
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

const SelectTemplate: Story<SelectProps> = ({
  value: _value,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(_value);
  return <Select {...props} onChange={setValue} value={value} />;
};

export const BasicSelect = SelectTemplate.bind({});

BasicSelect.args = {
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
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

BasicSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const BasicSelectWithIcon = SelectTemplate.bind({});

BasicSelectWithIcon.args = {
  error: 'This input is required',
  helpText: 'Your currency',
  icon: <FileIcon size={20} />,
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
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

BasicSelectWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const BasicSelectWithOptionIcon = SelectTemplate.bind({});

BasicSelectWithOptionIcon.args = {
  icon: <FileIcon size={20} />,
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  options: [
    {
      label: 'US Dollar (USD)',
      icon: <FileIcon size={14} />,
      value: 'USD',
    },
    {
      icon: <FileIcon size={14} />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
};

BasicSelectWithOptionIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
