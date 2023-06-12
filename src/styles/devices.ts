const size = {
  desktop: '1300px',
  desktopMax: '1400px',
  desktopS: '1080px',
  mobileL: '525px',
  mobileM: '375px',
  mobileS: '320px',
  tablet: '960px',
  tabletS: '768px',
} as const;

export const devices = {
  desktop: `(max-width: ${size.desktop})`,
  desktopMax: `(max-width: ${size.desktopMax})`,
  desktopS: `(max-width: ${size.desktopS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileS: `(max-width: ${size.mobileS})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletS: `(max-width: ${size.tabletS})`,
} as const;
