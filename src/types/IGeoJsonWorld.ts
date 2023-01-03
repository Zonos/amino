import { BBox } from 'geojson';
import { Arc, MultiPolygon, Polygon, Transform } from 'topojson-specification';

type IProperties = {
  name: string;
};

type IGeometry = (Polygon | MultiPolygon) & { properties: IProperties };

export type IGeoJsonWorld = {
  type: 'Topology';
  objects: {
    countries: {
      type: 'GeometryCollection';
      geometries: IGeometry[];
    };
  };
  arcs: Arc[];
  bbox: BBox;
  transform: Transform;
};
