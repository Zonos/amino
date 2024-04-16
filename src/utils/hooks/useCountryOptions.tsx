import { z } from 'zod';

import {
  type CountryOption,
  type GetCountriesResponse,
  regions,
} from 'src/types/Country';
import { fetcher } from 'src/utils/handleFetch';
import { useSwrt } from 'src/utils/hooks/useSwrt';
import { prepCountryOptions } from 'src/utils/prepCountryOptions';
import {
  getShouldUpdateStorageItem,
  getStorageItem,
  setStorageItem,
} from 'src/utils/storage';

type CountryCode = string;

export const getCountryUrls = () => {
  const dashboardUrl = import.meta.env.STORYBOOK_ZONOS_DASHBOARD_URL || null;
  if (!dashboardUrl) {
    // eslint-disable-next-line no-console
    console.error('Missing environment variable STORYBOOK_ZONOS_DASHBOARD_URL');
  }
  return { dashboardUrl };
};

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

export const useCountryOptions = ({
  dashboardUrl = getCountryUrls().dashboardUrl,
}: {
  dashboardUrl?: string | null;
}) => {
  const storedData = getStorageItem({
    key: '__zn_country_options',
    schema,
    type: 'local',
  });
  const shouldUpdate = getShouldUpdateStorageItem({
    key: '__zn_country_options',
    schema: z.string(),
    type: 'local',
  });

  const { data } = useSwrt<CountryOption<CountryCode>[]>(
    `${dashboardUrl}/api/address/getCountries`,
    async (args: string) => {
      if (shouldUpdate || !storedData) {
        const { json, response } = await fetcher<
          GetCountriesResponse<CountryCode>
        >(args, {
          headers: {
            'cache-control': 'no-cache',
          },
        });
        const options = json ? prepCountryOptions<CountryCode>({ json }) : [];
        setStorageItem({
          key: '__zn_country_options',
          type: 'local',
          value: JSON.stringify(options),
        });
        return { json: options, response };
      }

      const countryArray: CountryOption<CountryCode>[] = storedData || [];
      return { json: countryArray, response: null };
    },
  );
  return data?.json || [];
};
