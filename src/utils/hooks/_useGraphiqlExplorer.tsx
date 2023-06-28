import type { CSSProperties, ReactNode } from 'react';

import { useExplorerPlugin } from '@graphiql/plugin-explorer';
import {
  type FragmentDefinitionNode,
  type GraphQLArgument,
  type GraphQLField,
  type GraphQLInputField,
  type GraphQLLeafType,
  type GraphQLObjectType,
  type GraphQLSchema,
  type ValueNode,
} from 'graphql';
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

/**
 * The type is extracted from the `useExplorerPlugin` hook of the `plugin-explorer` in `node_modules`
 * Somehow typescript didn't pickup the imported `graphiql-explorer.d.ts` that's declared in that library.
 * @path node_modules/@graphiql/plugin-explorer/types/index.d.ts
 */
type GraphMatrixProps = {
  arrowClosed?: ReactNode | null;
  arrowOpen?: ReactNode | null;
  checkboxChecked?: ReactNode | null;
  checkboxUnchecked?: ReactNode | null;
  colors?: GraphiQlColors;
  explorerIsOpen?: boolean;
  externalFragments?: FragmentDefinitionNode[];
  getDefaultFieldNames?(type: GraphQLObjectType): string[];
  getDefaultScalarArgValue?(
    parentField: GraphQLField<unknown, unknown>,
    arg: GraphQLArgument | GraphQLInputField,
    underlyingArgType: GraphQLLeafType
  ): ValueNode;
  hideActions?: boolean;
  makeDefaultArg?(
    parentField: GraphQLField<unknown, unknown>,
    arg: GraphQLArgument | GraphQLInputField
  ): boolean;
  onRunOperation?(name: string | null): void;
  onToggleExplorer?(): void;
  query: string;
  schema?: GraphQLSchema | null;
  showAttribution: boolean;
  styles?: {
    actionButtonStyle?: CSSProperties;
    buttonStyle?: CSSProperties;
    explorerActionsStyle?: CSSProperties;
  } | null;
  title?: string;
  width?: number;
  onEdit?: (newQuery: string) => void;
};

export const useGraphiqlExplorer = ({
  onEdit,
  overrideColor,
  query,
}: {
  overrideColor?: GraphiQlColors;
  query: string;
  onEdit: (newQuery: string) => void;
}) => {
  const explorerPluginProps: GraphMatrixProps = {
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
    onEdit,
    query,
    showAttribution: true,
  };

  const explorerPlugin = useExplorerPlugin(explorerPluginProps);
  return explorerPlugin;
};
