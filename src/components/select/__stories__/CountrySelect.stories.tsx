import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import {
  type CountrySelectProps,
  CountrySelect,
} from 'src/components/select/CountrySelect';
import type { ICountryOption } from 'src/types/ICountry';
import styled from 'styled-components';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

type RandomCountryCode = 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AT';

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

const CountrySelectTemplate: StoryFn<CountrySelectProps> = ({ ...props }) => {
  const { dashboardUrl } = getCountryUrls();
  const [value, setValue] = useState<string | null>(null);
  const countryOptions = useCountryOptions({
    dashboardUrl,
  });
  const [typedValue, setTypedValue] = useState<RandomCountryCode | null>(null);
  const stronglyTypedCountries =
    countryOptions as ICountryOption<RandomCountryCode>[];
  return (
    <>
      <CountrySelect
        {...props}
        countryOptions={countryOptions}
        onChange={option => setValue(option?.value || null)}
        value={value}
      />
      {/* Check for correctly returning type for onChange and value when there is strongly typed `countryOptions` passed in */}
      <CountrySelect
        countryOptions={stronglyTypedCountries}
        onChange={option => setTypedValue(option?.value || null)}
        value={typedValue}
      />
    </>
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
