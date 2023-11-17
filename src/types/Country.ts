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
export type Country<CountryCode extends string = string> = {
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
