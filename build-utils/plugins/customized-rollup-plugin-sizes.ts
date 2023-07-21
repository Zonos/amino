import { type Plugin } from 'rollup';
import sizes from 'rollup-plugin-sizes';

type ReportOptions = {
  // entry name
  data: {
    [key: string]: {
      basedir: string | null;
      name: string;
      path: string;
      size?: string;
    }[];
  };
  input: string;
  options: Options;
  total: number;
  // entry name
  totals: {
    name: string;
    size: number;
  }[];
};
type Options = {
  details: boolean;
  report?: (options: ReportOptions) => void;
};
const customizedSizePlugin = (options: Options): Plugin => sizes(options);
export default customizedSizePlugin;
