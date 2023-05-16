import { type ICountryOption, regions } from 'src/types/ICountry';

export const prepRegionCountryOptions = <T extends string = string>(
  countries: ICountryOption<T>[]
) =>
  regions.map(region => ({
    label: region,
    options: countries.filter(x => x.region === region),
  }));
