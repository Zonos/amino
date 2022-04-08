import { ReactNode } from 'react';

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

type IRegion = typeof regions[number];

/** @desc /api/address/getCountries */
export interface ICountry {
  active: boolean;
  code3: string | null;
  code: string;
  currencyCode: string;
  displayName: string;
  fraudRisk: number;
  languageCode: string | null;
  numericCode: string | null;
  region: IRegion;
  upsCode: string | null;
  zipRegex: string | null;
}
export interface ICountryOption extends ICountry {
  icon: ReactNode;
  label: string;
  value: string;
}
export interface IRegionCountryOption {
  label: IRegion;
  options: ICountryOption[];
}
/** @desc /api/address/getCountries */
export interface IGetCountriesResponse {
  [key: string]: ICountry;
}
