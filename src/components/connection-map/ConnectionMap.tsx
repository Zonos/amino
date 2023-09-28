import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from 'react-simple-maps';

import { geoCentroid, geoDistance } from 'd3-geo';
import styled from 'styled-components';
import { feature } from 'topojson-client';

import { Skeleton } from 'src/components/skeleton/Skeleton';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { type ICountryOption } from 'src/types/ICountry';
import { type IGeoJsonWorld } from 'src/types/IGeoJsonWorld';
import { getCountryCodeByName } from 'src/utils/getCountryCodeByName';

const Map = styled.div`
  background: ${theme.gray50};
  border-radius: ${theme.radius12};
  overflow: hidden;

  * {
    outline: none;
  }
`;

const MapSkeleton = styled(Skeleton)`
  box-sizing: border-box;
  border-radius: ${theme.radius12};
  width: 100%;
  /* 50% padding is 100% of width, ratio is 33%, so half */
  padding: 16.5%;
  margin: 0;
`;

const getScale = (xDistance: number, yDistance: number) => {
  // Account for large vertical distances not being scaled properly relative to horizntal distances because our viewport width is much greater than height
  const adjustedDistance =
    xDistance + yDistance > 4 ? 80 * (xDistance + yDistance - 4) : 0;

  // This was calculated using linear regression for approximate fit
  return (
    -19.46498024 * xDistance +
    -92.29376925 * yDistance +
    284.7 +
    adjustedDistance
  );
};

type Props = BaseProps & {
  countries: ICountryOption[];
  from: string;
  height?: number;
  to: string;
  worldData: IGeoJsonWorld | null;
};

export const ConnectionMap = ({
  className,
  countries,
  from,
  height = 400,
  to,
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
        g => getCountryCodeByName(g.properties?.name, countries) === iso,
      );
      if (geo) {
        return geoCentroid(geo);
      }

      return [0, 0];
    },
    [countries, geographies],
  );

  const loading = !geographies || !countries.length || !from || !to;

  useEffect(() => {
    if (loading) {
      return;
    }

    /**
     * @link https://www.react-simple-maps.io/docs/composable-map/
     * Do some math to make sure the map looks good in all positions
     */
    const [x1, y1] = coordsForIso(from);
    const [x2, y2] = coordsForIso(to);

    const distance = geoDistance([x1, y1], [x2, y2]);
    // Isolate the vector components because our width and height are different, and should be weighted differently.
    const xDistance = geoDistance([x1, 0], [x2, 0]);
    const yDistance = geoDistance([0, y1], [0, y2]);

    const calculatedScale = getScale(xDistance, yDistance);

    setScale(calculatedScale);

    const [midX, midY]: [number, number] = [(x1 + x2) / 2, (y1 + y2) / 2];
    // Use rotation for X instead of center as it looks better. Y rotation skews the projection unpleasantly though, so use the Y center primarily and use Y rotatin sparingly when needed
    setCenter([0, midY]);

    let rotateX = -midX;
    // If we need to flip completely because the shortest arc is on the opposite side
    if (Math.abs(x1 - x2) > 180) {
      rotateX += 180;
    }

    // High Y centers make the arc flattened and it looks bad, so solve that edge case, by rotating Y by a percent of Y coord if the value is large enough
    const baseRotateY =
      Math.abs(midY) > 55 ? distance * -(Math.abs(midY) - 50) : 0;

    // Account for arc getting flattened at the top for extremely long arcs at high Y positions
    const longArcFlatteningRotation =
      yDistance > 1 && xDistance > yDistance && Math.max(y1, y2) > 50
        ? (xDistance / yDistance) * -5
        : 0;

    const rotateY = baseRotateY + longArcFlatteningRotation;

    setRotation([rotateX, rotateY, 0]);
  }, [coordsForIso, to, from, loading]);

  if (loading) {
    return <MapSkeleton height={height} />;
  }

  return (
    <Map className={className}>
      <ComposableMap
        height={height}
        projection="geoEqualEarth"
        projectionConfig={{
          center,
          rotate: rotation,
          scale,
        }}
      >
        <Geographies geography={geographies}>
          {({ geographies: geos }) =>
            geos.map(geo => {
              const isConnectionCountry = [to, from].includes(
                getCountryCodeByName(geo.properties.name, countries),
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  fill={isConnectionCountry ? theme.blue100 : theme.gray0}
                  geography={geo}
                  stroke={isConnectionCountry ? theme.blue400 : theme.gray200}
                  strokeWidth={2}
                />
              );
            })
          }
        </Geographies>
        <Marker coordinates={coordsForIso(from)}>
          <circle fill={theme.blue300} r={10} />
          <circle fill={theme.blue400} r={7} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle fill={theme.blue300} r={10} />
          <circle fill={theme.blue400} r={7} />
        </Marker>
        <Line
          from={coordsForIso(from)}
          stroke={theme.blue600}
          strokeWidth={4}
          to={coordsForIso(to)}
        />
        <Marker coordinates={coordsForIso(from)}>
          <circle fill="white" r={4} />
          <circle fill={theme.blue600} r={2} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle fill="white" r={4} />
          <circle fill={theme.blue600} r={2} />
        </Marker>
      </ComposableMap>
    </Map>
  );
};
