import { Config } from 'bili';

const config: Config = {
  input: 'src/index.ts',
  output: {
    extractCSS: false,
    minify: true,
  },
};

export default config;
