import { CSSProperties, ReactNode } from 'react';

import { useExplorerPlugin } from '@graphiql/plugin-explorer';
import {
  FragmentDefinitionNode,
  GraphQLArgument,
  GraphQLField,
  GraphQLInputField,
  GraphQLLeafType,
  GraphQLObjectType,
  GraphQLSchema,
  ValueNode,
} from 'graphql';
import { theme } from 'src/styles/constants/theme';

type GraphiQlColors = {
  keyword: string;
  def: string;
  property: string;
  qualifier: string;
  attribute: string;
  number: string;
  string: string;
  builtin: string;
  string2: string;
  variable: string;
  atom: string;
};

/**
 * The type is extracted from the `useExplorerPlugin` hook of the `plugin-explorer` in `node_modules`
 * Somehow typescript didn't pickup the imported `graphiql-explorer.d.ts` that's declared in that library.
 * @path node_modules/@graphiql/plugin-explorer/types/index.d.ts
 */
type GraphiqlExplorerProps = {
  query: string;
  width?: number;
  title?: string;
  schema?: GraphQLSchema | null;
  onEdit?: (newQuery: string) => void;
  getDefaultFieldNames?(type: GraphQLObjectType): string[];
  getDefaultScalarArgValue?(
    parentField: GraphQLField<unknown, unknown>,
    arg: GraphQLArgument | GraphQLInputField,
    underlyingArgType: GraphQLLeafType
  ): ValueNode;
  makeDefaultArg?(
    parentField: GraphQLField<unknown, unknown>,
    arg: GraphQLArgument | GraphQLInputField
  ): boolean;
  onToggleExplorer?(): void;
  explorerIsOpen?: boolean;
  onRunOperation?(name: string | null): void;
  colors?: GraphiQlColors;
  arrowOpen?: ReactNode | null;
  arrowClosed?: ReactNode | null;
  checkboxChecked?: ReactNode | null;
  checkboxUnchecked?: ReactNode | null;
  styles?: {
    explorerActionsStyle?: CSSProperties;
    buttonStyle?: CSSProperties;
    actionButtonStyle?: CSSProperties;
  } | null;
  showAttribution?: boolean;
  hideActions?: boolean;
  externalFragments?: FragmentDefinitionNode[];
};

export const useGraphiqlExplorer = ({
  onEdit,
  query,
  overrideColor,
}: {
  onEdit: (newQuery: string) => void;
  query: string;
  overrideColor?: GraphiQlColors;
}) => {
  const explorerPluginProps: GraphiqlExplorerProps = {
    query,
    onEdit,
    showAttribution: true,
    colors: {
      atom: theme.blue300,
      attribute: theme.blue700,
      builtin: theme.blue300,
      def: theme.blue700,
      keyword: theme.red500,
      number: theme.blue700,
      property: theme.blue700,
      qualifier: theme.blue700,
      string2: theme.blue500,
      string: theme.blue500,
      variable: theme.red400,
      ...overrideColor,
    },
  };

  const explorerPlugin = useExplorerPlugin(explorerPluginProps);
  return explorerPlugin;
};
