import React, { useCallback, useState } from 'react';

import { useEffect } from '@storybook/addons';

import {
  Flag,
  ICountryOption,
  IGetCountriesResponse,
  IRegionCountryOption,
  regions,
} from '../../components/Select';

export const useCountryOptions = ({
  baseFlagUrl,
  dashboardUrl,
}: {
  baseFlagUrl: string | null;
  dashboardUrl: string | null;
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
            <Flag
              countryCode={country.code}
              compact
              src={`${baseFlagUrl}/${country.code.toLowerCase()}.svg`}
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
  }, [baseFlagUrl, dashboardUrl]);

  useEffect(() => {
    requestCountries();
  }, [requestCountries]);

  return { countryOptions, regionCountryOptions };
};
