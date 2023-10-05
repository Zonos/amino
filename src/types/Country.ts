import type { SelectOption } from 'src/types/SelectOption';

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

/** @desc /api/address/getCountries */
export interface Country<CountryCode extends string = string> {
  active: boolean;
  code: CountryCode;
  code3: string | null;
  currencyCode: string;
  displayName: string;
  fraudRisk: number;
  languageCode: string | null;
  numericCode: string | null;
  region: Region;
  upsCode: string | null;
  zipRegex: string | null;
}
export interface CountryOption<CountryCode extends string = string>
  extends Country<CountryCode>,
    SelectOption<CountryCode> {
  phoneCode: string[];
}
export interface RegionCountryOption {
  label: Region;
  options: CountryOption[];
}
export interface UnavailableCountry {
  code: string;
  message: string;
}
/** @desc /api/address/getCountries */
export interface GetCountriesResponse<CountryCode extends string = string> {
  [key: string]: Country<CountryCode>;
}
