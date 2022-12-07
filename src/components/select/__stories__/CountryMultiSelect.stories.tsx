import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  CountryMultiSelect,
  CountryMultiSelectProps,
} from 'src/components/select/CountryMultiSelect';
import styled from 'styled-components';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountryMultiSelectMeta: Meta = {
  component: CountryMultiSelect,
  decorators: [
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default CountryMultiSelectMeta;

const CountryMultiSelectTemplate: Story<CountryMultiSelectProps> = ({
  ...props
}: CountryMultiSelectProps) => {
  const { dashboardUrl } = getCountryUrls();
  const [value, setValue] = useState<string[]>([]);
  const countryOptions = useCountryOptions({
    dashboardUrl,
  });
  return (
    <CountryMultiSelect
      {...props}
      countryOptions={countryOptions}
      onChange={setValue}
      unavailableCountries={[{ code: 'DZ', message: '(restricted)' }]}
      value={value}
    />
  );
};

export const BasicCountryMultiSelect = CountryMultiSelectTemplate.bind({});

BasicCountryMultiSelect.args = {};

BasicCountryMultiSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
