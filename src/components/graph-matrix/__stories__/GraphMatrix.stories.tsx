import { useMemo, useState } from 'react';

import { ComponentStory, Meta } from '@storybook/react';
import { buildClientSchema, IntrospectionQuery } from 'graphql';
import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { Textarea } from 'src/components/textarea/Textarea';
import { GraphiqlExecutionResult } from 'src/utils/_graphiqlFetcher';
import { handleFetch } from 'src/utils/handleFetch';
import { useSwr } from 'src/utils/hooks/useSwr';
import { truncateText } from 'src/utils/truncateText';
import styled from 'styled-components';

import { GraphMatrix as GraphMatrixComponent } from '../GraphMatrix';

const FileUploadMeta: Meta = {
  component: GraphMatrixComponent,
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

const StyledWrapper = styled.div`
  height: 100%;
`;

export const GraphMatrix: ComponentStory<typeof GraphMatrixComponent> = () => {
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');

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

  if (!fetchedSchema) {
    return <LoadingWrapper>Fail to load schema</LoadingWrapper>;
  }

  return (
    <StyledWrapper>
      <HStack>
        <Textarea
          label="Query"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <Textarea
          label="Variables"
          onChange={e => setVariables(e.target.value)}
          value={variables}
        />
      </HStack>

      {fetchedSchema && (
        <GraphMatrixComponent
          loadingComponent={<LoadingWrapper>Loading...</LoadingWrapper>}
          onEditQuery={setQuery}
          onEditVariables={setVariables}
          query={query}
          schema={fetchedSchema}
          schemaName="Public Country Schema"
          url={publicGqlUrl}
          variables={variables}
        />
      )}
    </StyledWrapper>
  );
};
