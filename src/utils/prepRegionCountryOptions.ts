import { type CountryOption, regions } from 'src/utils/hooks/useCountryOptions';

export const prepRegionCountryOptions = <T extends string = string>(
  countries: CountryOption<T>[],
) =>
  regions.map(region => ({
    label: region,
    options: countries.filter(x => x.region === region),
  }));
