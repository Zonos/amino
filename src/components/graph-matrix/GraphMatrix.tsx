import { ReactNode, useEffect, useState } from 'react';

import { ExecutionContextType, ToolbarButton } from '@graphiql/react';
import { CodeMirrorEditor } from '@graphiql/react/types/editor/types';
import { GraphiQL } from 'graphiql';
import { GraphQLSchema } from 'graphql';
import { EyeIcon } from 'src/icons/EyeIcon';
import { EyeOffIcon } from 'src/icons/EyeOffIcon';
import { theme } from 'src/styles/constants/theme';
import {
  ExecutionResultType,
  GraphiqlExecutionResult,
  HandleFetchFetcher,
} from 'src/utils/_graphiqlFetcher';
import { useGraphiqlExplorer } from 'src/utils/hooks/_useGraphiqlExplorer';
import { useGraphiqlFetcher } from 'src/utils/hooks/_useGraphiqlFetcher';
import { useGraphiqlStorage } from 'src/utils/hooks/_useGraphiqlStorage';
import styled from 'styled-components';

import { NestedDataTable } from '../nested-data-table/NestedDataTable';
import { SplitPanel } from '../split-panel/SplitPanel';
import { GraphiqlContextWrapper } from './_GraphiqlContextWrapper';
import { Loading } from './_LoadingIcon';

// These rules are !important because graphiql inlines their styles
const StyledWrapper = styled.div`
  height: 100%;
  .graphiql-tab > .graphiql-tab-button {
    outline: none;
  }
  .docExplorerWrap {
    /* Built-in plugin height is set to 100% which prevents the plugin bar scrolling */
    height: auto !important;
    /* Don't cap explorer width */
    width: auto !important;
  }
  .graphiql-explorer-graphql-arguments {
    svg {
      display: inline-block;
    }
  }

  .graphiql-explorer-root > div {
    overflow: auto !important;
  }
`;

const StyleTableWrap = styled.div`
  height: 100%;
`;

const StyledPivotTableWrapper = styled.div`
  height: 100vh;
  overflow: auto;
  padding: 0 ${theme.space12};
  display: flex;
  flex-direction: column;
`;

type GraphMatrixProps = {
  /**
   * @param fetcher
   * @description Custom fetcher, if not provided, the default fetcher (handleFetch - "src/utils/handleFetch.ts") will be used
   */
  fetcher?: HandleFetchFetcher;
  loadingComponent?: ReactNode;
  onEditQuery: (query: string) => void;
  onEditVariables: (variables: string) => void;
  onResultData?: (
    data: GraphiqlExecutionResult<ExecutionResultType> | null
  ) => void;
  query: string;
  schema: GraphQLSchema | null;
  /**
   * @param schemaName name of the schema, used to get the option for that schema from the cache
   * @example schemaName = 'Internal GraphQl'
   */
  schemaName: string;
  url: string;
  variables: string;
  // Toolbar item. You can add your own toolbar item and use the built in <GraphMatrix.ToolbarButton>
  customToolbar?: ReactNode;
};

export const GraphMatrix = ({
  fetcher,
  loadingComponent,
  onEditQuery,
  onEditVariables,
  onResultData,
  query = '',
  schema,
  schemaName,
  url,
  variables = '',
  customToolbar,
}: GraphMatrixProps) => {
  /** @description Graphiql doesn't expose props, so we use the hook `use{Something}Context` */
  const [executionContext, setExecutionContext] =
    useState<ExecutionContextType | null>(null);

  /** @description Response codemirror editor (have the ability to do some actions with response codemirror) */
  const [, setResponseEditorContext] = useState<CodeMirrorEditor | null>(null);

  const [isFetching, setIsFetching] = useState(false);
  const [cachingKey] = useState('first-time');
  const [showTable, setShowTable] = useState(false);

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
    if (resultData && onResultData) {
      onResultData(resultData);
    }
  }, [onResultData, resultData]);

  const graphMatrixPlugin = useGraphiqlExplorer({
    onEdit: onEditQuery,
    query,
  });

  // only show data if it's loading the schema
  if (!schema) {
    return <>{loadingComponent || <Loading />}</>;
  }

  const renderTableData = () => {
    // go deeper into the result "data" if possible
    const result = resultData !== null ? resultData.data : resultData;
    const actionResultList = result ? Object.entries(result) : null;

    if (actionResultList) {
      return (
        <StyledPivotTableWrapper>
          {actionResultList.map(([actionName, actionResult]) => {
            if (Array.isArray(actionResult) || actionResult) {
              return (
                <NestedDataTable
                  isFetching={isFetching}
                  key={actionName}
                  tableData={actionResult as Record<string, unknown>[]}
                  title={actionName}
                />
              );
            }
            return null;
          })}
        </StyledPivotTableWrapper>
      );
    }
    return null;
  };

  return (
    <StyledWrapper>
      <SplitPanel collapseAll={!showTable}>
        <StyleTableWrap>
          <GraphiQL
            fetcher={graphiqlFetcher}
            onEditOperationName={setOperationName}
            onEditQuery={onEditQuery}
            onEditVariables={onEditVariables}
            plugins={[graphMatrixPlugin]}
            query={query}
            variables={variables}
            schema={schema}
            toolbar={{
              additionalContent: (
                <>
                  <ToolbarButton
                    label={showTable ? 'Hide table' : 'Show table'}
                    onClick={() => setShowTable(!showTable)}
                  >
                    {showTable ? (
                      <EyeOffIcon color="gray400" />
                    ) : (
                      <EyeIcon color="gray400" />
                    )}
                  </ToolbarButton>
                  {customToolbar}
                </>
              ),
            }}
            storage={storage}
          >
            <GraphiqlContextWrapper
              setExecutionContext={setExecutionContext}
              setResponseEditorContext={setResponseEditorContext}
            >
              <GraphiQL.Footer />
            </GraphiqlContextWrapper>
          </GraphiQL>
        </StyleTableWrap>
        {renderTableData()}
      </SplitPanel>
    </StyledWrapper>
  );
};

GraphMatrix.ToolbarButton = ToolbarButton;
