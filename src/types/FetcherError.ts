import type { JsonError } from './JsonError';

export interface FetcherError {
  errors: JsonError[];
  status: number;
}
