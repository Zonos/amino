import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { Select, type SelectProps } from '~/src/components/Select';
import { CountrySelect, ICountryOption, useCountryOptions } from '~/src/i18n';

import { getCountryUrls } from './getCountryUrls';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountrySelectMeta: Meta = {
  title: 'Amino/CountrySelect',
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

export default CountrySelectMeta;

const CountrySelectTemplate: Story<SelectProps<ICountryOption>> = ({
  ...props
}: SelectProps<ICountryOption>) => {
  const { dashboardUrl } = getCountryUrls();
  const [value, setValue] = useState<ICountryOption | null>(null);
  const { countryOptions } = useCountryOptions({
    dashboardUrl,
  });
  return (
    <CountrySelect
      {...props}
      countryOptions={countryOptions}
      onChange={setValue}
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
