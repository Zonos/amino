import { ICountryOption, regions } from 'src/types/ICountry';

export const prepRegionCountryOptions = (countries: ICountryOption[]) =>
  regions.map(region => ({
    label: region,
    options: countries.filter(x => x.region === region),
  }));
