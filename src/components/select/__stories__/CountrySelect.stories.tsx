import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  CountrySelect,
  CountrySelectProps,
} from 'src/components/select/CountrySelect';
import styled from 'styled-components';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountrySelectMeta: Meta = {
  component: CountrySelect,
  decorators: [
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default CountrySelectMeta;

const CountrySelectTemplate: Story<CountrySelectProps> = ({ ...props }) => {
  const { dashboardUrl } = getCountryUrls();
  const [value, setValue] = useState<string | null>(null);
  const countryOptions = useCountryOptions({
    dashboardUrl,
  });
  return (
    <CountrySelect
      {...props}
      countryOptions={countryOptions}
      onChange={option => setValue(option?.value || null)}
      value={value}
    />
  );
};

export const BasicCountrySelect = CountrySelectTemplate.bind({});

BasicCountrySelect.args = {};

BasicCountrySelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
