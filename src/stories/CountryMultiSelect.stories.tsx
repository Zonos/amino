import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import {
  CountryMultiSelect,
  CountryMultiSelectProps,
} from 'components/Select/CountrySelect/CountryMultiSelect';
import { ICountryOption } from 'components/Select/CountrySelect/ICountry';
import { useCountryOptions } from 'components/Select/CountrySelect/useCountryOptions';

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
  const [value, setValue] = useState<ICountryOption[]>([]);
  const { regionCountryOptions } = useCountryOptions();
  return (
    <CountryMultiSelect
      {...props}
      regionCountryOptions={regionCountryOptions}
      onChange={setValue}
      value={value}
    />
  );
};

export const BasicCountryMultiSelect = CountryMultiSelectTemplate.bind({});

BasicCountryMultiSelect.args = {
  menuIsOpen: true,
};

BasicCountryMultiSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
