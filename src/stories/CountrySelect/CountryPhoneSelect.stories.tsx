import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { ICountryOption, Select, SelectProps } from 'components/Select';
import { CountryPhoneSelect } from 'components/Select/CountryPhoneSelect';
import { useCountryOptions } from 'hooks';

import { getCountryUrls } from './getCountryUrls';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountryPhoneSelectMeta: Meta = {
  title: 'Amino/CountryPhoneSelect',
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

export default CountryPhoneSelectMeta;

const CountryPhoneSelectTemplate: Story<SelectProps<ICountryOption>> = ({
  ...props
}: SelectProps<ICountryOption>) => {
  const { dashboardUrl } = getCountryUrls();
  const [phoneCountry, setPhoneCountry] = useState<ICountryOption | null>(null);
  const [phone, setPhone] = useState('1');
  const { countryOptions } = useCountryOptions({
    dashboardUrl,
  });
  return (
    <CountryPhoneSelect
      {...props}
      countryOptions={countryOptions}
      phone={phone}
      phoneCountry={phoneCountry}
      setPhone={setPhone}
      setPhoneCountry={setPhoneCountry}
    />
  );
};

export const BasicCountryPhoneSelect = CountryPhoneSelectTemplate.bind({});

BasicCountryPhoneSelect.args = {};

BasicCountryPhoneSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
