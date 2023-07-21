import type { JsonError } from 'src/types/JsonError';

export interface FetcherError {
  errors: JsonError[];
  status: number;
}
