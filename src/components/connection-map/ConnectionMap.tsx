import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from 'react-simple-maps';

import { geoCentroid, geoDistance } from 'd3-geo';
import { theme } from 'src/styles/constants/theme';
import { ICountryOption } from 'src/types/ICountry';
import { IGeoJsonWorld } from 'src/types/IGeoJsonWorld';
import { getCountryCodeByName } from 'src/utils/getCountryCodeByName';
import styled from 'styled-components';
import { feature } from 'topojson-client';

const Map = styled.div`
  background: ${theme.grayL80};

  * {
    outline: none;
  }
`;

const getScale = (distance: number, verticalDistance: number) => {
  const verticalScaling = 80 * Math.abs(verticalDistance / distance);

  return -72.4 * distance + 302 - verticalScaling;
};

type Props = {
  countries: ICountryOption[];
  height?: number;
  to: string;
  from: string;
  worldData: IGeoJsonWorld | null;
};

export const ConnectionMap = ({
  countries,
  to,
  from,
  height = 400,
  worldData,
}: Props) => {
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const geographies = useMemo(() => {
    if (worldData) {
      const { features } = feature(worldData, worldData.objects.countries);
      return features;
    }
    return null;
  }, [worldData]);

  const coordsForIso = useCallback(
    (iso: string): [number, number] => {
      const geo = geographies?.find(
        g => getCountryCodeByName(g.properties?.name, countries) === iso
      );
      if (geo) {
        return geoCentroid(geo);
      }

      return [0, 0];
    },
    [countries, geographies]
  );

  useEffect(() => {
    /**
     * @link https://www.react-simple-maps.io/docs/composable-map/
     * Do some math to make sure the map looks good in all positions
     */
    if (geographies) {
      const [x1, y1] = coordsForIso(from);
      const [x2, y2] = coordsForIso(to);

      const distance = geoDistance([x1, y1], [x2, y2]);
      const verticalDistance = geoDistance([0, y1], [0, y2]);

      setScale(getScale(distance, verticalDistance));

      const [midX, midY]: [number, number] = [(x1 + x2) / 2, (y1 + y2) / 2];
      // Use rotation for X instead of center as it looks better. Y rotation skews the projection unpleasantly though, so use the Y center primarily.
      setCenter([0, midY]);

      let rotateX = -midX;
      // If we need to flip completely because the shorter arc is on the opposite side
      if (Math.abs(x1 - x2) > 180) {
        rotateX += 180;
      }

      // High Y centers make the arc flattened and it looks bad, so solve that edge case, by rotating Y by a percent of Y coord if the value is large enough.
      const rotateY =
        Math.abs(midY) > 55 ? distance * -(Math.abs(midY) - 50) : 0;
      // Figure out rotation based on midpoint
      setRotation([rotateX, rotateY, 0]);
    }
  }, [geographies, coordsForIso, to, from]);

  if (!worldData || !geographies) {
    return null;
  }

  return (
    <Map>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale,
          center,
          rotate: rotation,
        }}
        height={height}
      >
        <Geographies geography={geographies}>
          {({ geographies: geos }) =>
            geos.map(geo => {
              const isConnectionCountry = [to, from].includes(
                getCountryCodeByName(geo.properties.name, countries)
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isConnectionCountry ? theme.blueL80 : theme.grayL40}
                  stroke={isConnectionCountry ? theme.blueL60 : theme.grayL20}
                  strokeWidth={1}
                />
              );
            })
          }
        </Geographies>
        <Marker coordinates={coordsForIso(from)}>
          <circle r={10} fill={theme.blueL60} />
          <circle r={7} fill={theme.blueL40} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle r={10} fill={theme.blueL60} />
          <circle r={7} fill={theme.blueL40} />
        </Marker>
        <Line
          from={coordsForIso(from)}
          to={coordsForIso(to)}
          stroke={theme.blueBase}
          strokeWidth={4}
        />
        <Marker coordinates={coordsForIso(from)}>
          <circle r={4} fill="white" />
          <circle r={2} fill={theme.blueBase} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle r={4} fill="white" />
          <circle r={2} fill={theme.blueBase} />
        </Marker>
      </ComposableMap>
    </Map>
  );
};
