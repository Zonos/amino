import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  MultiSelect,
  MultiSelectProps,
} from 'src/components/select/MultiSelect';
import { PlayCircleSolidIcon } from 'src/icons/PlayCircleSolidIcon';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 412px;
`;

const SelectMeta: Meta = {
  component: MultiSelect,
  decorators: [
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default SelectMeta;

const MultiSelectTemplate: Story<MultiSelectProps> = ({
  value: _value,
  ...props
}: MultiSelectProps) => {
  const [value, setValue] = useState(_value);
  return <MultiSelect {...props} onChange={setValue} value={value} />;
};

export const ActiveMultiSelectWithCutoff = MultiSelectTemplate.bind({});

ActiveMultiSelectWithCutoff.args = {
  label: 'Currencies',
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

export const ActiveMultiSelectWithCutoffWithIcon = MultiSelectTemplate.bind({});

ActiveMultiSelectWithCutoffWithIcon.args = {
  icon: <PlayCircleSolidIcon size={20} />,
  label: 'Currencies',
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

ActiveMultiSelectWithCutoffWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
