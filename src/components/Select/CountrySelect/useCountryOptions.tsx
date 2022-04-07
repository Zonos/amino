import { useCallback, useState } from 'react';

import { useEffect } from '@storybook/addons';

import {
  ICountryOption,
  IGetCountriesResponse,
  IRegionCountryOption,
  regions,
} from './ICountry';

export interface CountryMultiSelectProps {}

export const useCountryOptions = () => {
  const [countryOptions, setCountryOptions] = useState<ICountryOption[]>([]);
  const [regionCountryOptions, setRegionCountryOptions] = useState<
    IRegionCountryOption[]
  >([]);

  const requestCountries = useCallback(async () => {
    const response = await fetch(
      `${process.env.STORYBOOK_ZONOS_DASHBOARD_URL}/api/address/getCountries`
    );
    if (response.ok) {
      const json: IGetCountriesResponse = await response.json();
      const countries = Object.entries(json)
        .map(([, country]) => ({
          ...country,
          label: country.displayName,
          value: country.code,
        }))
        .sort((a, b) => a.displayName.localeCompare(b.displayName));
      setCountryOptions(countries);
      const regionCountries = regions.map(region => ({
        label: region,
        options: countries.filter(x => x.region === region),
      }));
      setRegionCountryOptions(regionCountries);
    }
  }, []);

  useEffect(() => {
    requestCountries();
  }, [requestCountries]);

  return { countryOptions, regionCountryOptions };
};
