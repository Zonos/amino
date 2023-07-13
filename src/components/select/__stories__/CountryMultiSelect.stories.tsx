import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import {
  type CountryMultiSelectProps,
  CountryMultiSelect,
} from 'src/components/select/CountryMultiSelect';
import type { ICountryOption } from 'src/types/ICountry';
import styled from 'styled-components';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

type RandomCountryCode = 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AT';

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

const CountryMultiSelectTemplate: StoryFn<CountryMultiSelectProps> = (
  props: CountryMultiSelectProps,
) => {
  const { dashboardUrl } = getCountryUrls();
  const [value, setValue] = useState<string[]>([]);
  const countryOptions = useCountryOptions({
    dashboardUrl,
  });
  const [typedValue, setTypedValue] = useState<RandomCountryCode[]>([]);
  const stronglyTypedCountries =
    countryOptions as ICountryOption<RandomCountryCode>[];
  return (
    <>
      <CountryMultiSelect
        {...props}
        countryOptions={countryOptions}
        onChange={setValue}
        unavailableCountries={[{ code: 'DZ', message: '(restricted)' }]}
        value={value}
      />
      <br />
      {/* Check for correctly returning type for onChange and value when there is strongly typed `countryOptions` passed in */}
      <CountryMultiSelect
        countryOptions={stronglyTypedCountries}
        onChange={setTypedValue}
        unavailableCountries={[{ code: 'DZ', message: '(restricted)' }]}
        value={typedValue}
      />
    </>
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
