// Importing the type
// eslint-disable-next-line react/no-typos
import 'react';

// This would override the css properties in react and allow to use css variable like '--something' in style attribute
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
