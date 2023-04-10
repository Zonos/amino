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

import { Skeleton } from '../skeleton/Skeleton';

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
                  fill={isConnectionCountry ? theme.blue100 : theme.gray400}
                  stroke={isConnectionCountry ? theme.blue300 : theme.gray500}
                  strokeWidth={1}
                />
              );
            })
          }
        </Geographies>
        <Marker coordinates={coordsForIso(from)}>
          <circle r={10} fill={theme.blue300} />
          <circle r={7} fill={theme.blue400} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle r={10} fill={theme.blue300} />
          <circle r={7} fill={theme.blue400} />
        </Marker>
        <Line
          from={coordsForIso(from)}
          to={coordsForIso(to)}
          stroke={theme.blue600}
          strokeWidth={4}
        />
        <Marker coordinates={coordsForIso(from)}>
          <circle r={4} fill="white" />
          <circle r={2} fill={theme.blue600} />
        </Marker>
        <Marker coordinates={coordsForIso(to)}>
          <circle r={4} fill="white" />
          <circle r={2} fill={theme.blue600} />
        </Marker>
      </ComposableMap>
    </Map>
  );
};
