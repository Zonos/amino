import { z } from 'zod';

import {
  type CountryOption,
  type GetCountriesResponse,
  regions,
} from 'src/types/Country';
import { fetcher } from 'src/utils/handleFetch';
import { useSwrt } from 'src/utils/hooks/useSwrt';
import { prepCountryOptions } from 'src/utils/prepCountryOptions';
import { getShouldUpdateStorageItem } from 'src/utils/storage';

import { useStorage } from './useStorage';

const schema = z.array(
  z.object({
    active: z.boolean(),
    code: z.string(),
    code3: z.string().nullable(),
    currencyCode: z.string(),
    displayName: z.string(),
    fraudRisk: z.number(),
    label: z.string(),
    languageCode: z.string().nullable(),
    numericCode: z.string().nullable(),
    phoneCode: z.array(z.string()),
    region: z.enum(regions),
    upsCode: z.string().nullable(),
    value: z.string(),
    zipRegex: z.string().nullable(),
  }),
);

export const getCountryUrls = () => {
  const dashboardUrl = import.meta.env.STORYBOOK_ZONOS_DASHBOARD_URL || null;
  if (!dashboardUrl) {
    // eslint-disable-next-line no-console
    console.error('Missing environment variable STORYBOOK_ZONOS_DASHBOARD_URL');
  }
  return { dashboardUrl };
};

export const useCountryOptions = <TCountryCode extends string>(
  dashboardUrl?: string,
) => {
  const { setValue: setCountryOptionsStorage, value: storedCountryOptions } =
    useStorage({
      defaultValue: [],
      key: '__zn_country_options',
      schema,
      type: 'local',
    });

  const shouldUpdate = getShouldUpdateStorageItem({
    key: '__zn_country_options',
    schema: z.string(),
    type: 'local',
  });

  const url = dashboardUrl || getCountryUrls().dashboardUrl;
  const { data } = useSwrt<CountryOption<TCountryCode>[]>(
    `${url}/api/address/getCountries`,
    {
      fetcher: async (args: TCountryCode) => {
        if (shouldUpdate || !storedCountryOptions) {
          const { json, response } = await fetcher<
            GetCountriesResponse<TCountryCode>
          >(args, {
            headers: {
              'cache-control': 'no-cache',
            },
          });
          const options = json
            ? prepCountryOptions<TCountryCode>({ json })
            : [];
          setCountryOptionsStorage(options);
          return { json: options, response };
        }

        return { json: storedCountryOptions, response: null };
      },
    },
  );
  return data?.json || [];
};
