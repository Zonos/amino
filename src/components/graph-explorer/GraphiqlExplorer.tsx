import { useEffect, useState } from 'react';

import { ExecutionContextType } from '@graphiql/react';
import { CodeMirrorEditor } from '@graphiql/react/types/editor/types';
import { GraphiQL } from 'graphiql';
import { GraphQLSchema } from 'graphql';
import {
  ExecutionResultType,
  GraphiqlExecutionResult,
  HandleFetchFetcher,
} from 'src/utils/_graphiqlFetcher';
import { useGraphiqlExplorer } from 'src/utils/hooks/_useGraphiqlExplorer';
import { useGraphiqlFetcher } from 'src/utils/hooks/_useGraphiqlFetcher';
import { useGraphiqlStorage } from 'src/utils/hooks/_useGraphiqlStorage';
import styled from 'styled-components';

import { GraphiqlContextWrapper } from './_GraphiqlContextWrapper';

const StyledWrapper = styled.div`
  height: 100%;
  .docExplorerWrap {
    // Built-in plugin height is set to 100% which prevents the plugin bar scrolling
    height: auto !important;
  }
  .graphiql-explorer-graphql-arguments {
    svg {
      display: inline-block;
    }
  }
`;

type GraphiqlExplorerProps = {
  /**
   * @param fetcher
   * @description Custom fetcher, if not provided, the default fetcher (handleFetch - "src/utils/handleFetch.ts") will be used
   */
  fetcher?: HandleFetchFetcher;
  onEditQuery: (query: string) => void;
  onEditVariables: (variables: string) => void;
  onResultData: (
    data: GraphiqlExecutionResult<ExecutionResultType> | null
  ) => void;
  // Caching key for the swr hook
  cachingKey: string;
  query: string;
  schema: GraphQLSchema | null;
  /**
   * @param schemaName name of the schema, used to get the option for that schema from the cache
   * @example schemaName = 'Internal GraphQl'
   */
  schemaName: string;
  setIsFetching: (fetching: boolean) => void;
  url: string;
  variables: string;
};

export const GraphiqlExplorer = ({
  fetcher,
  onEditQuery,
  onEditVariables,
  onResultData,
  cachingKey,
  query,
  schema,
  schemaName,
  setIsFetching,
  url,
  variables,
}: GraphiqlExplorerProps) => {
  /** @description Graphiql doesn't expose props, so we use the hook `use{Something}Context` */
  const [executionContext, setExecutionContext] =
    useState<ExecutionContextType | null>(null);

  /** @description Response codemirror editor (have the ability to do some actions with response codemirror) */
  const [, setResponseEditorContext] = useState<CodeMirrorEditor | null>(null);

  const [operationName, setOperationName] = useState('');
  const { graphiqlFetcher, resultData, isLoading } = useGraphiqlFetcher({
    cachingKey,
    url,
    query,
    customFetcher: fetcher || null,
    operationName,
  });

  const storage = useGraphiqlStorage({
    defaultSchema: schemaName,
  });

  useEffect(() => {
    /** Detect if is fetching data in graphiql explorer when hitting "Play" button  */
    setIsFetching(!!executionContext?.isFetching || isLoading);
  }, [executionContext?.isFetching, setIsFetching, isLoading]);

  useEffect(() => {
    onResultData(resultData);
  }, [onResultData, resultData]);

  const graphiqlExplorerPlugin = useGraphiqlExplorer({
    onEdit: onEditQuery,
    query,
  });

  return (
    <StyledWrapper>
      <GraphiQL
        fetcher={graphiqlFetcher}
        onEditOperationName={setOperationName}
        onEditQuery={onEditQuery}
        onEditVariables={onEditVariables}
        variables={variables}
        plugins={[graphiqlExplorerPlugin]}
        query={query}
        schema={schema}
        storage={storage}
      >
        <GraphiqlContextWrapper
          setExecutionContext={setExecutionContext}
          setResponseEditorContext={setResponseEditorContext}
        >
          <GraphiQL.Footer />
        </GraphiqlContextWrapper>
      </GraphiQL>
    </StyledWrapper>
  );
};
