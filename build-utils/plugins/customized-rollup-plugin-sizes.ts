import { Plugin } from 'rollup';
import sizes from 'rollup-plugin-sizes';

type ReportOptions = {
  input: string; // entry name
  data: {
    [key: string]: {
      name: string;
      basedir: string | null;
      path: string;
      size?: string;
    }[];
  }; // entry name
  totals: {
    name: string;
    size: number;
  }[];
  total: number;
  options: Options;
};
type Options = {
  report?: (options: ReportOptions) => void;
  details: boolean;
};
const customizedSizePlugin = (options: Options): Plugin => sizes(options);
export default customizedSizePlugin;
