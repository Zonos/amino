import { useCallback, useEffect, useState } from 'react';

import {
  type Flag,
  type FlagScale,
  FlagIcon,
} from 'src/icons/flag-icon/FlagIcon';
import type { CountryOption, GetCountriesResponse } from 'src/types/Country';
import { prepCountryOptions } from 'src/utils/prepCountryOptions';

export const getCountryUrls = () => {
  const dashboardUrl = process.env.STORYBOOK_ZONOS_DASHBOARD_URL || null;
  if (!dashboardUrl) {
    // eslint-disable-next-line no-console
    console.error('Missing environment variable STORYBOOK_ZONOS_DASHBOARD_URL');
  }
  return { dashboardUrl };
};

export const useCountryOptions = ({
  dashboardUrl = getCountryUrls().dashboardUrl,
  iconScale = 'small',
}: {
  dashboardUrl?: string | null;
  iconScale?: FlagScale;
}) => {
  const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);

  const requestCountries = useCallback(async () => {
    const response = await fetch(`${dashboardUrl}/api/address/getCountries`);
    if (response.ok) {
      const json = (await response.json()) as GetCountriesResponse;
      const options = prepCountryOptions({ json });
      const countries = options.map(option => ({
        ...option,
        icon: <FlagIcon code={option.code as Flag} iconScale={iconScale} />,
      }));
      setCountryOptions(countries);
    }
  }, [dashboardUrl, iconScale]);

  useEffect(() => {
    requestCountries();
  }, [requestCountries]);

  return countryOptions;
};
