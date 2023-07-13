import type { IOption } from 'src/types/IOption';

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

type IRegion = (typeof regions)[number];

/** @desc /api/address/getCountries */
export interface ICountry<CountryCode extends string = string> {
  active: boolean;
  code: CountryCode;
  code3: string | null;
  currencyCode: string;
  displayName: string;
  fraudRisk: number;
  languageCode: string | null;
  numericCode: string | null;
  region: IRegion;
  upsCode: string | null;
  zipRegex: string | null;
}
export interface ICountryOption<CountryCode extends string = string>
  extends ICountry<CountryCode>,
    IOption<CountryCode> {
  phoneCode: string[];
}
export interface IRegionCountryOption {
  label: IRegion;
  options: ICountryOption[];
}
export interface IUnavailableCountry {
  code: string;
  message: string;
}
/** @desc /api/address/getCountries */
export interface IGetCountriesResponse<CountryCode extends string = string> {
  [key: string]: ICountry<CountryCode>;
}
