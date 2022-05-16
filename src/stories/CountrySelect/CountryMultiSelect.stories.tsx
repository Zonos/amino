import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  CountryMultiSelect,
  CountryMultiSelectProps,
} from 'src/components/Select/CountryMultiSelect';
import { ICountryOption } from 'src/types/ICountry';
import { prepRegionCountryOptions } from 'src/utils/prepRegionCountryOptions';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountryMultiSelectMeta: Meta = {
  title: 'Amino/CountryMultiSelect',
  component: CountryMultiSelect,
  decorators: [
    withDesign,
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
  const [value, setValue] = useState<ICountryOption[]>([]);
  const countryOptions = useCountryOptions({
    dashboardUrl,
  });
  return (
    <CountryMultiSelect
      {...props}
      menuIsOpen
      regionCountryOptions={prepRegionCountryOptions(
        countryOptions.map((x, index) => {
          const isDisabled = !!(index % 2);
          return {
            ...x,
            isDisabled,
            labelDescription: isDisabled ? '(restricted)' : '',
          };
        })
      )}
      onChange={setValue}
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
