import React, { useCallback, useEffect, useState } from 'react';

import {
  ICountryOption,
  IGetCountriesResponse,
  IRegionCountryOption,
  regions,
} from 'components/Select';
import { countryPhoneCodes } from 'components/Select/countryPhoneCodes';
import {
  CountryIcon,
  ICountryCode,
  ICountryIconScale,
} from 'icons/country/CountryIcon';

export const prepCountryOptions = ({
  iconScale,
  json,
}: {
  iconScale: ICountryIconScale;
  json: IGetCountriesResponse;
}) => {
  const countries = Object.entries(json)
    .map(([, country]) => ({
      ...country,
      label: country.displayName,
      icon: (
        <CountryIcon code={country.code as ICountryCode} scale={iconScale} />
      ),
      phoneCode:
        countryPhoneCodes.find(x => x.code === country.code)?.phoneCode || [],
      value: country.code,
    }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
  const regionCountries = regions.map(region => ({
    label: region,
    options: countries.filter(x => x.region === region),
  }));
  return { countries, regionCountries };
};

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
      const { countries, regionCountries } = prepCountryOptions({
        iconScale,
        json,
      });

      setCountryOptions(countries);

      setRegionCountryOptions(regionCountries);
    }
  }, [dashboardUrl, iconScale]);

  useEffect(() => {
    requestCountries();
  }, [requestCountries]);

  return { countryOptions, regionCountryOptions };
};
