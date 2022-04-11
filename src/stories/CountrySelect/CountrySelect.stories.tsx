import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { ICountryOption, Select, SelectProps } from 'components/Select';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountryMultiSelectMeta: Meta = {
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

export default CountryMultiSelectMeta;

const CountryMultiSelectTemplate: Story<SelectProps<ICountryOption>> = ({
  ...props
}: SelectProps<ICountryOption>) => {
  const { dashboardUrl } = getCountryUrls();
  const [value, setValue] = useState<ICountryOption | null>(null);
  const { countryOptions } = useCountryOptions({
    dashboardUrl,
  });
  return (
    <Select
      {...props}
      icon={value?.icon}
      label="Select country"
      options={countryOptions}
      onChange={setValue}
      value={value}
    />
  );
};

export const BasicCountrySelect = CountryMultiSelectTemplate.bind({});

BasicCountrySelect.args = {};

BasicCountrySelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
