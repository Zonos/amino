import React, { useCallback, useState } from 'react';

import { useEffect } from '@storybook/addons';

import {
  CountryIcon,
  ICountryCode,
  ICountryIconScale,
} from 'icons/country/CountryIcon';

import {
  ICountryOption,
  IGetCountriesResponse,
  IRegionCountryOption,
  regions,
} from '../../components/Select';

export const useCountryOptions = ({
  dashboardUrl,
  iconScale = 'small',
}: {
  dashboardUrl: string | null;
  iconScale?: ICountryIconScale;
}) => {
  const [countryOptions, setCountryOptions] = useState<ICountryOption[]>([]);
  const [regionCountryOptions, setRegionCountryOptions] = useState<
    IRegionCountryOption[]
  >([]);

  const requestCountries = useCallback(async () => {
    const response = await fetch(`${dashboardUrl}/api/address/getCountries`);
    if (response.ok) {
      const json: IGetCountriesResponse = await response.json();
      const countries = Object.entries(json)
        .map(([, country]) => ({
          ...country,
          label: country.displayName,
          icon: (
            <CountryIcon
              scale={iconScale}
              type={country.code as ICountryCode}
            />
          ),
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
  }, [dashboardUrl, iconScale]);

  useEffect(() => {
    requestCountries();
  }, [requestCountries]);

  return { countryOptions, regionCountryOptions };
};
