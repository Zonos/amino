/* eslint-disable @typescript-eslint/no-require-imports */
const config = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      features: {
        // Disabled to prevent postcss-preset-env from converting colors to oklab(),
        // which has limited browser support and can produce unexpected output.
        'oklab-function': false,
      },
    }),
  ],
};

export default config;
