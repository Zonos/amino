import { useMemo, useState } from 'react';

import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { buildClientSchema, IntrospectionQuery } from 'graphql';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { GraphiqlExecutionResult } from 'src/utils/_graphiqlFetcher';
import { handleFetch } from 'src/utils/handleFetch';
import { useSwr } from 'src/utils/hooks/useSwr';
import styled from 'styled-components';

import 'src/styles/graphiql.css';

import { GraphiqlExplorer as GraphiqlExplorerComponent } from '../GraphiqlExplorer';

const FileUploadMeta: Meta = {
  component: GraphiqlExplorerComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=72%3A819&t=erzegCytT9AfSn9f-0',
    },
  },
};

export default FileUploadMeta;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GraphiqlExplorer: ComponentStory<
  typeof GraphiqlExplorerComponent
> = () => {
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [cachingKey] = useState('page=1');

  const [queryResult, setQueryResult] =
    useState<GraphiqlExecutionResult | null>();

  const publicGqlUrl = 'https://countries.trevorblades.com';

  const { data: schemaData, isLoading: schemaLoading } = useSwr<{
    data: IntrospectionQuery | null;
  }>(`${publicGqlUrl}/instropection`, {
    fetcher: async () => {
      const { json } = await handleFetch<{ data: IntrospectionQuery }>(
        publicGqlUrl,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'content-type': 'application/json',
          },
          body: {
            query:
              '\n    query IntrospectionQuery {\n      __schema {\n        \n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          description\n          \n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      description\n      \n      fields(includeDeprecated: true) {\n        name\n        description\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        description\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      description\n      type { ...TypeRef }\n      defaultValue\n      \n      \n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ',
            operationName: 'IntrospectionQuery',
          },
        }
      );
      return json || { data: null };
    },
    errorRetryCount: 0,
  });

  const fetchedSchema = useMemo(() => {
    if (schemaData?.data) {
      return buildClientSchema(schemaData.data);
    }
    return null;
  }, [schemaData]);

  if (schemaLoading) {
    return <LoadingWrapper>Loading schema...</LoadingWrapper>;
  }

  return (
    <div>
      <VStack>
        <Text>
          Import this when you use this component
          <pre>{`import '@amino-ui/core/graphiql.css';`}</pre>
        </Text>
        <Text>Schema: {fetchedSchema ? 'fetched' : 'not fetched'}</Text>
        <Text>Query loading: {isFetching ? 'yes' : 'no'}</Text>
        <Text>
          Loaded query result from `GraphiqlExplorer` component:
          {JSON.stringify(queryResult?.data)}
        </Text>
      </VStack>

      {fetchedSchema && (
        <GraphiqlExplorerComponent
          fetcher={async (url, options) =>
            handleFetch(url, {
              ...options,
              headers: {
                ...options?.headers,
              },
            })
          }
          cachingKey={cachingKey}
          schemaName="Public Country Schema"
          url={publicGqlUrl}
          onEditQuery={setQuery}
          onEditVariables={setVariables}
          onResultData={setQueryResult}
          query={query}
          schema={fetchedSchema}
          setIsFetching={setIsFetching}
          variables={variables}
        />
      )}
    </div>
  );
};
