import { IGetCountriesResponse } from 'src/types/ICountry';

import { countryPhoneCodes } from './countryPhoneCodes';

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
