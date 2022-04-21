import { Config } from 'bili';
import ttypescript from 'ttypescript';

const config: Config = {
  input: ['src/index.ts', 'src/i18n/index.ts', 'src/SetupPackage.ts'],
  plugins: {
    typescript2: {
      typescript: ttypescript,
      clean: true,
    },
  },
  output: {
    extractCSS: false,
    minify: true,
  },
};

export default config;
