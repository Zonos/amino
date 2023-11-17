import type { BBox } from 'geojson';
import type {
  Arc,
  MultiPolygon,
  Polygon,
  Transform,
} from 'topojson-specification';

type Properties = {
  name: string;
};

type Geometry = (Polygon | MultiPolygon) & { properties: Properties };

export type GeoJsonWorld = {
  arcs: Arc[];
  bbox: BBox;
  objects: {
    countries: {
      geometries: Geometry[];
      type: 'GeometryCollection';
    };
  };
  transform: Transform;
  type: 'Topology';
};
