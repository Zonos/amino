import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { getCountryUrls } from 'story-utils/getCountryUrls';

import { ConnectionMap } from 'src/components/connection-map/ConnectionMap';
import { CountrySelect } from 'src/components/select/CountrySelect';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import type { GeoJsonWorld } from 'src/types/GeoJsonWorld';
import { useCountryOptions } from 'src/utils/hooks/useCountryOptions';
import { useSwr } from 'src/utils/hooks/useSwr';

const GEO_URL = '/zonos-countries-geojson.json';

const CountrySelectMeta: Meta = {
  component: ConnectionMap,
  decorators: [
    Component => (
      <div
        style={{
          width: 412,
        }}
      >
        <Component />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
    },
  },
};

export default CountrySelectMeta;

const ConnectionMapTemplate: StoryFn<{ from: string; to: string }> = ({
  from: _from,
  to: _to,
}) => {
  const { data: worldData } = useSwr<GeoJsonWorld>(GEO_URL, async params => {
    const response = await fetch(params);
    const json = (await response.json()) as GeoJsonWorld;
    return json;
  });
  const [from, setFrom] = useState(_from);
  const [to, setTo] = useState(_to);
  const { dashboardUrl } = getCountryUrls();
  const countryOptions = useCountryOptions(dashboardUrl);
  return (
    <VStack>
      <ConnectionMap
        countries={countryOptions}
        from={from}
        height={265}
        to={to}
        worldData={worldData || null}
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

export const USToMexico = ConnectionMapTemplate.bind({});
USToMexico.args = {
  from: 'US',
  to: 'MX',
};

export const USToJapan = ConnectionMapTemplate.bind({});
USToJapan.args = {
  from: 'US',
  to: 'JP',
};

export const IcelandToGreenland = ConnectionMapTemplate.bind({});
IcelandToGreenland.args = {
  from: 'IS',
  to: 'GL',
};

export const USToSaudiArabia = ConnectionMapTemplate.bind({});
USToSaudiArabia.args = {
  from: 'US',
  to: 'SA',
};

export const USToAustralia = ConnectionMapTemplate.bind({});
USToAustralia.args = {
  from: 'US',
  to: 'AU',
};

export const USToMadagascar = ConnectionMapTemplate.bind({});
USToMadagascar.args = {
  from: 'US',
  to: 'MG',
};

export const RussiaToCanada = ConnectionMapTemplate.bind({});
RussiaToCanada.args = {
  from: 'RU',
  to: 'CA',
};

export const RussiaToAustralia = ConnectionMapTemplate.bind({});
RussiaToAustralia.args = {
  from: 'RU',
  to: 'AU',
};

export const RussiaToArgentina = ConnectionMapTemplate.bind({});
RussiaToArgentina.args = {
  from: 'RU',
  to: 'AR',
};

export const RussiaToGreenland = ConnectionMapTemplate.bind({});
RussiaToGreenland.args = {
  from: 'RU',
  to: 'GL',
};

export const RussiaToEcuador = ConnectionMapTemplate.bind({});
RussiaToEcuador.args = {
  from: 'RU',
  to: 'EC',
};

export const Loading = ConnectionMapTemplate.bind({});
Loading.args = {};
