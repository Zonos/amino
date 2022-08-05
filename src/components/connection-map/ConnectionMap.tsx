import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
  background: ${theme['gray-l80']};

  * {
    outline: none;
  }
`;

const getScaleMultiple = ({
  distance,
  verticalDistance,
}: {
  distance: number;
  verticalDistance: number;
}) => {
  if (distance < 0.5 && verticalDistance < 45) {
    // US to MX (Mexico) = .36
    return 700;
  }
  if (distance < 1 && verticalDistance < 50) {
    // US to GL (Greenland) = .68
    return 400;
  }
  if (distance < 1.75 && verticalDistance < 60) {
    // US to KZ (Kazakhstan) = 1.509
    return 150;
  }
  if (distance < 2 && verticalDistance < 65) {
    // US to SA (Saudia Arabia) = 1.83
    return 100;
  }
  if (distance < 2.5 && verticalDistance < 70) {
    // US to AU (Australia) = 2.27
    return 75;
  }
  // US to MG (Madagascar) = 2.52
  return 50;
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
    if (geographies) {
      const [x1, y1] = coordsForIso(to);
      const [x2, y2] = coordsForIso(from);

      const distance = geoDistance([x1, y1], [x2, y2]);
      const midpoint: [number, number] = [(x1 + x2) / 2, (y1 + y2) / 2];

      setCenter(midpoint);
      const verticalDistance = Math.abs(y1 - y2);
      const scaleMultiple = getScaleMultiple({ distance, verticalDistance });
      setScale(distance * scaleMultiple);
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
        }}
        height={height}
      >
        <Geographies
          geography={geographies}
          stroke={theme['gray-l20']}
          strokeWidth={1}
        >
          {({ geographies: geos }) =>
            geos.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  [to, from].includes(
                    getCountryCodeByName(geo.properties.name, countries)
                  )
                    ? theme['blue-l80']
                    : theme['gray-l40']
                }
              />
            ))
          }
        </Geographies>
        <Marker coordinates={coordsForIso(from)}>
          <circle r={10} fill={theme['blue-l60']} />
          <circle r={7} fill={theme['blue-l40']} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle r={10} fill={theme['blue-l60']} />
          <circle r={7} fill={theme['blue-l40']} />
        </Marker>
        <Line
          from={coordsForIso(from)}
          to={coordsForIso(to)}
          stroke={theme['blue-base']}
          strokeWidth={4}
        />
        <Marker coordinates={coordsForIso(from)}>
          <circle r={4} fill="white" />
          <circle r={2} fill={theme['blue-base']} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle r={4} fill="white" />
          <circle r={2} fill={theme['blue-base']} />
        </Marker>
      </ComposableMap>
    </Map>
  );
};
