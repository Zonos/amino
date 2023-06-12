import type { BBox } from 'geojson';
import type {
  Arc,
  MultiPolygon,
  Polygon,
  Transform,
} from 'topojson-specification';

type IProperties = {
  name: string;
};

type IGeometry = (Polygon | MultiPolygon) & { properties: IProperties };

export type IGeoJsonWorld = {
  arcs: Arc[];
  bbox: BBox;
  objects: {
    countries: {
      geometries: IGeometry[];
      type: 'GeometryCollection';
    };
  };
  transform: Transform;
  type: 'Topology';
};
