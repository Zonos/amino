const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '525px',
  tabletS: '768px',
  tablet: '960px',
  desktopS: '1080px',
  desktop: '1300px',
  desktopMax: '1400px',
} as const;

export const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  desktopS: `(max-width: ${size.desktopS})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopMax: `(max-width: ${size.desktopMax})`,
} as const;
