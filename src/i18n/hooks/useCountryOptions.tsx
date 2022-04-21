import React, { useCallback, useEffect, useState } from 'react';

import {
  ICountryOption,
  IGetCountriesResponse,
  IRegionCountryOption,
  regions,
} from 'components/Select';

import { CountryIcon, ICountryCode, ICountryIconScale } from '../CountryIcon';
import { countryPhoneCodes } from '../countryPhoneCodes';

export const prepCountryOptions = ({ json }: { json: IGetCountriesResponse }) =>
  Object.entries(json)
    .map(([, country]) => ({
      ...country,
      label: country.displayName,
      phoneCode:
        countryPhoneCodes.find(x => x.code === country.code)?.phoneCode || [],
      value: country.code,
    }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName));

export const addFlagIcons = ({
  options,
  iconScale = 'small',
}: {
  options: ICountryOption[];
  iconScale?: ICountryIconScale;
}): ICountryOption[] =>
  options.map(option => ({
    ...option,
    icon: (
      <CountryIcon code={option.code as ICountryCode} iconScale={iconScale} />
    ),
  }));

export const prepRegionCountryOptions = ({
  countries,
}: {
  countries: ICountryOption[];
}) =>
  regions.map(region => ({
    label: region,
    options: countries.filter(x => x.region === region),
  }));

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
      const options = prepCountryOptions({ json });
      const countries = addFlagIcons({ iconScale, options });
      setCountryOptions(countries);
      const regionCountries = prepRegionCountryOptions({ countries });
      setRegionCountryOptions(regionCountries);
    }
  }, [dashboardUrl, iconScale]);

  useEffect(() => {
    requestCountries();
  }, [requestCountries]);

  return { countryOptions, regionCountryOptions };
};
