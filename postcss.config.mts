/* eslint-disable @typescript-eslint/no-require-imports */
const config = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      features: {
        'oklab-function': false,
      },
    }),
  ],
};

export default config;
