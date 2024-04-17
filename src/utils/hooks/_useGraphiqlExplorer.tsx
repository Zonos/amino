import {
  type GraphiQLExplorerPluginProps,
  explorerPlugin,
} from '@graphiql/plugin-explorer';

import { theme } from 'src/styles/constants/theme';

type GraphiQlColors = {
  atom: string;
  attribute: string;
  builtin: string;
  def: string;
  keyword: string;
  number: string;
  property: string;
  qualifier: string;
  string: string;
  string2: string;
  variable: string;
};

export const useGraphiqlExplorer = ({
  overrideColor,
}: {
  overrideColor?: GraphiQlColors;
}) => {
  const explorerPluginProps: GraphiQLExplorerPluginProps = {
    colors: {
      atom: theme.blue300,
      attribute: theme.blue700,
      builtin: theme.blue300,
      def: theme.blue700,
      keyword: theme.red500,
      number: theme.blue700,
      property: theme.blue700,
      qualifier: theme.blue700,
      string: theme.blue500,
      string2: theme.blue500,
      variable: theme.red400,
      ...overrideColor,
    },
    showAttribution: true,
  };

  return explorerPlugin(explorerPluginProps);
};
