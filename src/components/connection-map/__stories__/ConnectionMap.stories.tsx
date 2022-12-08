import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { ConnectionMap } from 'src/components/connection-map/ConnectionMap';
import { CountrySelect } from 'src/components/select/CountrySelect';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { IGeoJsonWorld } from 'src/types/IGeoJsonWorld';
import styled from 'styled-components';
import useSWR from 'swr';

import { getCountryUrls } from '../../select/__stories__/getCountryUrls';
import { useCountryOptions } from '../../select/__stories__/useCountryOptions';

const GEO_URL = '/zonos-countries-geojson.json';

const StyledWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const CountrySelectMeta: Meta = {
  component: ConnectionMap,
  decorators: [
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default CountrySelectMeta;

const ConnectionMapTemplate: Story<{ from: string; to: string }> = ({
  from: _from,
  to: _to,
}) => {
  const { dashboardUrl } = getCountryUrls();
  const { data: worldData } = useSWR<IGeoJsonWorld>(GEO_URL, async params => {
    const response = await fetch(params);
    const json = await response.json();
    return json;
  });
  const [from, setFrom] = useState(_from);
  const [to, setTo] = useState(_to);
  const countryOptions = useCountryOptions({
    dashboardUrl,
  });
  return (
    <VStack>
      <ConnectionMap
        countries={countryOptions}
        from={from}
        to={to}
        worldData={worldData || null}
        height={260}
      />

      <HStack>
        <CountrySelect
          countryOptions={countryOptions}
          label={`From ${from}`}
          onChange={option => setFrom(option?.value || '')}
          value={from}
        />
        <CountrySelect
          countryOptions={countryOptions}
          label={`To ${to}`}
          onChange={option => setTo(option?.value || '')}
          value={to}
        />
      </HStack>
    </VStack>
  );
};

export const ConnectionMap700Scale = ConnectionMapTemplate.bind({});
ConnectionMap700Scale.args = {
  from: 'US',
  to: 'MX',
};
ConnectionMap700Scale.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const ConnectionMap400Scale = ConnectionMapTemplate.bind({});
ConnectionMap400Scale.args = {
  from: 'US',
  to: 'GL',
};
ConnectionMap400Scale.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const ConnectionMap150Scale = ConnectionMapTemplate.bind({});
ConnectionMap150Scale.args = {
  from: 'US',
  to: 'JP',
};
ConnectionMap150Scale.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const ConnectionMap100Scale = ConnectionMapTemplate.bind({});
ConnectionMap100Scale.args = {
  from: 'US',
  to: 'SA',
};
ConnectionMap100Scale.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const ConnectionMap75Scale = ConnectionMapTemplate.bind({});
ConnectionMap75Scale.args = {
  from: 'US',
  to: 'AU',
};
ConnectionMap75Scale.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const ConnectionMap50Scale = ConnectionMapTemplate.bind({});
ConnectionMap50Scale.args = {
  from: 'US',
  to: 'MG',
};
ConnectionMap50Scale.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
