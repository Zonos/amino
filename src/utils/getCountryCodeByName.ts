import type { CountryOption } from 'src/types/Country';

export const getCountryCodeByName = (
  countryName: string,
  countries: CountryOption[],
) => {
  const foundCountryByDisplayName = countries.find(
    country => country.displayName === countryName,
  );

  if (foundCountryByDisplayName) {
    return foundCountryByDisplayName.code;
  }

  const foundCountryByPartialName = countries.find(country =>
    country.displayName.includes(countryName),
  );

  if (foundCountryByPartialName) {
    return foundCountryByPartialName.code;
  }

  return '';
};
