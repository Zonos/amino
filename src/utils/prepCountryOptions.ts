import type { GetCountriesResponse } from 'src/types/Country';
import { countryPhoneCodes } from 'src/utils/countryPhoneCodes';

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
