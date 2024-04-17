import { countryPhoneCodes } from 'src/utils/countryPhoneCodes';
import type { GetCountriesResponse } from 'src/utils/hooks/useCountryOptions';

export const prepCountryOptions = <CountryCode extends string = string>({
  json,
}: {
  json: GetCountriesResponse<CountryCode>;
}) =>
  Object.entries(json)
    .map(([, country]) => ({
      ...country,
      label: country.displayName,
      phoneCode:
        countryPhoneCodes.find(x => x.code === country.code)?.phoneCode || [],
      value: country.code,
    }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
