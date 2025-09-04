import dayjs from 'dayjs';
import { z } from 'zod';

import type { SelectOption } from 'src/types/SelectOption';
import { fetcher } from 'src/utils/handleFetch';
import { useSwrt } from 'src/utils/hooks/useSwrt';
import { prepCountryOptions } from 'src/utils/prepCountryOptions';

import { useStorageWithLifetime } from './useStorage';

export const regions = [
  'Africa',
  'Americas',
  'Asia',
  'Central America',
  'Europe',
  'North America',
  'Oceania',
  'South America',
] as const;

type Region = (typeof regions)[number];

const schemaCountry = z.object({
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
});

const schema = z.array(schemaCountry);

/** @desc /api/address/getCountries */
export type Country<CountryCode extends string = string> = z.infer<
  typeof schemaCountry
> & {
  code: CountryCode;
};

export type CountryOption<CountryCode extends string = string> = {
  phoneCode: string[];
} & Country<CountryCode> &
  SelectOption<CountryCode>;
export type RegionCountryOption = {
  label: Region;
  options: CountryOption[];
};
export type UnavailableCountry = {
  code: string;
  message: string;
};
/** @desc /api/address/getCountries */
export type GetCountriesResponse<CountryCode extends string = string> = {
  [key: string]: Country<CountryCode>;
};

export const useCountryOptions = <TCountryCode extends string>({
  dashboardUrl,
  languageCode,
}: {
  dashboardUrl: string;
  languageCode?: string;
}) => {
  const { setValue: setCountryOptionsStorage, value: storedCountryOptions } =
    useStorageWithLifetime({
      defaultValue: [],
      key: '__zn_country_options',
      lifetime: dayjs().endOf('week'),
      schema,
      type: 'local',
    });

  const { data } = useSwrt<CountryOption<TCountryCode>[]>(
    `${dashboardUrl}/api/address/getCountries${languageCode ? `?languageCode=${languageCode}` : ''}`,
    {
      fetcher: async (args: TCountryCode) => {
        if (!storedCountryOptions.length) {
          const { json, response } = await fetcher<
            GetCountriesResponse<TCountryCode>
          >(args, {
            headers: {
              /**
               * This header is required to prevent CORS web cache poisoning
               * @link https://stackoverflow.com/questions/70018833/vercel-cache-cors-headers-issue-for-multiple-domains
               */
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
